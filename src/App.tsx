import './App.css'
import Navbar from './components/Navbar';
import Spinner from './components/Spinner';
import RouterConfig from './config/RouterConfig'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import type { RootState } from './redux/store';
import { useDispatch, useSelector } from 'react-redux';
import type { ProductType, UserType } from './types/Types';
import ProductService from './services/ProductService';
import { setCurrentUser, setProducts } from './redux/appSlice';
import { useEffect } from 'react';
import { setBasket } from './redux/basketSlice';
import BasketDetail from './components/BasketDetails';
import BasketDetails from './components/BasketDetails';

function App() {

  const { currentUser } = useSelector((state: RootState) => state.app);
  const dispatch=useDispatch();
  const getAllProducts=async()=>{
    const products:ProductType[]=await ProductService.getAllProducts();
    dispatch(setProducts(products));

  }
  useEffect(()=>{
    getAllProducts();
  },[])

  useEffect(()=>{
    const currentUserString:string|null=localStorage.getItem("currentUser");
    if(currentUserString){
      const currentUser:UserType=JSON.parse(currentUserString)as UserType;
      dispatch(setCurrentUser(currentUser))
    }
  },[])
  useEffect(()=>{
    const basketString=localStorage.getItem("basket");
    if(basketString){
      const basket:ProductType[]=JSON.parse(basketString)as ProductType[]
      dispatch(setBasket(basket));
    }
  },[])
  return (
    <>
      {currentUser && <Navbar />}
      <RouterConfig />
      <ToastContainer autoClose={2000} style={{ fontSize: '13px' }} />
      <Spinner />
      <BasketDetails/>
    </>
  )
}

export default App
