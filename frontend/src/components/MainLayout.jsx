import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

export default function MainLayout(){
    return (
        <div className="min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-[12.5rem_minmax(0,1fr)] 2xl:grid-cols-[13rem_minmax(0,1fr)] 3xl:grid-cols-[15rem_minmax(0,1fr)] gap-4 p-4">
                <Sidebar />
                
                <main className="">
                    <Header />
                    <Outlet />
                </main>
            </div>
        </div>
    )
}