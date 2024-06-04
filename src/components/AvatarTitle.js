import React from 'react';
import { Avatar } from '@mui/material';
import './avatarcomp.css'

const AvatarTitle = ({ number, title, color,subtitle }) => {
    return (
        <div className="avatar-title-container">
            <div style={{marginRight: '10px'}}>
                <Avatar sx={{ bgcolor: color, height: { sm: '30px', md: '80px' }, width: { sm: '30px', md: '80px' } }}>{number}</Avatar>
            </div>
            <div className='avatar-content'>
            <div className="avatar-title">{title}</div>
            <div className='avatar-subtitle'>{subtitle}</div>
            </div>
        </div>
    );
};

export default AvatarTitle;