const Nav = () => {
  return (
    <nav className="font-medium text-lg">
      <ul className="flex gap-14">
        <li>
          <a className="hover:text-accent duration-300" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="hover:text-accent duration-300" href="#">
            About
          </a>
        </li>
        <li>
          <a className="hover:text-accent duration-300" href="#">
            Tech Stack
          </a>
        </li>
        <li>
          <a className="hover:text-accent duration-300" href="#">
            Projects
          </a>
        </li>
        <li>
          <a className="hover:text-accent duration-300" href="#">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
