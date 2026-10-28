"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

import { RiDeleteBinLine } from "react-icons/ri";


type DeleteTaskProps = {
    taskId: number;
};

const DeleteTask = ({ taskId }: DeleteTaskProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [error, setError] = useState("");

    const router = useRouter();

    const handleDelete = async () => {
        try {
            setIsDeleting(true);
            setError("");

            await axios.delete(`http://localhost:8080/task/${taskId}`);

            router.push("/dashboard/tasks");
            router.refresh();
        } catch (error) {
            console.error(error);
            setError("Failed to delete task. Please try again.");
            setIsDeleting(false);
        }
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="rounded-lg border flex gap-1 items-center border-red-200 px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-50 dark:border-red-900 dark:text-white dark:hover:bg-red-950"
            >
                <span> <RiDeleteBinLine /> </span>
                Delete
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl dark:bg-gray-900">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Delete this task?
                        </h2>

                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                            Are you sure you want to delete this task? This action cannot be
                            undone.
                        </p>

                        {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

                        <div className="mt-6 flex justify-end gap-3">
                            <button
                                onClick={() => setIsOpen(false)}
                                disabled={isDeleting}
                                className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 disabled:opacity-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={handleDelete}
                                disabled={isDeleting}
                                className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 disabled:opacity-50"
                            >
                                {isDeleting ? "Deleting..." : "Delete Task"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default DeleteTask;
