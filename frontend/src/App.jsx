import './App.css'

function App() {

  return (
    <>
      
      <section id="center" className="grid grid-cols-1 md:grid-cols-[9rem_minmax(0,2fr)] md:justify-start justify-center mt-8">
        <aside className="grid grid-cols-1 m-2 w-full md:w-48 text-center gap-4 bg-slate-400 text-white p-4 rounded-lg shadow-xl">
          <h2 className="grid ">System Management Modules</h2>
          <div className="flex text-center gap-6 flex-row md:flex-col my-2">
            <nav><a href="">Dashboard</a></nav>
            <nav><a href="">Warehouse</a></nav>
            <nav><a href="">Work Orders</a></nav>
            <nav><a href="">Projects</a></nav>
          </div>
        </aside>

        <main>
          <h1 className="text-3xl font-bold text-center">ERP Dashboard</h1>
        </main>

      </section>

    </>
  )
}

export default App
