import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div className="grid grid-cols-3 gap-x-12 gap-y-16">
      <ProjectItem
        img="/img/projects/tailwind-sneakers.png"
        title="Tailwind Sneakers"
        description="Online store of sneakers. There is an adaptive and logic of purchasing goods with sending to the database 'mockAPI'. Hot reloading with saving the state of the goods"
        stack="JS, React, Tailwind, mockAPI"
        livePreview="https://alexanderadabir.github.io/tailwind-sneakers/"
        github="https://github.com/alexanderadabir/tailwind-sneakers"
      />

      <ProjectItem title="Project title" description="Description" />
      <ProjectItem title="Project title" description="Description" />
    </div>
  )
}

export default Projects
