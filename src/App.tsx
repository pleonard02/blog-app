import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage';
import BlogsPage from './pages/BlogsPage';
import NotFoundPage from './pages/NotFound';
import NavBar from './components/NavBar';
import BlogPage from './pages/BlogPage';
import LoginPage from './pages/LoginPage';
import recipeBlogLogo from './assets/recipe_blog_logo.png'

function App() {

  return (
    <div>
      <header>
        <div className='flex flex-row items-end gap-3 px-6 py-4'>
          <img
            src={recipeBlogLogo}
            alt=""
            className='h-24 w-24 object-contain'
          />
          <h2 className='m-0 pb-1 text-4xl leading-none font-[Homemade_Apple] text-[#a3a380] font-medium'>Tl;dr Kitchen</h2>
        </div>
        <NavBar />
      </header>
      
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path='/blogs' element={<BlogsPage />}/>
        <Route path='/blogs/:slug' element={<BlogPage />}/>
        <Route path='/login' element={<LoginPage />}/>
        //path='*' is catchall if it doesn't exist then it goes to this page
        <Route path='*' element={<NotFoundPage />}/> 
      </Routes>
      
    </div>
  )
}

export default App;
