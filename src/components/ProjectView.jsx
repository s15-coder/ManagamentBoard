import { useRef, forwardRef } from "react";

const inputStyle = "block outline-none bg-neutral-200 px-3 py-1  focus:border-b-black border-2 shadow-sm border-neutral-200";

export default function ProjectView({ project, onSaveTask, onRemoveTask }) {
    const inputRef = useRef(null);

    function onSubmit(e) {
        e.preventDefault();
        const title = inputRef.current.value;
        console.log(title);
        inputRef.current.value = "";
        onSaveTask({ title });
    }

    return <section className="max-w-screen-sm m-auto">
        <div className="flex justify-between pb-5 ">
            <h1 className="text-3xl font-semibold">{project.title}</h1>
            <button>Delete</button>
        </div>
        <span className="text-lg text-neutral-400 font-medium">{project.dueDate}</span>
        <p className="text-lg">{project.description}</p>
        <div className="mt-5 bg-gray-200 h-0.5" />
        <form onSubmit={onSubmit}>
            <h3 className="text-xl font-semibold">Tasks</h3>
            <div className="my-2">
                <div className="flex">
                    <input required ref={inputRef} className={inputStyle} type="text" id="title" />
                    <button className="h-full  px-3 py-1 hover:bg-neutral-200 mx-2">Add Task</button>
                </div>
            </div>
        </form>
        {project.tasks.length === 0 && <p className="text-lg text-neutral-400 font-medium">You haven't created any task yet.</p>}
        <ul>
            {project.tasks.map((task, index) => <li key={index} className="flex justify-between my-2 bg-slate-300 p-4">
                <span>{task}</span>
                <button onClick={() => onRemoveTask(task)}>Remove</button>
            </li>)}
        </ul>
    </section>
}