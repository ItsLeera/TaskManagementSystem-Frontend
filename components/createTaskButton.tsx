"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaPlus } from "react-icons/fa6";
import CreateTaskModal from "@/app/component/CreateTaskModal";

export default function CreateTaskButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();

    const handleClose = () => {
        setIsModalOpen(false);
        router.refresh();
    };

    return (
        <>
            <button
                onClick={() => setIsModalOpen(true)}
                className="w-30 h-8 flex gap-1 items-center justify-center rounded-[5px] text-black"
            >
                <FaPlus />
                <p>Create task</p>
            </button>

            {isModalOpen && <CreateTaskModal onClose={handleClose} />}
        </>
    );
}
