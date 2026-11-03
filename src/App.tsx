import { useState } from "react";
import { useTodos } from "./hooks/useTodos";
import { TodoForm } from "./components/TodoForm";
import { TodoFilter } from "./components/TodoFilter";
import { TodoItem } from "./components/TodoItem";
import type { FilterType } from "./types/todo";

export default function App() {
    const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();
    const [filter, setFilter] = useState<FilterType>("all");

    const filteredTodos = todos.filter((todo) => {
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
        return true;
    });

    const activeCount = todos.filter((t) => !t.completed).length;

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Список задач</h1>

            <TodoForm onAddTodo={addTodo} />

            <TodoFilter currentFilter={filter} onFilterChange={setFilter} />

            <ul style={styles.list}>
                {filteredTodos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={toggleTodo}
                        onDelete={deleteTodo}
                    />
                ))}
            </ul>

            <div style={styles.footer}>Осталось задач: {activeCount}</div>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: "500px",
        margin: "50px auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    },
    title: { textAlign: "center" as const, color: "#333" },
    list: { listStyleType: "none", padding: 0 },
    footer: {
        marginTop: "20px",
        textAlign: "center" as const,
        color: "#666",
        fontSize: "14px",
    },
};
