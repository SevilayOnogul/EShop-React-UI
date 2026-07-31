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
              <Button>Kaydol</Button>
              <Button>Temizle</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage