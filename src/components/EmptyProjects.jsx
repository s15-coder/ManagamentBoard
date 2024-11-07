
import NoProjectImage from "../assets/no-projects.png";

export default function EmptyProjects() {
    return <section className="text-center w-full h-full  flex flex-col justify-center items-center">
        <img src={NoProjectImage} className="h-20 object-contain mb-10" alt="Empty projects image" />
        <h2 className="text-xl mb-2">No Project Selected</h2>
        <p className="text-lg text-stone-400 mb-5">Select a project or get started with a new one.</p>
        <button className="text-lg bg-black w-fit text-white px-4 py-1.5 rounded-lg hover:bg-stone-700">Create new project</button>
    </section>
}
