"use client";

import { ReactNode, Suspense } from "react";
import DashboardLayoutContent from "./DashboardLayoutContent";

export default function DashboardLayout({ children }: {children:ReactNode}) {
  
  return (
    <Suspense fallback={ <div>Loading..........</div>}>
      <DashboardLayoutContent>
        {children}
      </DashboardLayoutContent>
    </Suspense>
  );
}
