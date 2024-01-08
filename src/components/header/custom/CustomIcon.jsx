import { Typography } from '@mui/material'
import React from 'react'
import './CustomeIcon.css';

const CustomIcon = ({text, icon}) => {
    return (
        
        <Typography className='custom_menu' >
                <div className="menu_icon_container">{icon}</div>
                <div className='menu_text'>{text}</div>
        </Typography>
    )
}

export default CustomIcon
