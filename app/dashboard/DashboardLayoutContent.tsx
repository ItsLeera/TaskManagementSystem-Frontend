"use client";

import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { usePathname } from "next/navigation";
import { Suspense } from "react";

export default function DashboardLayoutContent({ children }: LayoutProps<"/">) {
    const pathname = usePathname();

    const isTaskDetails =
        pathname.includes("/dashboard/tasks/") &&
        pathname.split("/").filter(Boolean).length === 3;

    console.log("Current pathname: ", pathname);
    console.log("Is task details: " , isTaskDetails);

    return (
        <div className="w-full min-h-screen flex bg-[#f4f5f8]  overflow-hidden">
            {/* <Suspense fallback={<div> Loading..... </div>}> */}
            <Sidebar />
            {/* </Suspense> */}
            <div className="w-full py-5  ml-60 min-h-screen overflow-y-auto ">
                {!isTaskDetails && <Navbar />}
                <div className="pl-7 pr-10 pb-5 pt-10">{children}</div>
            </div>
        </div>
    );
}
