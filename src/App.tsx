import ExpenseList from "./components/ExpenseList.tsx";
import {useState} from "react";
import ExpenseFilter from "./components/ExpenseFilter.tsx";
import ExpenseForm from "./components/ExpenseForm.tsx";

export default function App() {
    const [expenses, setExpenses] = useState([
        {id: 0, description: "Expense 1", amount: 1000, category: "Utilities" },
        {id: 1, description: "Expense 2", amount: 1000, category: "Entertainment" },
        {id: 2, description: "Expense 3", amount: 1000, category: "Utilities" },
        {id: 3, description: "Expense 4", amount: 1000, category: "Groceries" },
    ]);

    const [selectedCategory, setSelectedCategory] = useState('');

    const visibleExpenses = selectedCategory
        ? expenses.filter(expense => expense.category === selectedCategory)
        : expenses;

    return (
        <div className="max-w-3xl mx-auto my-5 space-y-10 p-5">
            <ExpenseForm onSubmit={data => {
                setExpenses([...expenses, {...data, id: expenses.slice(-1)[0].id + 1}]);
            }} />
            <ExpenseFilter onSelectCategory={category => setSelectedCategory(category)} />
            <ExpenseList
                expenses={visibleExpenses}
                onDelete={(id) => setExpenses(expenses.filter(expense => expense.id !== id))}
            />
        </div>
    )
}