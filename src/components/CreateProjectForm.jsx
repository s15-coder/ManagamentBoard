const inputStyle = "block outline-none bg-neutral-200 px-3 py-1   focus:border-b-black border-2 shadow-sm border-neutral-200 w-full mb-5";

export default function CreateProjectForm({ onSubmit }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const dueDate = form['due-date'].value;
        const project = { title, description, dueDate, id: new Date().getTime(), tasks: [] };
        onSubmit(project);
    }
    return <div className="w-full h-full">
        <form action="" className="max-w-screen-sm  m-auto" onSubmit={handleSubmit}>
            <div className="flex justify-end gap-x-5" >
                <button className="text-lg  py-1.5 px-4 rounded-lg hover:bg-red-600 hover:text-white">Cancel</button>
                <button type='submit' className="text-lg bg-black py-1.5 px-4 text-white rounded-lg hover:bg-slate-800">Save</button>
            </div>
            <div className="my-2">
                <label className="block font-medium" htmlFor="title">TITLE</label>
                <input required className={inputStyle} type="text" id="title" />
            </div>
            <div>
                <label htmlFor="description">DESCRIPTION</label>
                <textarea required className={inputStyle} name="" id="description" cols="30" rows="10"></textarea>
            </div>
            <div>
                <label htmlFor="due-date">DUE DATE</label>
                <input required className={inputStyle} type="date" id="due-date" />
            </div>
        </form>
    </div>

}
