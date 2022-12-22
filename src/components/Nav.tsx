import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="font-medium text-lg">
      <ul className="flex gap-14">
        <li>
          <NavLink
            className={({ isActive }) =>
              (isActive
                ? 'text-accent dark:text-dark_text_active'
                : undefined) +
              ' hover:text-accent duration-300 dark:hover:text-dark_text_active'
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              (isActive
                ? 'text-accent dark:text-dark_text_active'
                : undefined) +
              ' hover:text-accent duration-300 dark:hover:text-dark_text_active'
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              (isActive
                ? 'text-accent dark:text-dark_text_active'
                : undefined) +
              ' hover:text-accent duration-300 dark:hover:text-dark_text_active'
            }
            to="/techstack"
          >
            Tech Stack
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              (isActive
                ? 'text-accent dark:text-dark_text_active'
                : undefined) +
              ' hover:text-accent duration-300 dark:hover:text-dark_text_active'
            }
            to="/projects"
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              (isActive
                ? 'text-accent dark:text-dark_text_active'
                : undefined) +
              ' hover:text-accent duration-300 dark:hover:text-dark_text_active'
            }
            to="/contacts"
          >
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
