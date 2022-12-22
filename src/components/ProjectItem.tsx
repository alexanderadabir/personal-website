import { FaGithubAlt, FaLink } from 'react-icons/fa'

interface Props {
  img?: string
  title: string
  description: string
  stack?: string
  livePreview?: string
  github?: string
}

const ProjectItem = ({
  img,
  title,
  description,
  stack,
  livePreview,
  github,
}: Props) => {
  return (
    <div className="max-w-[375px] text-left rounded-3xl shadow-2xl shadow-primary dark:shadow-dark_text_primary hover:scale-110 duration-300">
      <div
        className={`${
          !img &&
          'bg-primary dark:bg-dark_text_primary flex justify-center items-center'
        } w-[375px] h-[260px] rounded-t-3xl`}
      >
        {img ? (
          <img
            className="object-cover w-[375px] h-[260px] rounded-t-3xl"
            src={img}
            alt="Website screenshot"
          />
        ) : (
          <h4 className="text-accent dark:text-dark_text_active text-3xl font-bold">
            Soon
          </h4>
        )}
      </div>

      <div className="p-7 flex flex-col min-h-[calc(100%_-_260px)] justify-between">
        <div>
          <h3 className="font-medium text-2xl mb-4">{title}</h3>
          <p className="font-light text-xl mb-3">{description}</p>
        </div>
        <div>
          <p className="mb-6">
            Tech stack: <span className="font-light">{stack}</span>
          </p>
          <div className="flex justify-between">
            <p className="flex items-center gap-2 hover:text-accent dark:hover:text-dark_text_active duration-300">
              <FaLink className="inline-block text-xl" />
              <a className="underline" href={livePreview} target="_blank">
                Live Preview
              </a>
            </p>

            <p className="flex items-center gap-2 hover:text-accent dark:hover:text-dark_text_active duration-300">
              <FaGithubAlt className="inline-block text-xl" />
              <a className="underline" href={github} target="_blank">
                View Code
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
