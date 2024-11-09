export default function NavBar({ projects, currentProjectId, navigateTo, onAddProject, closeDrawer, isOpen }) {
    const drawerStyle = isOpen ? "bg-black -translate-x-0" : "bg-transparent -translate-x-full"
    return (
        <div
            onClick={closeDrawer}
            className={
                `fixed
                -1000
                h-full
                w-full
                duration-300
                bg-opacity-20
                lg:static
                lg:min-w-fit
                lg:w-auto
                lg:translate-x-0
                lg:bg-transparent
                `+ drawerStyle
            }
        >
            <div className="bg-black h-full p-10 rounded-tr-2xl w-3/4 sm:w-1/3 min-w-fit ">
                <header className="mb-8" ><h2 className="text-white text-xl font-semibold ">YOUR PROJECTS</h2></header>
                <button
                    className="
                    text-gray-400
                    mb-8
                    bg-stone-80
                    px-4
                    py-2
                    rounded 
                    hover:text-white 
                    hover:bg-stone-500"
                    onClick={onAddProject}>+ Add Project</button>
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
            </div>
        </div>)
}