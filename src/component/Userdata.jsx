import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../features/auth/authSilce'

const Userdata = () => {
    const dispatch =useDispatch()
    const user = useSelector((state)=>state.auth.user)
    if (!user){
        return null
    }
    const hanlelogout =()=>{
        dispatch(logout())
    }
  return (
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                        field
                    </TableCell>
                    <TableCell>
                        value
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            <TableRow>
                    <TableCell>
                    firstName
                    </TableCell>
                    <TableCell>
                        {user.firstName}
                    </TableCell>
            </TableRow>
            <TableRow>
                    <TableCell>
                    lastName
                    </TableCell>
                    <TableCell>
                        {user.lastName}
                    </TableCell>
            </TableRow>
            <TableRow>
                    <TableCell>
                    gender
                    </TableCell>
                    <TableCell>
                        {user.gender}
                    </TableCell>
            </TableRow>
            <TableRow>
                    <TableCell>
                    username
                    </TableCell>
                    <TableCell>
                        {user.username}
                    </TableCell>
            </TableRow>
            <TableRow>
                    <TableCell>
                    email
                    </TableCell>
                    <TableCell>
                        {user.email}
                    </TableCell>
            </TableRow>
                
            </TableBody>
        </Table>
        <Button onClick={hanlelogout} variant='contained' color='secondary'sx={{mt:2}}>
            lagout
        </Button>
    </TableContainer>
      
    
  )
}

export default Userdata
