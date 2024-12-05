import {FieldValues, useForm} from "react-hook-form";

interface FormData{
    name: string;
    age: number;
}

export default function Form() {
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>();

    const onSubmit = (data: FieldValues) => { console.log(data) };

    return <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto p-5">
        <div className="mb-5">
            <label htmlFor="name" className="block mb-2 text-sm font-mediu text-gray-900 dark:text-white">Name</label>
            <input type="text" id="name"
                   {...register("name", { required: true, minLength: 5 })}
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder="John Doe" />
            {errors.name?.type === 'required' && <p className="text-sm text-red-500">The name field is required.</p>}
            {errors.name?.type === 'minLength' && <p className="text-sm text-red-500">Your name must have at least 5 characters.</p>}
        </div>

        <div className="mb-5">
            <label htmlFor="age" className="block mb-2 text-sm font-mediu text-gray-900 dark:text-white">Age</label>
            <input type="number" id="age"
                   {...register("age")}
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder="30"/>
        </div>

        <button type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
        </button>
    </form>;
}