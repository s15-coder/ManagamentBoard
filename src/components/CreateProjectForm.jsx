const inputStyle = "block outline-none bg-neutral-200 px-3 py-1 capitalize focus:border-b-black border-2 shadow-sm border-neutral-200 w-full mb-5";

export default function CreateProjectForm() {

    return <div className="w-full h-full">
        <form action="" className="max-w-screen-sm  m-auto">
            <div className="flex justify-end gap-x-5" >
                <button className="text-lg  py-1.5 px-4 rounded-lg hover:bg-red-600 hover:text-white">Cancel</button>
                <button className="text-lg bg-black py-1.5 px-4 text-white rounded-lg hover:bg-slate-800">Save</button>
            </div>
            <div className="my-2">
                <label className="block font-medium" htmlFor="title">TITLE</label>
                <input className={inputStyle} type="text" id="title" />
            </div>
            <div>
                <label htmlFor="description">DESCRIPTION</label>
                <textarea className={inputStyle} name="" id="description" cols="30" rows="10"></textarea>
            </div>
            <div>
                <label htmlFor="due-date">DUE DATE</label>
                <input className={inputStyle} type="date" id="due-date" />
            </div>
        </form>
    </div>

}
