import PJ from '../components/Projects'

const Projects = () => {
  return (
    <main className="py-64">
      <section>
        <h2 className="font-bold text-5xl text-accent mb-8 dark:text-dark_text_accent">
          Projects
        </h2>
        <p className="text-lg mb-28">Things I’ve built so far</p>

        <PJ />
      </section>
    </main>
  )
}

export default Projects
