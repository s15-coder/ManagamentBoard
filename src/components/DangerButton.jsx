function DangerButton({ children, ...props }) {
    return <button className="text-lg  py-1.5 px-4 rounded-lg hover:bg-red-600 hover:text-white" {...props}>{children}</button>
}
export default DangerButton;