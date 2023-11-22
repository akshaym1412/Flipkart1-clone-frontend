import { Menu, MenuItem, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function Profile({accounts,setaccounts}){
    const [open,setopen]=useState(false);
    const handleClick=(e)=>{
    setopen(e.currentTarget)
    }
    const handleClose=()=>{
        setopen(false)
    }
    const logout=()=>{
    setaccounts("")
    }
  return (
    <>
    <Typography onMouseOver={handleClick} style={{fontStyle:"italic",fontSize:"20px"}}>{accounts}</Typography>
    <Menu
    anchorEl={open}
    open={Boolean(open)}
    onClose={handleClose}
   >
   <MenuItem onClick={()=>{handleClose();logout()}}>LogOut</MenuItem>
    </Menu>
    </>
  )
}
