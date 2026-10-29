import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

export default function MainLayout(){
    return (
        <div className="min-h-screen bg-slate-100">
            <Header />
            <div className="grid grid-cols-1 md:grid-cols-[12.5rem_minmax(0,1fr)] 2xl:grid-cols-[13rem_minmax(0,1fr)] 3xl:grid-cols-[15rem_minmax(0,1fr)] gap-4 p-4">
                <Sidebar />
                <main className="w-full max-w-7xl 2xl:max-w-auto mx-auto px-6 pb-2 bg-white/80 backdrop-blur-md rounded-2xl border border-white/20 shadow-md">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}