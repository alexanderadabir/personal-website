const Contacts = () => {
  return (
    <main>
      <section className="font-sub h-screen flex justify-center items-center py-64">
        <div className="text-6xl font-bold text-center">
          <p className="mb-2">For any questions please mail me:</p>
          <a
            className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent dark:from-dark_text_primary dark:to-dark_text_active"
            href="mailto:alexanderadabir@gmail.com"
          >
            alexanderadabir@gmail.com
          </a>
        </div>
      </section>
    </main>
  )
}

export default Contacts
