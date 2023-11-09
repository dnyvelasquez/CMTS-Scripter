import { useRoutes, BrowserRouter } from 'react-router-dom';
import Home from '../Home';
import C100g from '../C100G';
import Cbr8 from '../CBR8';
import Cos from '../COS';
import E6000 from '../E6000';
import About from '../About';
import NotFound from '../NotFound';
import NavBar from '../../Components/NavBar'
import { ContextProvider } from '../../Context'
import './index.css';

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/CMTS-Scripter/', element: <Home />},
    {path: '/CMTS-Scripter/c100g', element: <C100g />},
    {path: '/CMTS-Scripter/cbr8', element: <Cbr8 />},
    {path: '/CMTS-Scripter/cos', element: <Cos />},
    {path: '/CMTS-Scripter/e6000', element: <E6000 />},
    {path: '/CMTS-Scripter/about', element: <About />},
    {path: '/*', element: <NotFound />},
  ])
  return routes;
}

const App = () => {

  return (
    <ContextProvider>      
      
      <BrowserRouter>
        <AppRoutes />
        <header>
            <NavBar />
        </header>
      </BrowserRouter>

    </ContextProvider>
  )
}

export default App;
