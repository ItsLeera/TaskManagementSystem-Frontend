import TaskFilters from '@/app/component/TaskFilters';
import CreateTaskButton from '@/components/createTaskButton';
import { Task } from '@/types/tasks';
import axios from 'axios';
import Link from 'next/link';
import React from 'react'

type RecentTasksProps = {
    tasks: Task[];
}
const GetAllTasks = async () => {

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


    const response = await axios.get<Task[]>("http://localhost:8080/tasks");
    const tasks = response.data;

    const totalTasks = tasks.length;

    const pendingTasks = tasks.filter((task) => task.status === "PENDING").length;

    const inProgressTasks = tasks.filter((task) => task.status === "IN_PROGRESS").length;

    const completedTasks = tasks.filter((task) => task.status === "COMPLETED").length;

    const completionPercentage = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100)

    const highPriority = tasks.filter((tasks) => tasks.priority === "HIGH").length

    const lowPriority = tasks.filter((tasks) => tasks.priority === "LOW").length

    const mediumPriority = tasks.filter((tasks) => tasks.priority === "MEDIUM").length

    const highPercentage = totalTasks === 0 ? 0 : (highPriority / totalTasks) * 100;

    const lowPercentage = totalTasks === 0 ? 0 : (lowPriority / totalTasks) * 100;

    const mediumPercentage = totalTasks === 0 ? 0 : (mediumPriority / totalTasks) * 100;

    const taskObj = [
        {
            label: "Total Tasks",
            taskTotal: totalTasks,
            taskText: "All tasks",
            color: "text-red-500",
            textColor: "text-purple-900"
        },
        {
            label: "Pending",
            taskTotal: pendingTasks,
            taskText: "Awaiting work",
            color: "text-amber-500"
        },
        {
            label: "In Progress",
            taskTotal: inProgressTasks,
            taskText: "Currently activeee",
            color: "text-blue-500"
        },
        {
            label: "Completed",
            taskTotal: completedTasks,
            taskText: "Finished tasks",
            color: "text-green-500"
        }
    ]



    return (
        <div className="text-[#181a24]  flex flex-col gap-5">
            <h1 className="text-3xl ">All tasks</h1>
            <div className="flex justify-between items-center">
                <p>Manage and track all your tasks in pone place</p>
                <div className="w-30 h-8 flex gap-1 items-center justify-center bg-[#6558dd] hover:bg-[#494bc1] text-white rounded-[5px] ">
                    <CreateTaskButton />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-7 ">
                {taskObj.map((task) => (
                    <div className="flex flex-col gap-2 py-5 px-5 rounded-xl bg-white text-[#181a24]/70" key={task.label}>
                        <p className="text-[13px] "> {task.label} </p>
                        <h2 className={`text-3xl font-bold ${task.color}`}> {task.taskTotal} </h2>
                        <p className={`text-[15px]  ${task.textColor}`} > {task.taskText} </p>
                    </div>
                ))}
            </div>
            <div className="flex flex-col gap-3 bg-white p-5 rounded-xl">
                <h2>Task List</h2>
                <label >
                    <input type="text" placeholder="Search task by title....." className="outline-none" />
                </label>
                {/* Column headings */}
                {/* <div className="hidden grid-cols-[minmax(0,1fr)_90px_130px_120px_150px] gap-3 border-b border-gray-200 py-3 text-xs font-semibold uppercase text-gray-500 md:grid">
                    <span>Task</span>
                    <span>Priority</span>
                    <span>Status</span>
                    <span>Due Date</span>
                    <span>Created At</span>
                </div> */}
                <TaskFilters tasks={tasks} />

            </div>
        </div>
    );
};

export default GetAllTasks;