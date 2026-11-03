import type { Todo } from "../types/todo";

interface TodoItemProps {
    todo: Todo;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
    return (
        <li style={styles.listItem}>
            <label style={styles.todoLabel}>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onToggle(todo.id)}
                    style={styles.checkbox}
                />
                <span
                    style={{
                        ...styles.todoText,
                        ...(todo.completed ? styles.completedText : {}),
                    }}
                >
                    {todo.text}
                </span>
            </label>
            <button
                onClick={() => onDelete(todo.id)}
                style={styles.deleteButton}
            >
                Удалить
            </button>
        </li>
    );
}

const styles = {
    listItem: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        backgroundColor: "#fff",
        marginBottom: "8px",
        borderRadius: "4px",
        border: "1px solid #eee",
    },
    todoLabel: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        cursor: "pointer",
        flex: 1,
    },
    checkbox: { width: "18px", height: "18px" },
    todoText: {
        fontSize: "16px",
        color: "#333",
        wordBreak: "break-word" as const,
    },
    completedText: { textDecoration: "line-through", color: "#aaa" },
    deleteButton: {
        padding: "5px 10px",
        backgroundColor: "#dc3545",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
};
