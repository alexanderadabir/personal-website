import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'

const Social = () => {
  return (
    <ul className="flex items-center gap-5">
      <li>
        <a
          href="https://github.com/alexanderadabir"
          target="_blank"
          aria-label="Github"
        >
          <FaGithubAlt className="w-8 h-8 hover:text-accent duration-300 dark:hover:text-dark_text_active" />
        </a>
      </li>
      <li>
        <a href="#" target="_blank" aria-label="Twitter">
          <BsTwitter className="w-8 h-8 hover:text-accent duration-300 dark:hover:text-dark_text_active" />
        </a>
      </li>
      <li>
        <a href="#" target="_blank" aria-label="LinkedIn">
          <FaLinkedinIn className="w-8 h-8 hover:text-accent duration-300 dark:hover:text-dark_text_active" />
        </a>
      </li>
    </ul>
  )
}

export default Social
