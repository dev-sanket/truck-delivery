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
    <FormControl sx={{ m: 1, minWidth: 240 }} variant="outlined">
      <InputLabel id="select-label">Signup Option</InputLabel>
      <Select
        labelId="select-label"
        id="select-with-icons"
        value={signupOption}
        onChange={handleChange}
        label="Signup Option"
      >
        <MenuItem value={0}>
          <PersonIcon sx={{ mr: 1 }} />
          Owner
        </MenuItem>
        <MenuItem value={1}>
          <SchoolIcon sx={{ mr: 1 }} />
          Driver
        </MenuItem>
        <MenuItem value={2}>
          <WorkIcon sx={{ mr: 1 }} />
          Broker
        </MenuItem>
      </Select>
    </FormControl>
    </>
  )
}

export default SelectBox

