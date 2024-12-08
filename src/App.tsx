import ExpenseList from "./components/ExpenseList.tsx";
import {useState} from "react";

export default function App() {
    const [expenses, setExpenses] = useState([
        {id: 0, description: "Expense 1", amount: 1000, category: "Utilities" },
        {id: 1, description: "Expense 2", amount: 1000, category: "Utilities" },
        {id: 2, description: "Expense 3", amount: 1000, category: "Utilities" },
        {id: 3, description: "Expense 4", amount: 1000, category: "Utilities" },
    ]);

    return (
        <div className="max-w-3xl mx-auto my-5">
            <ExpenseList
                expenses={expenses}
                onDelete={(id) => setExpenses(expenses.filter(expense => expense.id !== id))}
            />
        </div>
    )
}