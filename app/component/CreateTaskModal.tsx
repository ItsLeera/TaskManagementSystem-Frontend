"use client";

import { useState } from "react";
import createTask from "@/lib/createTask";
import axios from "axios";

type CreateTaskModalProps = {
    onClose: () => void;
};

export default function CreateTaskModal({ onClose }: CreateTaskModalProps) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("MEDIUM");
    const [status, setStatus] = useState("PENDING");
    const [dueDate, setDueDate] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await createTask({
                title,
                description,
                priority,
                status,
                dueDate,
            });
            console.log("Task created succesfully: " );

            onClose();
        } catch (error) {
            console.error("Failed to create task:", error);
            if (axios.isAxiosError(error)) {
                console.log("Status: ", error.response?.status);
                console.log("Response: ", error.response?.data);
                console.log("Message: ", error.message);
            }
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="w-full max-w-lg rounded-2xl bg-white text-black p-6 shadow-xl">
                <div className="flex flex-col  ">
                    <div className="mb-5 flex items-center justify-between">
                    <p  className="text-[#181a24]/70 text-[14px]  ">NEW TASK</p>

                    <button type="button" onClick={onClose} className="text-xl">
                        &times;
                    </button>
                    </div>
                    <h2 className="text-xl font-semibold">Create New Task</h2>
                    <p>Capture the work and keep momentum.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col justify-start items-start">
                        <label className="mb-1 block text-sm">Task Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter task title"
                            required
                            className="w-full h-12 rounded-lg border border-[#181a24]/60 hover:border-[#6558dd] p-3 "
                        />
                    </div>

                    <div className="flex flex-col justify-start items-start">
                        <label className="mb-1 block text-sm">Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Describe your task"
                            required
                            rows={4}
                            className="w-full h-20 rounded-lg border hover:border-[#6558dd] p-3"
                        />
                    </div>

                    <div className="flex  gap-3">
                        <div className="w-[50%] flex flex-col justify-start items-start ">
                            <label className="mb-1 block text-sm">Priority</label>
                            <select
                                value={priority}
                                onChange={(e) => setPriority(e.target.value)}
                                className="w-full h-11 rounded-lg border hover:border-[#6558dd]r p-3"
                            >
                                <option value="LOW">Low</option>
                                <option value="MEDIUM">Medium</option>
                                <option value="HIGH">High</option>
                            </select>
                        </div>

                        <div className="w-[50%] flex flex-col justify-start items-start ">
                            <label className=" mb-1 block text-sm">Status</label>
                            <select
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                className="w-full h-11 rounded-lg border hover:border-[#6558dd] p-3"
                            >
                                <option value="PENDING">Pending</option>
                                <option value="IN_PROGRESS">In Progress</option>
                                <option value="COMPLETED">Completed</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col justify-start items-start">
                        <label className="mb-1 block text-sm">Due Date</label>
                        <input
                            type="date"
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
                            required
                            className="w-full h-11 rounded-lg border hover:border-[#6558dd] p-3"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-[#6558dd] p-3 text-white hover:bg-[#494bc1]"
                    >
                        Create Task
                    </button>
                </form>
            </div>
        </div>
    );
}
