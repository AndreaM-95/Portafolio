import { useRoutes , BrowserRouter } from 'react-router-dom';
import Navbar from '../../Components/Nav-Bar/NavBar';
import AboutMe from '../About-Me';
import Projects from '../Projects';
import Contact from '../Contact';
import Footer from '../../Components/Footer/Footer';


const AppRoutes = () => {
  const routes = useRoutes([
    { path:'/', element:<AboutMe />},
    { path: '/Projects', element: <Projects /> },
    { path: '/Contact', element: <Contact /> },
  ])
  return routes
}

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  )
}
export default App
