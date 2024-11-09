export default function NavBar({ projects, currentProjectId, navigateTo, onAddProject }) {

    return (<div className="bg-black h-full p-10 rounded-tr-2xl min-w-fit">
        <header className="mb-8" ><h2 className="text-white text-xl font-semibold ">YOUR PROJECTS</h2></header>
        <button className="text-gray-400 hover:text-white  mb-8 bg-stone-800 hover:bg-stone-500 px-4 py-2 rounded " onClick={onAddProject}>+ Add Project</button>
        <nav>
            {
                projects.map((project, index) =>
                    <li
                        onClick={() => navigateTo(project.id)}
                        key={index}
                        className={"list-none pl-3 pr-20 py-1.5 hover:cursor-pointer hover:text-white hover:bg-stone-700 my-2 " + (currentProjectId === project.id ? 'text-white bg-stone-700' : 'text-zinc-500 ')}>
                        {project.title}
                    </li>
                )
            }
        </nav>
    </div>)
}