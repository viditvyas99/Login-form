
import { Button,Box, Container, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../features/auth/authSilce'
import { useTranslation } from 'react-i18next'

export default function Loginform() {
    const dispatch =useDispatch()
    const {t} = useTranslation()
    const {loading,error}= useSelector((state)=>{  console.log(state)
         return state.auth})
    const [username, setuserName] = useState('')
    const [password, setpassword] = useState('')
    
    const handleSubmit =(event)=>{
        event.preventDefault()
        dispatch(login({
            username,password
        }))
        console.log()
    }

  return (
    <Container component='main' maxWidth="xs">
        <Box sx={{
            marginTop:8,
            display:'flex',
            flexDirection:'column',
            alignItems:'center'
        }}>
            <Typography component='h1' variant='h5'>
               {t('signin.title')}
            </Typography>
            <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt:1}}>
                <TextField 
                margin='normal'
                required
                id='username'
                label={t('signin.username')}
                autoComplete='username'
                autoFocus
                value={username}
                onChange={(e)=>{setuserName(e.target.value)}}/>
                 <TextField 
                margin='normal'
                required
                id='password'
                label={t('signin.password')}
                autoComplete='currebt-password'
                autoFocus
                value={password}
                onChange={(e)=>{setpassword(e.target.value)}}/>
                {error && <Typography color="error">{error.message}</Typography>}
               <Button type='submit' variant='contained' fullWidth sx={{
                mt:3 ,mb:2
               }}
               disabled={loading}>{loading?t('loading'):t('signin.signinButton')}</Button>
            </Box>
        </Box>
    </Container>
  )
}
