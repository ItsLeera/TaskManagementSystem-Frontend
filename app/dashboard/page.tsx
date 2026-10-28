import { Suspense } from 'react';
import DashbaordContent from './DashboardContent';

export default function Dashbaord() { 
    return (
        <Suspense fallback={<p> Loading your dashboard..... </p>} >
            <DashbaordContent />
        </Suspense>
    )
}