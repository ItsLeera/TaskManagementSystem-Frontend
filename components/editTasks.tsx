"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";


type EditTaskProps = {
    taskId: number;
};

const EditTask = ({ taskId }: EditTaskProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isediting, setIsediting] = useState(false);
    const [error, setError] = useState("");

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("PENDING");
    const [priority, setPriority] = useState("LOW");
    const [dueDate, setDueDate] = useState("");

    const router = useRouter();

    const handleOpen = async () => {
        try {
            setError("");

            const response = await axios.get(
                `http://localhost:8080/task/${taskId}`,
            );

            const task = response.data;

            setTitle(task.title);
            setDescription(task.description);
            setStatus(task.status);
            setPriority(task.priority);
            setDueDate(task.dueDate ?? "");

            setIsOpen(true);
        } catch (error) {
            console.log(error);
            setError("Failed to load task. Please try again.");
        }
    };

    const handleEdit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setIsediting(true);
            setError("");

            await axios.put(`http://localhost:8080/task/${taskId}`, {
                title,
                description,
                status,
                priority,
                dueDate,
            });

            setIsOpen(false);
            router.refresh();
        } catch (error) {
            console.log(error);
            setError("Failed to update task. Please try again.");
        } finally {
            setIsediting(false);
        }
    };

    return (
        <>
            <button
                type="button"
                onClick={handleOpen}
                className="rounded-lg border border-gray-200 px-4 py-2 text-sm text-black/70 hover:bg-gray-100 hover:text-white dark:border-gray-700 dark:text-black dark:hover:bg-gray-800"
            >
                Edit
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <form
                        onSubmit={handleEdit}
                        className="w-full max-w-lg space-y-4 rounded-xl bg-white p-6 shadow-xl dark:bg-gray-900/40"
                    >
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Edit Task
                        </h2>

                        {error && <p className="text-sm text-red-500">{error}</p>}

                        <div>
                            <label className="mb-1 block text-sm text-gray-700 dark:text-gray-300">
                                Title
                            </label>
                            <input
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                                className="w-full rounded-lg border border-gray-300 bg-white/60 px-3 py-2 text-gray-900 dark:border-gray-700 dark:white dark:text-black outline-none"
                            />
                        </div>

                        <div>
                            <label className="mb-1 block text-sm text-gray-700 dark:text-gray-300">
                                Description
                            </label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 dark:border-gray-700 dark:bg-white/60 dark:text-black outline-none"
                                rows={3}
                            />
                        </div>

                        <div>
                            <label className="mb-1 block text-sm text-gray-700 dark:text-gray-300">
                                Status
                            </label>
                            <select
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 dark:border-gray-700 dark:bg-white/60 dark:text-black outline-none"
                            >
                                <option value="PENDING">Pending</option>
                                <option value="IN_PROGRESS">In Progress</option>
                                <option value="COMPLETED">Completed</option>
                            </select>
                        </div>

                        <div>
                            <label className="mb-1 block text-sm text-gray-700 dark:text-gray-300">
                                Priority
                            </label>
                            <select
                                value={priority}
                                onChange={(e) => setPriority(e.target.value)}
                                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 dark:border-gray-700 dark:bg-white/60 dark:text-black outline-none"
                            >
                                <option value="LOW">Low</option>
                                <option value="MEDIUM">Medium</option>
                                <option value="HIGH">High</option>
                            </select>
                        </div>

                        <div>
                            <label className="mb-1 block text-sm text-gray-700 dark:text-gray-300">
                                Due Date
                            </label>
                            <input
                                type="date"
                                value={dueDate}
                                onChange={(e) => setDueDate(e.target.value)}
                                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 dark:border-gray-700 dark:bg-white/60 dark:text-black outline-none"
                            />
                        </div>

                        <div className="flex justify-end gap-3 pt-2">
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                disabled={isediting}
                                className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 dark:border-gray-700 dark:text-gray-200"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                disabled={isediting}
                                className="rounded-lg bg-[#655dd8] px-4 py-2 text-sm font-medium text-white hover:bg-[#544680] disabled:opacity-50"
                            >
                                {isediting ? "Saving..." : "Save Changes"}
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};

export default EditTask;
