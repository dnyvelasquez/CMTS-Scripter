import { useRoutes, BrowserRouter } from 'react-router-dom';
import Home from '../Home';
import C100g from '../C100G';
import Cbr8 from '../CBR8';
import Cos from '../COS';
import E6000 from '../E6000';
import NotFound from '../NotFound';
import NavBar from '../../Components/NavBar'
import { ContextProvider } from '../../Context'
import './index.css';

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/c100g', element: <C100g />},
    {path: '/cbr8', element: <Cbr8 />},
    {path: '/cos', element: <Cos />},
    {path: '/e6000', element: <E6000 />},
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
