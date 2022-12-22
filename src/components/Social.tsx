import { FaGithubAlt, FaTelegramPlane } from 'react-icons/fa'
import { SlSocialVkontakte } from 'react-icons/sl'

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
        <a
          href="https://vk.com/alexanderadabir"
          target="_blank"
          aria-label="VK"
        >
          <SlSocialVkontakte className="w-8 h-8 hover:text-accent duration-300 dark:hover:text-dark_text_active" />
        </a>
      </li>
      <li>
        <a
          href="https://t.me/alexanderadabir"
          target="_blank"
          aria-label="LinkedIn"
        >
          <FaTelegramPlane className="w-8 h-8 hover:text-accent duration-300 dark:hover:text-dark_text_active" />
        </a>
      </li>
    </ul>
  )
}

export default Social
