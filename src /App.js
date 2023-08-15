import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import { LogInAction } from './pages/LogIn';
//pages 
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import NotFound from './pages/NotFound';

//layouts
import RootLayout from './layouts/RootLayout';


function App() {
  const router = createBrowserRouter( createRoutesFromElements (
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<LogIn />} action={LogInAction} />
      <Route path="*" element={<NotFound />} />
    </Route>
  ))
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
