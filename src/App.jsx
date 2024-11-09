import { useState } from "react";

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

  function addProject(project) {
    setProjects((prevProjects) => [...prevProjects, project]);
    setCurrentProjectId(project.id);
    setIsCreatingProject(false);
  }

  function createProjectHandler() {
    setIsCreatingProject(true);
  }

  function navigateToProject(projectId) {
    setCurrentProjectId(projectId);
    setIsCreatingProject(false);
  }

  let CurrentView = <EmptyProjects createProject={createProjectHandler} />
  if (isCreatingProject) {
    CurrentView = <CreateProjectForm onSubmit={addProject} />
  }
  if (currentProjectId) {
    CurrentView = <ProjectView
      project={currentProject}
      onSaveTask={addTask}
    />
  }
  return (
    <div className="h-screen flex flex-col">
      <div className="h-16"></div>
      <div className="flex flex-row grow">

        <NavBar
          projects={projects}
          navigateTo={navigateToProject}
          currentProjectId={currentProjectId}
        />
        <main className="w-full h-full">
          {CurrentView}
        </main>
      </div>
    </div>

  );
}


export default App;
