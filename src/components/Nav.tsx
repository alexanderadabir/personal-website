import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="font-medium text-lg">
      <ul className="flex gap-14">
        <li>
          <Link className="hover:text-accent duration-300" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="hover:text-accent duration-300" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="hover:text-accent duration-300" to="/techStack">
            Tech Stack
          </Link>
        </li>
        <li>
          <Link className="hover:text-accent duration-300" to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className="hover:text-accent duration-300" to="/contacts">
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
