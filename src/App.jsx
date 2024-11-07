import CreateProjectForm from "./components/CreateProjectForm";
import NavBar from "./components/NavBar";


function App() {
  return (
    <div className="flex flex-row h-screen mt-10">
      <NavBar />
      <main className="w-full h-full">
        <CreateProjectForm />

        {/* <EmptyProjects /> */}
      </main>
    </div>
  );
}


export default App;
