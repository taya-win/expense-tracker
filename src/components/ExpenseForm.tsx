
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {categories} from "../types.ts";

const schema = z.object({
    description: z.string().min(5,{message: "Description must be at least 5 characters."}).max(50),
    amount: z.number({invalid_type_error: "Amount is required."}).min(0.01).max(100_000),
    category: z.enum(categories, {errorMap: () => ({message: "Category is required."})}),
});

type FormData = z.infer<typeof schema>;

export default function ExpenseForm() {
    const {register, formState: {errors}, handleSubmit} = useForm<FormData>({resolver: zodResolver(schema)});
    return <form onSubmit={handleSubmit(data => console.log(data))}>
        <div className="mb-5">
            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Description
            </label>
            <input type="text" id="description"
                   {...register('description')}
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   required
            />
            {errors.description && (<p className="text-sm text-red-500">{errors.description.message}</p>)}
        </div>

        <div className="mb-5">
            <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Amount
            </label>
            <input type="number" id="amount"
                   {...register('amount', {valueAsNumber: true})}
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   required
            />
            {errors.amount && (<p className="text-sm text-red-500">{errors.amount.message}</p>)}
        </div>
        <div className="mb-5">
            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Category
            </label>
            <select
                {...register('category')}
                id="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {categories.map(category => (<option key={category} value={category}>{category}</option>))}
            </select>
            {errors.category && (<p className="text-sm text-red-500">{errors.category.message}</p>)}
        </div>
        <button type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
        </button>
    </form>;
}