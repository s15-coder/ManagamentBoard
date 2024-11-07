export default function NavBar() {
    return (<div className="bg-black h-full p-10 rounded-tr-2xl min-w-fit">
        <header className="mb-8" ><h2 className="text-white text-xl font-semibold ">YOUR PROJECTS</h2></header>
        <button className="text-gray-400 hover:text-white  mb-8 bg-stone-800 hover:bg-stone-500 px-4 py-2 rounded ">+ Add Project</button>
        <nav>
            <li className="text-zinc-500 list-none pl-3 pr-20 py-1.5 hover:cursor-pointer hover:text-white hover:bg-stone-700 my-2">Learning React</li>
            <li className="text-zinc-500 list-none pl-3 pr-20 py-1.5 hover:cursor-pointer hover:text-white hover:bg-stone-700 my-2">Mastering React</li>
        </nav>
    </div>)
}