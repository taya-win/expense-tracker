import {FieldValues, useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

const schema = z.object({
    name: z.string().min(3, {message: "Name must be at least 3 characters."}),
    age: z.number({invalid_type_error: "Age is required."}).min(18, {message: "Age must be at least 18."}),
});

type FormData = z.infer<typeof schema>;

export default function Form() {
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({resolver: zodResolver(schema)});

    const onSubmit = (data: FieldValues) => { console.log(data) };

    return <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto p-5">
        <div className="mb-5">
            <label htmlFor="name" className="block mb-2 text-sm font-mediu text-gray-900 dark:text-white">Name</label>
            <input type="text" id="name"
                   {...register("name", { required: true, minLength: 5 })}
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder="John Doe" />
            {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
        </div>

        <div className="mb-5">
            <label htmlFor="age" className="block mb-2 text-sm font-mediu text-gray-900 dark:text-white">Age</label>
            <input type="number" id="age"
                   {...register("age", {valueAsNumber: true})}
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder="30"/>
            {errors.age && <p className="text-sm text-red-500">{errors.age.message}</p>}
        </div>

        <button type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
        </button>
    </form>;
}