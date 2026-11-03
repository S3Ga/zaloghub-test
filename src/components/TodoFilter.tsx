import type { FilterType } from "../types/todo";

interface TodoFilterProps {
    currentFilter: FilterType;
    onFilterChange: (filter: FilterType) => void;
}

export function TodoFilter({ currentFilter, onFilterChange }: TodoFilterProps) {
    const filters: { type: FilterType; label: string }[] = [
        { type: "all", label: "Все" },
        { type: "active", label: "Активные" },
        { type: "completed", label: "Выполненные" },
    ];

    return (
        <div style={styles.filterContainer}>
            {filters.map(({ type, label }) => (
                <button
                    key={type}
                    onClick={() => onFilterChange(type)}
                    style={{
                        ...styles.filterButton,
                        ...(currentFilter === type
                            ? styles.activeFilterButton
                            : {}),
                    }}
                >
                    {label}
                </button>
            ))}
        </div>
    );
}

const styles = {
    filterContainer: {
        display: "flex",
        gap: "10px",
        marginBottom: "20px",
        justifyContent: "center",
    },
    filterButton: {
        padding: "5px 15px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        backgroundColor: "#fff",
        cursor: "pointer",
    },
    activeFilterButton: {
        backgroundColor: "#007bff",
        color: "#fff",
        borderColor: "#007bff",
    },
};
