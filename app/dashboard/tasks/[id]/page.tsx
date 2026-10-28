import TasksPage from "@/app/component/page";
import { Task } from "@/types/tasks";
import axios from "axios";
import Link from "next/link";

import { CiEdit } from "react-icons/ci";
import { IoIosArrowRoundBack } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaRegCalendarDays } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import DeleteTask from "@/components/deleteTask";
import EditTask from "@/components/editTasks";



const DisplayTask = async ({ params, }: { params: Promise<{ id: string }>; }) => { 

    const {id} = await params

    const response = await axios.get<Task>(`http://localhost:8080/task/${id}`);

    const task = response.data

    const statusStyles: Record<string, string> = {
        PENDING:
            "bg-amber-500/20 text-amber-500 ring-amber-500/20",
        IN_PROGRESS:
            "bg-blue-500/20 text-blue-500 ring-blue-500/20",
        COMPLETED:
            "bg-emerald-500/20 text-emerald-500 ring-emerald-500/20",
    };

    const priorityStyles: Record<string, string> = {
        HIGH: "bg-red-700/20 text-rose-400",
        MEDIUM: "bg-amber-700/20 text-amber-700",
        LOW: "bg-sky-700/20 text-sky-400",
    };

    return (
        <div className="min-h-screen  text-[#181a24]/90  ">
            <div className="flex px-10  justify-between items-center pb-5  ">
                <Link href={'/dashboard/tasks'} className="flex items-center hover:text-[#6558dd]">
                    <span><IoIosArrowRoundBack /></span>
                    Back to all tasks
                </Link>
                <div className="flex gap-5">
                    {/* <button className="w-17 h-10 border border-[#181a24] rounded flex gap-1 items-center justify-center ">
                        <span><CiEdit /></span>
                        Edit
                    </button> */}
                    <EditTask taskId={Number(id)} />
                    {/* <button className="w-22 h-10 bg-red-700/80 text-white border border-red-700 rounded flex gap-1 items-center justify-center ">
                        <span><RiDeleteBinLine /></span>
                        Delete
                    </button> */}
                    <DeleteTask taskId={Number(id)}/>
                </div>
            </div>
            <hr className="text-gray-300/70" />
            <div className="px-10 py-7 flex flex-col gap-5">
                <p>
                    TASK DETAILS / TASK
                    <span> -00{ task.id} </span>
                </p>
                <h2 className="text-2xl" > {task.title} </h2>
                <p className="text-[14px] "> {task.description} </p>
                <div className="flex gap-3">
                    <div className={ `rounded p-1 ${statusStyles[task.status]}` }> { task.status} </div>
                    <div className={ ` rounded p-1 ${priorityStyles[task.priority]}` }> { task.priority} PRIORITY </div>
                </div>
                {/* <hr className="w-full text-gray-500/30" /> */}
                <div className="flex gap-10 justify-center">
                    <div className="w-[50%] flex flex-col gap-5 justify-center px-7 py-10 bg-white/50 rounded ">
                        <span><FaRegCalendarDays size={30} /></span>
                        <p>Due Date</p>
                        <p className="text-2xl font-bold "> { task.dueDate} </p>
                    </div>
                    <div className="w-[50%] flex flex-col gap-5 justify-center px-7 py-7 bg-white/50 rounded ">
                        <span><MdAccessTime size={30} /></span>
                        <p>Create at</p>
                        <p className="text-2xl font-bold "> { task.createdAt} </p>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-5 justify-center px-7 py-7 bg-white/50 rounded  ">
                    <h2 className="text-[14px] text-[#929198]">Full description:</h2>
                    <p className="text-[#65588d] text-2xl font-medium"> { task.description} </p>
                </div>
            </div>
        </div>
    )
    
}

export default DisplayTask;