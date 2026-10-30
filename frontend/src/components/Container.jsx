export default function Container({ children }) {
    return ( 
    <div className={`w-full max-w-7xl 2xl:max-w-auto mx-auto px-6 pb-2 bg-white/80 backdrop-blur-md rounded-2xl border border-white/20 shadow-md`}> 
        {children}
    </div>
    )
}