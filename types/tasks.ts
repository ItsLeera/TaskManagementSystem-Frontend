export type Task = {
    id: number;
    title: string;
    description: string;
    status: "PENDING" | "IN_PROGRESS" | "COMPLETED";
    priority: "LOW" | "MEDIUM" | "HIGH";
    dueDate: string;
    createdAt: string;
}