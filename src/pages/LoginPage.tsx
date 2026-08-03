import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { IoPersonCircle } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import { RegisterPageSchema } from '../schemas/RegisterPageSchema';
import '../css/LoginPage.css'
import loginPageService from '../services/LoginPageService';
import { useDispatch } from 'react-redux';
import { setCurrentUser, setLoading } from '../redux/appSlice';
import type { UserType } from '../types/Types';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

interface CheckUserType {
  result: boolean,
  currentUser: UserType | null
}

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkUser = (userList: UserType[], username: string, password: string): CheckUserType => {
    const response: CheckUserType = { result: false, currentUser: null }
    userList.forEach((user: UserType) => {
      if (user.username === username && user.password === password) {
        response.result = true;
        response.currentUser = user;
        toast.success('Giriş başarılı!')
      }
    });
    return response;

  }

  const submit = async (values: any, action: any) => {
    try {
      dispatch(setLoading(true))
      const response: UserType[] = await loginPageService.login();
      if (response) {
        const checkUserResponse: CheckUserType = checkUser(response, values.username, values.password);
        if (checkUserResponse.result && checkUserResponse.currentUser) {
          dispatch(setCurrentUser(checkUserResponse.currentUser));
          localStorage.setItem("currentUser", JSON.stringify(checkUserResponse.currentUser));
          navigate('/');
        } else {
          toast.error('Kullanıcı adı veya şifre hatalı!')
        }
      }
    } catch (error) {
      toast.error('Giriş yapılamadı. Lütfen tekrar deneyin.' + error)

    } finally {
      dispatch(setLoading(false))
    }
  }


  const { values, handleChange, errors, handleSubmit, resetForm } = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit: submit,
    validationSchema: RegisterPageSchema
  });
  const clear = () => {
    resetForm();
  }
  return (
    <div className='login'>
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
              <Button type='submit' size='small' sx={{ textTransform: 'none', height: '29px', margin: '13px 0px' }} variant="contained" color='info'>Giriş Yap</Button>
              <Button onClick={clear} size='small' sx={{ textTransform: 'none', height: '29px', margin: '10px', backgroundColor: '#E7C69C' }} variant="contained" color='inherit'>Temizle</Button>
            </div>
          </div>
        </form>
      </div>
    </div>)
}

export default LoginPage