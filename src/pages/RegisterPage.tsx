import '../css/RegisterPage.css'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { IoPersonCircle } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import Button from '@mui/material/Button';



function RegisterPage() {
  return (
    <div className='register'>
      <div className='main'>
        <form>
          <div className="form-div">
            <TextField
              sx={{ width: '300px', marginbottom: '25px' }}
              id="username"
              placeholder="Kullanıcı Adı"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <IoPersonCircle />
                    </InputAdornment>
                  ),
                },
              }}
              variant="standard"
            />
            <TextField
              sx={{ width: '300px', marginbottom: '25px' }}
              id="username"
              type="password"
              placeholder="Şifre"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaLock />
                    </InputAdornment>
                  ),
                },
              }}
              variant="standard"
            />
            <div>
              <Button size='small' sx={{ textTransform: 'none', height: '29px', margin: '13px 0px' }} variant="contained" color='info'>Kaydol</Button>
              <Button size='small' sx={{ textTransform: 'none', height: '29px', margin: '10px', backgroundColor: '#E7C69C' }} variant="contained" color='inherit'>Temizle</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage