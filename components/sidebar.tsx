"use client";
import { LuSparkles } from "react-icons/lu";
import { LiaAngleDownSolid } from "react-icons/lia";
import { MdOutlineDashboard } from "react-icons/md";
import { GoTasklist } from "react-icons/go";
import { IoMdTime } from "react-icons/io";import { TbProgressCheck } from "react-icons/tb";
import { GrStatusGood } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { SlEnergy } from "react-icons/sl";
import { FaTrash } from "react-icons/fa";


import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { href: "/dashboard", label: "Overview", icon: <MdOutlineDashboard /> },
    { href: "/dashboard/tasks", label: "All Tasks", icon: <GoTasklist /> },
    { href: "/dashboard/tasks/?status=PENDING", label: "Pending", icon: <IoMdTime /> },
    { href: "/dashboard/tasks/?status=IN_PROGRESS", label: "In Progress", icon: <TbProgressCheck /> },
    { href: "/dashboard/tasks/?status=COMPLETED", label: "Completed", icon: <GrStatusGood /> },
]

const linkss = [
    {
        hreff: "/dashboard/settings", labell: "Settings", icon: <IoSettingsOutline />
    },
    {
        hreff: "/dashboard/trash", labell:"Recycle Bin", icon: <FaTrash />
    }
];

export default function Sidebar() {

    const pathname = usePathname();

    return (
        <aside className="w-60 h-screen hide-scrollbar left-0 top-0 overflow-y-auto bg-[#dddee2] text-white p-6 flex flex-col  fixed text-xs">
            <div className="flex gap-2 ">
                <div className="w-8 h-8 bg-[linear-gradient(135deg,#a69aff,#6558dd)] text-white border border-[#6558dd] flex justify-center items-center rounded-[10px] tracking-widest"><LuSparkles size={20} /></div>
                <h2 className="text-xl text-[#181a24] font-bold mb-6">TASKFLOW</h2>
            </div>
            <div className="flex justify-between items-center bg-white b] text-[#181a24] py-2 px-4 rounded-xl ">
                <div className="w-7 h-6 flex items-center justify-center  bg-[#181a24]/10 rounded ">
                    <span className="text-[#6558dd] font-bold">TF</span>
                </div>
                <div className="flex flex-col">
                    <p>Leera Workspace</p>
                    <span className="text-[10px] text-[#181a24]/70">
                        Personal workspace
                    </span>
                </div>
                <div>
                    <LiaAngleDownSolid />
                </div>
            </div>
            <div className="flex flex-col gap-3 pt-3">
                <p className="text-xs text-gray-500">WORKSPACE</p>
                {links.map((link) => {
                    const isActive = pathname === link.href;

                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`rounded px-3 py-2 flex gap-1.5  ${isActive ? "bg-white" : "hover:bg-white/70"} ${isActive ? "text-[#181a24]" : "text-gray-600"}`}
                        >
                            {/* <p>Workspace</p> */}
                            <p
                                className={` text-[14px] ${isActive ? "text-[#6558dd]" : "text-gray-600"} `}
                            >
                                {link.icon}
                            </p>
                            <p
                                className={` ${isActive ? "text-[#181a24]" : "text-gray-600"}`}
                            >
                                {" "}
                                {link.label}{" "}
                            </p>
                        </Link>
                    );
                })}
                <p className="text-xs text-gray-500">MANAGE</p>
                {linkss.map((linkk) => {
                    const isActive = pathname === linkk.hreff;

                    return (
                        <Link
                            key={linkk.hreff}
                            href={linkk.hreff}
                            className={`rounded px-2 py-2 flex gap-1.5 ${isActive ? "bg-white" : "hover:bg-white/70  "} ${isActive ? "text-[#181a24]" : "text-gray-600"}`}
                        >
                            <p
                                className={` text-[14px] ${isActive ? "text-[#6558dd]" : "text-gray-600"} `}
                            >
                                {linkk.icon}
                            </p>
                            <p
                                className={` ${isActive ? "text-[#181a24]" : "text-gray-600"}`}
                            >
                                {linkk.labell}
                            </p>
                        </Link>
                    );
                })}
            </div>
            <div className="flex flex-col  gap-3 pt-15 ">
                <div className="flex gap-3 px-2 py-1 bg-[linear-gradient(120deg,#8b7bff1f,#0000)] border border-[#8b7bff33] rounded-xl">
                    <span className="text-[#6558dd] text-[17px] font-medium">
                        <SlEnergy />
                    </span>
                    <div className="flex flex-col gap-2">
                        <p className="text-[#181a24]">Ship your work</p>
                        <p className=" text-[#181a24]/70 text-[10px] ">
                            Stay focused, move faster.
                        </p>
                    </div>
                </div>
                <div className="flex gap-2 py-2 border-t border-t-gray-800/20">
                    <div className="rounded-full bg-[#8b7bff1f text-white font-bold flex items-center justify-center]">LJ</div>
                    <div className="flex flex-col gap-2">
                        <p className="font-medium text-[15px] text-[#181a24] ">Leera Joy</p>
                        <p className="text-xs text-[#181a24]">Admin</p>
                    </div>
                    <div>ham</div>
                </div>
            </div>
        </aside>
    );
}