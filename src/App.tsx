import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './App.css'

const App = () => {
  return (
    <div className="App text-primary">
      <div className="container relative">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  )
}

export default App
