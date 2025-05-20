import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
//import Grocery from "./components/Grocery";


const AppLayout = () => {


  return (
    <div>
      <Provider store={appStore}>
      <Header />
      <Outlet />
      </Provider>
    </div>
  );
};

const AppRouter = () =>{
  return (<>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<AppLayout/>}>
      <Route path='' element={<Body/>}></Route>   
      <Route path='restaurant/:resId' element={<RestaurantMenu/>}></Route>
      <Route path='cart' element={<Cart/>}></Route>

    </Route>
    
  </Routes>
  
  </BrowserRouter>
  
  </>)
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppRouter/>);
