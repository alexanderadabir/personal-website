import Logo from './Logo'
import Social from './Social'
import Nav from './Nav'
import Contacts from './Contacts'

const Footer = () => {
  return (
    <footer className="grid">
      <div className="flex items-center font-sub py-12 border-b-2">
        <Logo />
        <Contacts />
        <Social />
      </div>

      <div className="flex items-center font-sub py-12 justify-between">
        <Nav />

        <p className="text">
          Designed and built by&nbsp;
          <span className="bg-clip-text bg-transparent bg-gradient-to-r from-primary to-accent dark:from-dark_text_primary dark:to-dark_text_active">
            Alexander Adabir
          </span>{' '}
          with{' '}
          <span className="bg-clip-text bg-transparent bg-gradient-to-r from-primary to-accent dark:from-dark_text_primary dark:to-dark_text_active">
            Love &amp;&nbsp;Coffee
          </span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
