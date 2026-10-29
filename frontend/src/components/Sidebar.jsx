import { NavLink } from "react-router-dom";
export default function Sidebar() {
  return (
     <aside className="grid grid-cols-1 m-2 md:min-h-screen w-auto md:w-48 text-center gap-4 bg-slate-400 text-white p-4 rounded-lg shadow-xl overflow-auto">
        <h2 className="grid text-brand-secondary">System Management Modules</h2>
        <nav className="grid grid-cols-2 md:flex font-body text-base md:text-xl flex-1 flex-wrap text-center gap-2 md:gap-6 md:flex-col my-2">
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="/warehouse">Warehouse</NavLink>
          <NavLink to="/work-orders">Work Orders</NavLink>
          <NavLink to="/projects">Projects</NavLink>
        </nav>
      </aside>
  )
}