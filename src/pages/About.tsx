import WorkItem from '../components/WorkItem'

const About = () => {
  return (
    <main className="py-64 max-w-3xl">
      <section className="mb-12">
        <h2 className="font-bold text-5xl text-accent mb-12 dark:text-dark_text_accent">
          About me
        </h2>
        <p className="text-lg">
          The Generator App is an online tool that helps you to export
          ready-made templates ready to work as your future website. It helps
          you to combine slides, panels and other components and export it as a
          set of static files: HTML/CSS/JS.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="font-bold text-5xl text-accent mb-12 dark:text-dark_text_accent">
          Work Experience
        </h2>

        <div className="grid gap-8">
          <WorkItem
            title="Junior Web Developer"
            address="Dr. Rajkumar’s Learning App"
            location="Bengaluru"
            date="Sep 2021 - Dec 2021"
            schedule="Full Time"
          />
          <WorkItem
            title="Web Development Intern"
            address="IonPixelz Web Solutions"
            location="Bengaluru"
            date="Sep 2021 - Dec 2021"
            schedule="Internship"
          />
          <WorkItem
            title="SEO / SEM Specialist"
            address="HAAPS"
            location="Bengaluru"
            date="Sep 2021 - Dec 2021"
            schedule="Internship"
          />
        </div>
      </section>

      <section>
        <h2 className="font-bold text-5xl text-accent mb-12 dark:text-dark_text_accent">
          Education
        </h2>
        <div className="grid gap-8">
          <WorkItem
            title="Bachelor in Electronics & Communication"
            address="Bangalore Instutute of Technology"
            date="Aug 2015 - Dec 2020"
            schedule="Full Time"
          />
        </div>
      </section>
    </main>
  )
}

export default About
