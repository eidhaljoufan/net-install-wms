import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

const MainLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-b from-primary/90 via-secondary/30 to-primary/70 backdrop-blur-md border-white/20 shadow-md rounded-xl text-white p-4 mb-1 mx-1">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            {isSidebarOpen && (
                <div
                    onClick={toggleSidebar}
                    className="fixed inset-0 bg-black/50 z-10 md:hidden"
                />
            )}

            <div className="flex-1 flex flex-col">
                <Header toggleSidebar={toggleSidebar} />
                
                <main className="flex-1 p-4 md:p-6 bg-gradient-to-b from-primary/90 via-secondary/30 to-primary/70 backdrop-blur-md border-white/20 shadow-md rounded-xl text-white">    
                    <Outlet />
                </main>

            </div>
        </div>
    );
};

export default MainLayout;