import { Box,Grid,TextField,Button} from '@mui/material'
import './App.css';
import React, { useState } from 'react';


function App() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [passwordStrength, setPasswordStrength] = useState("")

  const emailText = (e)=>{
    setEmail(e.target.value);
  }

  const passwordStrengthCheck = (password)=>{
    if (password.length >= 8 && /[!@#$%^&*]/.test(password)){
      setPasswordStrength('Strong')
    }else if (password.length>=6){
      setPasswordStrength('Medium')
    }else{
      setPasswordStrength('Weak')
    }
  }

  const passwordText =(e)=>{
    const passwordNew = e.target.value;
    setPassword(passwordNew);
    passwordStrengthCheck(passwordNew);
  }

  const submitData = (e)=>{
    e.preventDefault()

    console.log('Email:',email);
    console.log('Password:',password)
  }

  return (
    <>
      <Grid container spacing={0} direction='column' justifyContent='center' alignItems='center' sx={{minHeight:'100vh'}}>
        <Box sx={{
          height:400,
          width:500,
          border:'2px solid black',
          borderRadius:'30px',
          justifyContent:'center',
          alignItems:'center',
          display:'flex'
        }}>
          <Grid container spacing={0} direction='column' justifyContent='center' alignItems='center'>
            <Grid item sx={{paddingBottom:2}}>
              <TextField required onChange={emailText} value={email} type='text' id="outlined-basic" label="Username" variant="outlined"  InputProps={{sx:{borderRadius:'50px', '& fieldset':{borderColor:'black'}}}} />
            </Grid>
            <Grid>
              <TextField required onChange={passwordText} value={password} type='password' id="outlined-basic" label="Password" variant="outlined" InputProps={{sx:{borderRadius:'50px', '& fieldset':{borderColor:'black'}}}} />
            </Grid>
            <Grid>
              Password Strength : {passwordStrength}
            </Grid>
            <Grid>
            <Button variant="contained" onClick={submitData}>submit</Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </>
  );
}

export default App;
