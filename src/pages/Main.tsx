import { Icon } from '@iconify/react'
import { useState, useEffect } from 'react'

import Footer from '../components/Footer'
import Projects from '../components/Projects'
import TechStack from '../components/TechStack'

const Main = () => {
  const [showArrow, setShowArrow] = useState(true)

  function scrollHandler() {
    const pos = window.scrollY
    pos > 0 ? setShowArrow(false) : setShowArrow(true)
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)

    return () => window.removeEventListener('scroll', scrollHandler)
  }, [])

  return (
    <>
      <main>
        <section className="h-screen flex justify-between items-center relative">
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
              ,<br />
              My&nbsp;name is
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent dark:from-dark_text_primary dark:to-dark_text_active">
                Alexander Adabir
              </span>
              <br />
              I&nbsp;build things for web
            </b>
          </p>
          <div className="w-[349px] h-[349px] bg-my-photo bg-cover dark:bg-dark-my-photo"></div>
          <div
            className={`${
              showArrow ? 'visible opacity-100' : 'invisible opacity-0'
            } absolute duration-300 bottom-10 left-1/2 -translate-x-1/2 animate-bounce`}
          >
            <Icon icon="material-symbols:arrow-circle-down" width="48" />
          </div>
        </section>

        <section className="text-center mb-52" id="next">
          <h2 className="font-bold text-5xl text-accent mb-12 dark:text-dark_text_accent">
            Tech Stack
          </h2>
          <p className="text-3xl mb-36">
            Technologies I&rsquo;ve been working with recently
          </p>

          <TechStack />
        </section>

        <section className="text-center mb-56">
          <h2 className="font-bold text-5xl text-accent mb-12 dark:text-dark_text_accent">
            Projects
          </h2>
          <p className="text-3xl mb-36">Things I&rsquo;ve built so&nbsp;far</p>
          <Projects />
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Main
