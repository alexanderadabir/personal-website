import Nav from './Nav'
import Logo from './Logo'
import Social from './Social'

const Header = () => {
  return (
    <header className="flex items-center absolute left-0 right-0 top-14 font-sub z-10">
      <Logo />
      <div className="ml-auto flex items-center gap-14">
        <Nav />
        <Social />
      </div>
    </header>
  )
}

export default Header
