import React, { useState } from "react";

interface TodoFormProps {
    onAddTodo: (text: string) => void;
}

export function TodoForm({ onAddTodo }: TodoFormProps) {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        onAddTodo(inputValue);
        setInputValue("");
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Что нужно сделать?"
                style={styles.input}
            />
            <button type="submit" style={styles.addButton}>
                Добавить
            </button>
        </form>
    );
}

const styles = {
    form: { display: "flex", gap: "10px", marginBottom: "20px" },
    input: {
        flex: 1,
        padding: "10px",
        fontSize: "16px",
        borderRadius: "4px",
        border: "1px solid #ccc",
    },
    addButton: {
        padding: "10px 20px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
};
