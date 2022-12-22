import TS from '../components/TechStack'

const TechStack = () => {
  return (
    <main className="py-64">
      <section>
        <div>
          <h2 className="font-bold text-5xl text-accent mb-8 dark:text-dark_text_accent">
            Tech Stack
          </h2>
          <p className="text-lg mb-36">
            Technologies I’ve been working with recently
          </p>
        </div>

        <TS />
      </section>
    </main>
  )
}

export default TechStack
