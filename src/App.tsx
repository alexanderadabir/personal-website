import { Icon } from '@iconify/react'
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'

import './App.css'

const App = () => {
  return (
    <div className="App text-primary">
      <div className="container relative">
        <header className="flex items-center absolute left-0 right-0 top-14">
          <div className="logo">
            <Icon icon="ic:baseline-code-off" width="64" />
          </div>

          <nav className="ml-auto mr-14 font-sub font-medium text-lg">
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
          <div className="social">
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
          </div>
        </header>
        <main>
          <section className="h-screen flex justify-between items-center">
            <p className="text-5xl leading-[4.375rem]">
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
            <h2 className="font-bold text-5xl text-accent mb-12">Tech Stack</h2>
            <p className="text-3xl mb-36">
              Technologies I&rsquo;ve been working with recently
            </p>

            <div className="grid grid-cols-6 justify-items-center gap-20 mb-52">
              <Icon
                icon="vscode-icons:file-type-html"
                width="120"
                height="120"
              />
              <Icon
                icon="vscode-icons:file-type-css"
                width="120"
                height="120"
              />
              <Icon
                icon="vscode-icons:file-type-light-js"
                width="120"
                height="120"
              />
              <Icon
                icon="vscode-icons:file-type-typescript"
                width="120"
                height="120"
              />
              <Icon
                icon="vscode-icons:file-type-reactts"
                width="120"
                height="120"
              />
              <Icon icon="logos:redux" width="120" height="120" />
              <Icon icon="logos:tailwindcss-icon" width="120" height="120" />
              <Icon
                icon="vscode-icons:file-type-scss"
                width="120"
                height="120"
              />
              <Icon icon="logos:github-icon" width="120" height="120" />
              <Icon icon="logos:nextjs-icon" width="120" height="120" />
              <Icon
                icon="vscode-icons:file-type-vscode"
                width="120"
                height="120"
              />
              <Icon icon="logos:figma" width="120" height="120" />
            </div>
          </section>

          <section className="text-center">
            <h2 className="font-bold text-5xl text-accent mb-12">Projects</h2>
            <p className="text-3xl mb-36">
              Things I&rsquo;ve built so&nbsp;far
            </p>
          </section>
        </main>
        <footer></footer>
      </div>
    </div>
  )
}

export default App
