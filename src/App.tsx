import './App.css'
import Navbar from './components/Navbar';
import Spinner from './components/Spinner';
import RouterConfig from './config/RouterConfig'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import type { RootState } from './redux/store';
import { useSelector } from 'react-redux';

function App() {

  const { currentUser } = useSelector((state: RootState) => state.app);

  return (
    <>
      {currentUser && <Navbar />}
      <RouterConfig />
      <ToastContainer autoClose={2000} style={{ fontSize: '13px' }} />
      <Spinner />
    </>
  )
}

export default App
