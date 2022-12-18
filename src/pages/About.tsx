import WorkItem from '../components/WorkItem'

const About = () => {
  return (
    <main className="pt-64 max-w-3xl">
      <section className="mb-8">
        <h2 className="font-bold text-5xl text-accent mb-8">About me</h2>
        <p className="text-lg">
          The Generator App is an online tool that helps you to export
          ready-made templates ready to work as your future website. It helps
          you to combine slides, panels and other components and export it as a
          set of static files: HTML/CSS/JS.
        </p>
      </section>

      <section>
        <h2 className="font-bold text-5xl text-accent">Work Experience</h2>

        <div className="grid mb-8">
          <WorkItem />
          <WorkItem />
          <WorkItem />
        </div>
      </section>

      <section className="mb-64">
        <h2 className="font-bold text-5xl text-accent">Education</h2>
        <div className="grid mb-9">
          <WorkItem />
        </div>
      </section>
    </main>
  )
}

export default About
