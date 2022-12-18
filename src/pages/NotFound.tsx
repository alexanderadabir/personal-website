const NotFound = () => {
  return (
    <main>
      <section className="font-sub h-screen flex justify-center items-center mb-64">
        <div className="text-6xl font-bold text-center">
          <div className="mb-2 flex items-center">
            <p>Oops! </p>
            <img
              src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/slightly-frowning-face_1f641.png"
              srcSet="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/slightly-frowning-face_1f641.png 2x"
              alt="Slightly Frowning Face on Microsoft Teams 1.0"
              width="120"
              height="120"
            />
          </div>
          <p>Page not found</p>
        </div>
      </section>
    </main>
  )
}

export default NotFound
