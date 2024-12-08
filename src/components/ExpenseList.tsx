interface Expense {
    id: number;
    description: string;
    amount: number;
    category: string;
}

interface Props {
    expenses: Expense[];
    onDelete: (id: number) => void;
}

export default function ExpenseList({expenses, onDelete} : Props) {
    if (expenses.length === 0) return null;
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Description
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Amount
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Category
                    </th>
                    <th scope="col" className="px-6 py-3">

                    </th>
                </tr>
                </thead>
                <tbody>
                {expenses.map((expense: Expense) => (
                    <tr key={expense.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {expense.description}
                        </th>
                        <td className="px-6 py-4">
                            ${expense.amount}
                        </td>
                        <td className="px-6 py-4">
                            {expense.category}
                        </td>
                        <td className="px-6 py-4">
                            <button type="button"
                                    onClick={() => onDelete(expense.id)}
                                    className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
                <tfoot>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Total
                    </th>
                    <td className="px-6 py-4">
                        ${expenses.reduce((total, expense) => total + expense.amount, 0)}
                    </td>
                </tr>
                </tfoot>
            </table>
        </div>
    );
}