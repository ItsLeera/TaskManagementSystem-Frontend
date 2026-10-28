"use client";

import { useState } from "react";
import Link from "next/link";
import { Task } from "@/types/tasks";

type TaskFiltersProps = {
    tasks: Task[];
};

const TaskFilters = ({ tasks }: TaskFiltersProps) => {
    const [activeFilter, setActiveFilter] = useState("ALL");

    const filters = [
        { label: "All Tasks", value: "ALL" },
        { label: "Pending", value: "PENDING" },
        { label: "In Progress", value: "IN_PROGRESS" },
        { label: "Completed", value: "COMPLETED" },
    ];

    const filteredTasks =
        activeFilter === "ALL"
            ? tasks
            : tasks.filter((task) => task.status === activeFilter);


        const statusStyles: Record<string, string> = {
        PENDING:
            "bg-amber-500/10 text-amber-400 ring-amber-500/20",
        IN_PROGRESS:
            "bg-blue-500/10 text-blue-400 ring-blue-500/20",
        COMPLETED:
            "bg-emerald-500/10 text-emerald-400 ring-emerald-500/20",
    };

    const priorityStyles: Record<string, string> = {
        HIGH: "text-rose-400",
        MEDIUM: "text-amber-400",
        LOW: "text-sky-400",
    };



    return (
        <div className="flex flex-col gap-5">
            {/* Filter buttons */}
            <div className="flex flex-wrap gap-3">
                {filters.map((filter) => (
                    <button
                        key={filter.value}
                        onClick={() => setActiveFilter(filter.value)}
                        className={`rounded-lg px-4 py-2 text-sm transition ${activeFilter === filter.value
                                ? "bg-[#5558dd] text-white"
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                            }`}
                    >
                        {filter.label}
                        <span className="ml-2">
                            {filter.value === "ALL"
                                ? tasks.length
                                : tasks.filter((task) => task.status === filter.value).length}
                        </span>
                    </button>
                ))}
            </div>
            <div className="hidden grid-cols-1 md:grid-cols-[minmax(0,1fr)_100px_120px_120px_150px_70px] md:items-center md:gap-3 md:px-2.5  gap-3 border-b border-gray-200 py-3 text-xs font-semibold uppercase text-gray-500 md:grid">
                    <span>Task</span>
                    <span>Priority</span>
                    <span>Status</span>
                    <span>Due Date</span>
                    <span>Created At</span>
                </div>

            {/* Display filtered tasks */}
            <div className="flex flex-col gap-3">
                {filteredTasks.length === 0 ? (
                    <p className="py-8 text-center text-gray-500">
                        No tasks found in this category.
                    </p>
                ) : (
                    filteredTasks.map((task) => (
                        <Link
                                key={task.id}
                                href={`/dashboard/tasks/${task.id}`}
                                className="grid grid-cols-1 gap-3 py-4 transition hover:bg-gray-50 md:grid-cols-[minmax(0,1fr)_90px_130px_120px_150px_70px] md:items-center md:gap-3 md:px-2"
                            >
                                {/* Task */}
                                <div className="min-w-0">
                                    <h3 className="truncate text-sm font-medium text-gray-900">
                                        {task.title}
                                    </h3>
                                    <p className="mt-1 truncate text-sm text-gray-500">
                                        {task.description}
                                    </p>
                                </div>

                                {/* Priority */}
                                <span className={`text-xs font-semibold ${priorityStyles[task.priority] ?? "text-gray-500"
                                    }`}>
                                    {task.priority}
                                </span>

                                {/* Status */}
                                <span className={`w-fit rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${statusStyles[task.status] ??
                                    "bg-gray-100 text-gray-500 ring-gray-200"
                                    }`}>
                                    {task.status.replace("_", " ")}
                                </span>

                                {/* Due Date */}
                                <span className="text-xs text-gray-500">
                                    {task.dueDate || "No due date"}
                                </span>

                                {/* Created At */}
                                <span className="text-xs text-gray-500">
                                    {task.createdAt
                                        ? task.createdAt.replace("T", " ").slice(0, 16)
                                        : "—"}
                                </span>

                                <p className="text-[12px] text-[#6558dd] hover:underline ">View More</p>
                            </Link>
                    ))
                )}
            </div>
        </div>
    );
};

export default TaskFilters;
