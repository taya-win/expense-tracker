import {FormEvent} from "react";

export default function Form() {
    const handleSubmit = ((event: FormEvent) => {
        event.preventDefault();
        console.log("Form submitted");
    });
    return <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-5">
        <div className="mb-5">
            <label htmlFor="name" className="block mb-2 text-sm font-mediu text-gray-900 dark:text-white">Name</label>
            <input type="text" id="name"
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder="John Doe" required/>
        </div>

        <div className="mb-5">
            <label htmlFor="age" className="block mb-2 text-sm font-mediu text-gray-900 dark:text-white">Age</label>
            <input type="number" id="age"
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder="30" required/>
        </div>

        <button type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
        </button>
    </form>;
}