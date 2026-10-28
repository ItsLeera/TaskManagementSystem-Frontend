"use client";

import { useState } from "react";
import CreateTaskModal from "./CreateTaskModal";

export default function TasksPage() { 
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            <button onClick={()=>setIsModalOpen(true)} className="rounded-lg bg-black px-4 py-2 text-white">
                + Create Task
            </button>
            {isModalOpen && (
                <CreateTaskModal onClose={() => setIsModalOpen(false)} />
            )}
        </div>
    )
}