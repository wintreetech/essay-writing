import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {Home, Pricing, About, Services, OrderGuide} from "./pages/index"
import Layout from './Layout/Layout';

function App() {

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/pricing",
          element: <Pricing />,
        },
        {
          path: "/orderguide",
          element: <OrderGuide />,
        },
        
      ],
    }
    
  ]);

  return (
    <>  
      <RouterProvider router={router} />
    </>
  )
}

export default App
