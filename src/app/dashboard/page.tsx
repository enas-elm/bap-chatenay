import Navbar from "@/components/Navbar"
import { CalendarDateRangePicker } from "./components/date-range-picker"

const Dashboard = () => {

    return (
        <>
            <Navbar />
            <div className="hidden flex-col md:flex">
                <div className="flex-1 space-y-4 p-8 pt-6">
                    <div className="flex items-center justify-between space-y-2">
                        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                        <div className="flex items-center space-x-2">
                            <CalendarDateRangePicker />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
