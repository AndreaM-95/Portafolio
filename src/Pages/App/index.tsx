import { useRoutes , BrowserRouter } from 'react-router-dom';
import './App.css'
import Navbar from '../../Components/Nav-Bar';
import Home from '../Home';
import Experience from '../Experience';
import Formacion from '../Formacion';
import Games from '../Games';
import PagesWeb from '../Pages-Web';


const AppRoutes = () => {
  const routes = useRoutes([
    { path:'/', element:<Home />},
    { path: '/Experience', element: <Experience /> },
    { path: '/Formacion', element: <Formacion /> },
    { path: '/Games', element: <Games /> },
    { path: '/Pages-Web', element: <PagesWeb/> },
  ])
  return routes
}

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  )
}
export default App
