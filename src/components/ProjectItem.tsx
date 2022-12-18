import { FaGithubAlt, FaLink } from 'react-icons/fa'

const ProjectItem = () => {
  return (
    <div className="max-w-[375px] text-left rounded-b-3xl shadow-2xl shadow-primary hover:scale-110 duration-300">
      <img
        className="rounded-t-3xl w-[375px] h-[260px] object-cover"
        src="/img/card-1.jpg"
        alt=""
      />
      <div className="p-7">
        <h3 className="font-medium text-2xl mb-4">Project Tile goes here</h3>
        <p className="font-light text-xl mb-3">
          This is sample project description random things are here in
          description This is sample project lorem ipsum generator for dummy
          content
        </p>
        <p className="mb-6">
          Tech stack:{' '}
          <span className="font-light">HTML, JavaScript, SASS, React</span>
        </p>
        <div className="flex justify-between">
          <p className="flex items-center gap-2 hover:text-accent duration-300">
            <FaLink className="inline-block text-xl" />
            <a className="underline" href="#">
              Live Preview
            </a>
          </p>

          <p className="flex items-center gap-2 hover:text-accent duration-300">
            <FaGithubAlt className="inline-block text-xl" />
            <a className="underline" href="#">
              View Code
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
