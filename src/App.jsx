import './App.css'
import Bolgs from './components/Blogs/Bolgs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/header/Header'


function App() {

  return (
    <>
    <Header></Header>
    <div className='md:flex'>
    <Bolgs></Bolgs>
    <Bookmarks></Bookmarks>
    </div>
    
    </>
  )
}

export default App
