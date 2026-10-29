import { NavLink } from "react-router-dom";
export default function Sidebar() {
  return (
     <aside className="grid grid-cols-1 mx-1 md:min-h-screen shadow-lg w-auto md:w-52 text-center gap-4 bg-gradient-to-t from-secondary/60 via-slate-400/30 to-secondary/60 backdrop-blur-lg text-white/90 p-4 rounded-lg">
        <h2 className="grid text-primary">System Management Modules</h2>
        <nav className="grid grid-cols-2 md:flex font-body text-base font-bold md:font-extrabold md:text-xl flex-1 flex-wrap text-center gap-2 md:gap-6 md:flex-col">
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="/warehouse">Warehouse</NavLink>
          <NavLink to="/work-orders">Work Orders</NavLink>
          <NavLink to="/projects">Projects</NavLink>
        </nav>
      </aside>
  )
}