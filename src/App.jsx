import { useState } from "react";
import MenuIcon from './assets/menu-icon.png'

import CreateProjectForm from "./components/CreateProjectForm";
import NavBar from "./components/NavBar";
import ProjectView from "./components/ProjectView";
import EmptyProjects from "./components/EmptyProjects";

const mockedProjects = [
  {
    id: 1,
    title: "Project 1",
    description: "This is a project description",
    dueDate: "2022-01-01",
    tasks: [
      'Task 1',
      'Task 2',
      'Task 3'
    ]
  },
  {
    id: 2,
    title: "Project 2",
    description: "This is a project description",
    dueDate: "2022-01-01",
    tasks: [
      'Task 1',
      'Task 2',
      'Task 3'
    ]
  },
]

function App() {
  // State
  const [projects, setProjects] = useState(mockedProjects);
  const [currentProjectId, setCurrentProjectId] = useState(null);
  const [isCreatingProject, setIsCreatingProject] = useState(false);

  // If there is a current project, find it
  let currentProject = null;
  if (currentProjectId) {
    currentProject = projects.find((project) => project.id === currentProjectId);
  }

  function addTask(task) {
    const projectIndex = projects.findIndex((project) => project.id === currentProjectId);
    projects[projectIndex].tasks.push(task.title);

    setProjects((prevProjects) => {
      const newProjects = [...prevProjects];
      newProjects[projectIndex] = projects[projectIndex];
      return newProjects;
    });
  }

  function removeTask(task) {
    const projectIndex = projects.findIndex((project) => project.id === currentProjectId);
    projects[projectIndex].tasks = projects[projectIndex].tasks.filter((t) => t !== task);
    setProjects((prevProjects) => {
      const newProjects = [...prevProjects];
      newProjects[projectIndex] = projects[projectIndex];
      return newProjects;
    });
  }

  function addProject(project) {
    setProjects((prevProjects) => [...prevProjects, project]);
    setCurrentProjectId(project.id);
    setIsCreatingProject(false);
    setIsOpen(false)
  }

  function createProjectHandler() {
    setCurrentProjectId(null);
    setIsCreatingProject(true);
    setIsOpen(false)
  }

  function navigateToProject(projectId) {
    setCurrentProjectId(projectId);
    setIsCreatingProject(false);
    setIsOpen(false)
  }

  let CurrentView = <EmptyProjects createProject={createProjectHandler} />
  if (isCreatingProject) {
    CurrentView = <CreateProjectForm onSubmit={addProject} />
  }
  if (currentProjectId) {
    CurrentView = <ProjectView
      project={currentProject}
      onSaveTask={addTask}
      onRemoveTask={removeTask}
    />
  }

  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }
  return (
    <div className="h-screen flex flex-col">
      <header className="h-16 bg-black lg:bg-transparent flex flex-col justify-center p-3">
        <img src={MenuIcon} alt="menu"
          onClick={toggleDrawer}
          className="h-8 w-8 lg:h hover:cursor-pointer lg:hidden"></img>
      </header>
      <div className="flex flex-row grow">

        <NavBar
          projects={projects}
          navigateTo={navigateToProject}
          currentProjectId={currentProjectId}
          onAddProject={createProjectHandler}
          isOpen={isOpen}
          closeDrawer={() => {
            setIsOpen(false)
          }}
        />
        <main className="w-full h-full p-4">
          {CurrentView}
        </main>
      </div>
    </div >

  );
}


export default App;
