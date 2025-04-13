"use client"
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

const SelectBox: React.FC = () => {
      const [signupOption, setSignUpOption] = React.useState(0);
    
      const handleChange = (event:any) => {
        setSignUpOption(event.target.value);
      };
  return (
    <>
    <FormControl   sx={{
    m: 1,
    width: 336,
    // Target the OutlinedInput root inside the FormControl
    '& .MuiOutlinedInput-root': {
      height: '50px',
      // Ensure the select display area has the correct height and alignment
      '& .MuiSelect-select': {
        height: '50px',
        display: 'flex',
        alignItems: 'center'
      },
      // Optional: You may also override the notched outline if necessary
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#000000',
      },
    },
  }}
 variant="outlined">
      <InputLabel id="select-label" sx={{ fontSize: '14px', fontWeight: 400, color: '#000000',fontFamily:'Poppins' }}>Signup Option</InputLabel>
      <Select
        labelId="select-label"
        id="select-with-icons"
        value={signupOption}
        onChange={handleChange}
        label="Signup Option"   
        sx={{
          '& .MuiSelect-select': {
            fontSize: '14px',
            fontWeight: 400,
            color: '#000000',
            fontFamily: 'Poppins'
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#000000'
          }
        }}>
        <MenuItem value={0}
          sx={{
            fontSize: '14px',
            fontWeight: 400,
            color: '#000000',
            fontFamily: 'Poppins'
          }}>
          <PersonIcon sx={{ mr: 1 }} />
          Owner
        </MenuItem>
        <MenuItem value={1}
          sx={{
            fontSize: '14px',
            fontWeight: 400,
            color: '#000000',
            fontFamily: 'Poppins'
          }}>
          <SchoolIcon sx={{ mr: 1 }} />
          Driver
        </MenuItem>
        <MenuItem value={2}
          sx={{
            fontSize: '14px',
            fontWeight: 400,
            color: '#000000',
            fontFamily: 'Poppins'
          }}>
          <WorkIcon sx={{ mr: 1 }} />
          Broker
        </MenuItem>
      </Select>
    </FormControl>
    </>
  )
}

export default SelectBox

