import { NavLink } from 'react-router-dom'
import ErrorPage from './ErrorPage.jpg' 

function NotFound() {
  return (
    <div>
     <h1>Page not found</h1>
     <h3>Go to <NavLink to="/">Home</NavLink> page</h3>
     <img className='w-75' src={ErrorPage} alt="error page" />
     
    </div>
  )
}

export default NotFound
