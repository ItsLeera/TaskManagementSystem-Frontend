
// import { CiSearch } from "react-icons/ci";
// import { MdOutlineDarkMode } from "react-icons/md";
// import { IoNotificationsOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
// import { FaPlus } from "react-icons/fa6";
import { TbSparkle2 } from "react-icons/tb";
import { GoTasklist } from "react-icons/go";
import { GoArrowUpRight } from "react-icons/go";
import { IoMdTime } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";


import axios from "axios";
import { Task } from "@/types/tasks";
import CompletionProgress from "@/components/CompletionProgress";
import CreateTaskButton from "@/components/createTaskButton";
import Link from 'next/link';
import RecentTasks from "../recentTasks";
import Navbar from "@/components/navbar";

const DashbaordContent = async () => {
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

    // const recentTasks = [...tasks].sort((a, b) =>
        // new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    // ).slice(0, 5);


    const currentDate = new Date().toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (
        <div className="flex flex-col">
            
            <div className="flex flex-col gap-4 ">
                <p className="text-[16px] text-[#181a24]/85 tracking-widest">
                    {" "}
                    {currentDate}{" "}
                </p>
                <h2 className="text-[#181a24] text-3xl flex gap-2 items-center ">
                    Good Morning, Leera
                    <span className="">
                        <TbSparkle2
                            className="fill-[#6558dd] stroke-[#6558dd]  "
                            size={15}
                        />
                    </span>
                </h2>
                <div className="flex justify-between items-center">
                    <p className="text-[14px] text-[#181a24]/70 ">
                        Here`s what`s happening across your workspace today.
                    </p>
                    <span className="bg-white hover:bg-[#6558dd]  text-black"> <CreateTaskButton /> </span>
                    {/* <button className="w-30 h-8 flex gap-1 items-center justify-center bg-white hover:bg-[#6558dd]  text-black rounded-[5px] font-[600] text-[13px]  ">
                        <span>
                            <FaPlus />
                        </span>
                        <p>Quick Create</p>
                    </button> */}
                </div>
                <div className="flex justify-between">
                    <div className="w-65 h-35 flex justify-center  gap-5 bg-white text-[#181a24]/70 py-7 px-5 rounded-xl">
                        <div className="w-8 h-8 flex items-center justify-center bg-[#6558dd]/20 rounded ">
                            <GoTasklist className="fill-[#6558dd]" size={20} />
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-[13px]" >Total tasks</span>
                            <h2 className="text-[#181a24] text-[23px] font-bold"> {totalTasks} </h2>
                            <p className="text-[12px]">Across your workspace</p>
                        </div>
                        <span> <GoArrowUpRight className="fill-green-800" size={25} /></span>
                    </div>
                    <div className="w-65 h-35 flex justify-center gap-5 bg-white text-[#181a24]/70 py-7 px-5 rounded-xl">
                        <div className="w-8 h-8 flex items-center justify-center bg-[#e8ae68]/20 rounded ">
                            <IoMdTime className="fill-[#e8ae68]" size={20} />
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-[13px]" >Pending</span>
                            <h2 className="text-[#181a24] text-[23px] font-bold"> {pendingTasks} </h2>
                            <p className="text-[12px]">Ready to pickup</p>
                        </div>
                        <span> <GoArrowUpRight className="fill-green-800" size={25} /></span>
                    </div>
                    <div className="w-65 h-35 flex justify-center gap-5 bg-white text-[#181a24]/70 py-7 px-5 rounded-xl">
                        <div className="w-8 h-8 flex items-center justify-center bg-[#70a8ff]/20 rounded ">
                            <GoTasklist className="fill[#70a8ff]" size={20} />
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-[13px]" >In Progress</span>
                            <h2 className="text-[#181a24] text-[23px] font-bold"> {inProgressTasks} </h2>
                            <p className="text-[12px]">Currenty activeeeee</p>
                        </div>
                        <span> <GoArrowUpRight className="fill-green-800" size={25} /></span>
                    </div>
                    <div className="w-65 h-35 flex justify-center gap-5 bg-white text-[#181a24]/70 py-7 p-5 rounded-xl">
                        <div className="w-8 h-8 flex items-center justify-center bg-[#4ed6a0]/20 rounded ">
                            <GoTasklist className="fill-[#4ed6a0]" size={20} />
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-[13px]" >Completed</span>
                            <h2 className="text-[#181a24] text-[23px] font-bold"> {completedTasks} </h2>
                            <p className="text-[12px]">Nice work this week</p>
                        </div>
                        <span> <GoArrowUpRight className="fill-green-800" size={25} /></span>
                    </div>
                </div>
                <div className="flex gap-3 text-black ">
                    <div className="w-[50%] h-[50vh] bg-white flex flex-col gap-3 py-7 px-5 ">
                        <p className="text-[#181a24]/60 text-[14px] flex justify-between  ">
                            YOUR RHYTHM
                            <span><BsThreeDots /></span>
                        </p>
                        <h2>Completion Progress</h2>
                        <div className="flex items-center  ">
                            <CompletionProgress percentage={completionPercentage} />
                            <div className="w-[60%] flex flex-col text-xs tracking-wide gap-2 ">
                                <div className="flex justify-between">
                                    <p className="flex gap-1 text-[#181a24]/60 ">
                                        <span>< GoDotFill className="fill-green-500" /></span>
                                        Completed
                                    </p>
                                    <p className="font-bold"> {completedTasks} </p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="flex gap-1 text-[#181a24]/60 ">
                                        <span>< GoDotFill className="fill-purple-600" /></span>
                                        In Progress
                                    </p>
                                    <p className="font-bold"> {inProgressTasks} </p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="flex gap-1 text-[#181a24]/60">
                                        <span>< GoDotFill className="fill-violet-950" /></span>
                                        Pending
                                    </p>
                                    <p className="font-bold"> {pendingTasks} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[50%] h-[50vh] bg-white flex flex-col gap-3 py-7 px-5   ">
                        <p className="text-[#181a24]/60 text-[14px] flex justify-between  ">
                            YOUR RHYTHM
                            <span><BsThreeDots /></span>
                        </p>
                        <h2>Completion Progress</h2>
                        <div className="text-[#181a24]/60 text-[14px] flex justify-between  ">
                            <p>High</p>
                            <p className="font-bold text-[#181a24]"> {highPriority} </p>
                        </div>
                        <div className="text-[#181a24]/60 text-[14px] flex justify-between  ">
                            <p>Low</p>
                            <p className="font-bold text-[#181a24] "> {lowPriority} </p>
                        </div>
                        <div className="text-[#181a24]/60 text-[14px] flex justify-between  ">
                            <p>Medium</p>
                            <p className="font-bold text-[#181a24]"> {mediumPriority} </p>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col text-black ">
                    {/* <p>STAY IN THE LOOP</p> */}
                    {/* <h2>Recent tasks</h2> */}
                    {/* <div className="flex justify-between"> */}
                    {/* <p>TASK</p> */}
                    {/* <p>PRIORITY</p> */}
                    {/* </div> */}
                    {/* <div className="flex gap-5">
                        // {recentTasks.map((task) => (
                            <div className="" key={task.id}>
                                <div className="flex"></div>
                                <div className="flex flex-col">
                                    <h3> {task.title} </h3>
                                    <p>
                                        {task.description.length > 60 ? `${task.description.slice(0, 60)}...` : task.description}
                                    </p>
                                </div>
                                <span> {task.priority} </span>
                                <span> {task.status.replace("_", "")} </span>
                                <span> {task.dueDate} </span>

                                <Link href={`/dashboard/tasks/${task.id}`}> View more </Link>
                            </div>
                        ))}
                    </div> */}
                </div>
                <RecentTasks tasks={ tasks} />
            </div>
        </div>
    );
}

export default DashbaordContent;
