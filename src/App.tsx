import './App.css'
import Spinner from './components/Spinner';
import RouterConfig from './config/RouterConfig'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <RouterConfig />
      <ToastContainer autoClose={3000} style={{ fontSize: '13px' }} />
      <Spinner/>
    </>
  )
}

export default App
