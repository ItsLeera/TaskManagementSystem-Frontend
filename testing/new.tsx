import { Task } from "@/types/tasks";
import Link from "next/link";

type RecentTasksProps = {
    tasks: Task[];
};

const RecentTasks = ({ tasks }: RecentTasksProps) => {
    const recentTasks = [...tasks].slice(-5).reverse();

    const statusStyles: Record<string, string> = {
        PENDING: "bg-amber-500/10 text-amber-400 ring-amber-500/20",
        IN_PROGRESS: "bg-blue-500/10 text-blue-400 ring-blue-500/20",
        COMPLETED: "bg-emerald-500/10 text-emerald-400 ring-emerald-500/20",
    };

    const priorityStyles: Record<string, string> = {
        HIGH: "text-rose-400",
        MEDIUM: "text-amber-400",
        LOW: "text-sky-400",
    };

    return (
        <section className="rounded-2xl border border-white/10 bg-[#111827] p-5 sm:p-6">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
                        Stay in the loop
                    </p>
                    <h2 className="text-xl font-semibold text-white">
                        Recent tasks
                    </h2>
                </div>

                <Link
                    href="/dashboard/tasks"
                    className="text-sm font-medium text-indigo-400 transition hover:text-indigo-300"
                >
                    View all <span aria-hidden="true">→</span>
                </Link>
            </div>

            {recentTasks.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                        <span className="text-2xl">☷</span>
                    </div>
                    <h3 className="font-medium text-white">No tasks yet</h3>
                    <p className="mt-2 max-w-xs text-sm text-gray-400">
                        Your recent tasks will appear here when you create your first task.
                    </p>
                </div>
            ) : (
                <div className="divide-y divide-white/10">

                    {/* Table headings */}
                    <div className="hidden grid-cols-[1fr_auto_auto_auto] gap-6 border-b border-white/10 px-3 pb-3 text-xs font-medium uppercase tracking-wider text-gray-500 sm:grid">
                        <span>Task</span>
                        <span>Priority</span>
                        <span>Status</span>
                        <span>Due Date</span>
                    </div>

                    {recentTasks.map((task) => (
                        <Link
                            key={task.id}
                            href={`/dashboard/tasks/${task.id}`}
                            className="group flex flex-col gap-4 py-4 transition hover:bg-white/2 sm:flex-row sm:items-center sm:justify-between sm:px-3"
                        >
                            <div className="flex min-w-0 items-center gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                                    <span className="text-lg">☷</span>
                                </div>

                                <div className="min-w-0">
                                    <h3 className="truncate text-sm font-medium text-white group-hover:text-indigo-300">
                                        {task.title}
                                    </h3>
                                    <p className="mt-1 truncate text-sm text-gray-400">
                                        {task.description}
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-3 pl-[52px] sm:shrink-0 sm:pl-0">
                                <span
                                    className={`text-xs font-semibold ${priorityStyles[task.priority] ?? "text-gray-400"
                                        }`}
                                >
                                    {task.priority}
                                </span>

                                <span
                                    className={`rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${statusStyles[task.status] ??
                                        "bg-gray-500/10 text-gray-400 ring-gray-500/20"
                                        }`}
                                >
                                    {task.status.replace("_", " ")}
                                </span>

                                <span className="text-xs text-gray-400">
                                    {task.dueDate || "No due date"}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </section>
    );
};

export default RecentTasks;