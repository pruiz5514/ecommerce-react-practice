import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home/Home'
import MyAccount from '../MyAccount/MyAccount'
import MyOrder from '../MyOrder/MyOrder'
import MyOrders from '../MyOrders/MyOrders'
import NotFound from '../NotFound/NotFound'
import SignIn from '../SignIn/SignIn'
import './App.css'
import { NavBar } from '../../Components/NavBar/NavBar'
import { ShoppingCartProvider } from '../../Context'
import CheckOutSideMenu from '../../Components/CheckOutSideMenu/CheckOutSideMenu'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home/>},
    { path: '/clothes', element: <Home/>},
    { path: '/electronics', element: <Home/>},
    { path: '/furnitures', element: <Home/>},
    { path: '/toys', element: <Home/>},
    { path: '/others', element: <Home/>},
    { path: '/my-account', element: <MyAccount/>},
    { path: '/my-order', element: <MyOrder/>},
    { path: '/my-orders', element: <MyOrders/>},
    { path: '/my-order/last', element: <MyOrder/>},
    { path: '/my-orders/:id', element: <MyOrder/>},
    { path: '/sign-in', element: <SignIn/>},
    { path: '/*', element: <NotFound/>},
  ])

  return routes;
}

function App() {

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes/>
        <NavBar/>
        <CheckOutSideMenu/>
      </BrowserRouter>
    </ShoppingCartProvider>

  )
}

export default App
