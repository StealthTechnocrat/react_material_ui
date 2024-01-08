import { Box } from '@mui/material';
import React from 'react'
import { ImageURL } from '../../utils/data';

const wraper ={
    display:'flex',
    marginTop:10,
    justifyContent:'space-between',
    marginBottom:10
};
const MidleSec = () => {
    return (
        <Box style={wraper}>
            {ImageURL.map((image) => (
                <img style={{width:'33%'}}src={image.url} key={image.id} alt="" />
            ))}
        </Box>
    )
}

export default MidleSec;
