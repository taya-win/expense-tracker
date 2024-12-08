import {categories} from "../types.ts";


interface Props {
    onSelectCategory: (category: string) => void;
}
export default function ExpenseFilter({onSelectCategory}: Props) {
    return <>
        <select
            onChange={event => onSelectCategory(event.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="" >All Categories</option>
            {categories.map(category => (<option key={category} value={category}>{category}</option>))}
        </select>
    </>;
}