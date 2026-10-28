import React from 'react'

import { CiSearch } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";


import CreateTaskButton from './createTaskButton';
// import { FaPlus } from "react-icons/fa6";
// import Link from "next/link";


export default function navbar() {
    return (
        <>
        <nav className="w-full flex justify-between items-center pl-7 pr-10 pb-5  ">
            <div className="flex">
                <p className="text-[#181a24]/70 text-[13px] tracking-wide ">
                    Workspace /
                    <span className="text-[#181a24] font-bold "> Overview</span>
                </p>
            </div>
            <div className="flex gap-5">
                <label className="w-55 h-8 bg-white text-gray-500 flex  items-center justify-center gap-2 rounded-[5px]  ">
                    <p>
                        <CiSearch />
                    </p>
                    <input
                        type="search"
                        placeholder="Search"
                        className="text-gray-500 w-30 h-5 outline-none"
                    />
                    <p className="flex">⌘ K</p>
                </label>
                <button className="w-10 h-8 bg-white text-gray-500 flex  items-center justify-center rounded-[5px] ">
                    <MdOutlineDarkMode size={23} />
                </button>
                <button className="relative w-10 h-8 bg-white text-gray-500 flex items-center justify-center rounded-[5px] ">
                    <IoNotificationsOutline size={23} />
                    <span className="absolute top-1 right-2">
                        <GoDotFill fill="red" size={13} />
                    </span>
                </button>
                <div className="w-30 h-8 flex gap-1 items-center justify-center bg-[#6558dd] hover:bg-[#494bc1] text-white rounded-[5px] ">
                    <span>{/* <FaPlus /> */}</span>
                    <CreateTaskButton />
                </div>
            </div>
            </nav>
            <hr className="w-full text-[#1518231a]" />
        </>
    );
}

