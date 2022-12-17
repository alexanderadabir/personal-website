import './App.css'
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'

const App = () => {
  return (
    <div className="App text-primary">
      <div className="container relative">
        <header className="flex items-center absolute left-0 right-0 top-14">
          <div className="logo">
            <img src="/img/logo.svg" alt="logo" />
          </div>

          <nav className="ml-auto mr-14 font-sub font-medium text-xl">
            <ul className="flex gap-16">
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
          <div className="social">
            <ul className="flex items-center gap-5">
              <li>
                <a href="#">
                  <FaGithubAlt className="w-8 h-8" />
                </a>
              </li>
              <li>
                <a href="#">
                  <BsTwitter className="w-8 h-8" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedinIn className="w-8 h-8" />
                </a>
              </li>
            </ul>
          </div>
        </header>
        <main>
          <section className="h-screen flex justify-between items-center">
            <p className="text-6xl leading-[4.375rem]">
              <b>
                Hi
                <img
                  className="inline-block"
                  src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/waving-hand_1f44b.png"
                  srcSet="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/waving-hand_1f44b.png 2x"
                  alt="Waving Hand on Microsoft Teams 1.0"
                  width="60"
                  height="60"
                />
                , <br /> My&nbsp;name is <br />{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Alexander Adabir
                </span>
                <br />
                I&nbsp;build things for web
              </b>
            </p>
            <img width={349} src="/img/my-photo.png" alt="Alexander Adabir" />
          </section>

          <section className="text-center">
            <h2 className="font-bold text-5xl text-accent mb-12">
              My&nbsp;Tech Stack
            </h2>
            <p className="text-3xl mb-36">
              Technologies I&rsquo;ve been working with recently
            </p>

            <div className="grid grid-rows-2 gap-20 mb-52">
              <div className="flex justify-between">
                <img width={120} src="/img/svg/html5.svg" alt="HTML5" />
                <img width={120} src="/img/svg/css3.svg" alt="CSS3" />
                <img width={120} src="/img/svg/js.svg" alt="JavaScript" />
                <img width={120} src="/img/svg/ts.svg" alt="TypeScript" />
                <img width={120} src="/img/svg/react.svg" alt="React" />
                <img width={120} src="/img/svg/redux.svg" alt="Redux" />
              </div>
              <div className="flex justify-between">
                <img width={120} src="/img/svg/tailwind.svg" alt="Tailwind" />
                <img width={120} src="/img/svg/sass.svg" alt="Sass" />
                <img width={120} src="/img/svg/git.svg" alt="Git" />
                <img width={120} src="/img/svg/nextjs.svg" alt="NextJS" />
                <img width={120} src="/img/svg/vscode.svg" alt="VsCode" />
                <img width={120} src="/img/svg/figma.svg" alt="Figma" />
              </div>
            </div>
          </section>
        </main>
        <footer></footer>
      </div>
    </div>
  )
}

export default App
