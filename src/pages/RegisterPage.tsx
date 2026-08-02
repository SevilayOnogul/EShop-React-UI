import '../css/RegisterPage.css'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { IoPersonCircle } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import { RegisterPageSchema } from '../schemas/RegisterPageSchema';
import registerPageService from '../services/RegisterPageService';
import { toast } from 'react-toastify';
import type { UserType } from '../types/Types';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {

  const navigate = useNavigate();
  const submit = async (values: any, actions: any) => {
    try {
      const payload: UserType = {
        id:String(Math.floor(Math.random()*99999999)),
        username: values.username,
        password: values.password,
        balance: 1000
      }
      const response = await registerPageService.register(payload)

      if (response) {
        clear();
        toast.success("Kayıt Başarılı! Giriş Yapabilirsiniz.");
        navigate("/login");
      }
    }
    catch (error) {
      console.error(error);
      toast.error("hata oluştu! Kayıt başarısız.");
    }
  }

  const { values, handleChange, errors, handleSubmit, resetForm } = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: submit,
    validationSchema: RegisterPageSchema
  });


  const clear = () => {
    resetForm();
  }
  return (
    <div className='register'>
      <div className='main'>
        <form onSubmit={handleSubmit}>
          <div className="form-div">
            <TextField
              sx={{ width: '300px', marginBottom: '25px' }}
              id="username"
              placeholder="Kullanıcı Adı"
              value={values.username}
              onChange={handleChange}
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
              helperText={errors.username ? <span style={{ color: 'red' }}>{errors.username}</span> : ''}
            />
            <TextField
              sx={{ width: '300px', marginBottom: '25px' }}
              id="password"
              value={values.password}
              onChange={handleChange}
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
              helperText={errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
            />
            <div>
              <Button type='submit' size='small' sx={{ textTransform: 'none', height: '29px', margin: '13px 0px' }} variant="contained" color='info'>Kaydol</Button>
              <Button onClick={clear} size='small' sx={{ textTransform: 'none', height: '29px', margin: '10px', backgroundColor: '#E7C69C' }} variant="contained" color='inherit'>Temizle</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}


export default RegisterPage