import { NavLink, Outlet } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <div className="App">
      <header>
        <h1>React Router v6 π§ͺ</h1>
      </header>
      <div>
        <nav>
          <NavLink to="">Home π </NavLink>
          <NavLink to="heroes">Heroes π¦Έπ½ββοΈ</NavLink>
          <NavLink to="about">About ππ½ββοΈ</NavLink>
        </nav>
      </div>
      <main>
        <Outlet />
      </main>
      <footer>Created by RockTheCode wit π</footer>

    </div>
  )
}

export default App
