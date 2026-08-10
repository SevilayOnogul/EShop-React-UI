
import AppBar from '@mui/material/AppBar';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { IoPersonCircle } from "react-icons/io5";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MagaraIcon from '../images/magara.png';
import { useNavigate } from 'react-router-dom';
import { setCurrentUser } from '../redux/appSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    localStorage.removeItem('currentUser');
    dispatch(setCurrentUser(null));
    navigate('/login');
    toast.success('Başarıyla çıkış yaptınız.')
  }
  return (
    <AppBar position="static" sx={{ backgroundColor: '#454242' }}>
      <Toolbar>
        <IconButton
          onClick={() => navigate('/')}
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <img src={MagaraIcon} width={60} height={60} />
        </IconButton>
        <Typography onClick={() => navigate('/')} variant="h6" component="div" sx={{ flexGrow: 1 ,cursor: 'pointer'}}>
          News mağara
        </Typography>

         <TextField
          id="searchInput"
          placeholder="bir şey ara..."
          variant="standard"
          sx={{
            width: '300px',
            marginRight: '30px',
            marginBottom: '10px',
            '& .MuiInput-root': {
              color: 'lightgrey',
            },
            '& .MuiInput-underline:before': {
              borderBottomColor: 'lightgrey',
            },
          }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  {/* İkon buraya gelebilir */}
                </InputAdornment>
              ),
            },
          }}
        />
        <Button onClick={logout} sx={{textTransform:'none',color:'lightgrey'}} color="inherit">Çıkış Yap</Button>
      </Toolbar>
    </AppBar>)
}

export default Navbar