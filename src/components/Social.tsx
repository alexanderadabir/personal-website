import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'

const Social = () => {
  return (
    <ul className="flex items-center gap-5">
      <li>
        <a href="#">
          <FaGithubAlt className="w-8 h-8 hover:text-accent duration-300" />
        </a>
      </li>
      <li>
        <a href="#">
          <BsTwitter className="w-8 h-8 hover:text-accent duration-300" />
        </a>
      </li>
      <li>
        <a href="#">
          <FaLinkedinIn className="w-8 h-8 hover:text-accent duration-300" />
        </a>
      </li>
    </ul>
  )
}

export default Social
