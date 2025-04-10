"use client"
import type React from "react"
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputLabel from '@mui/material/InputLabel';
import CallIcon from '@mui/icons-material/Call';
type InputBoxProps = {
  label: string;
  defaultValue?: string;
  icon?: React.ReactNode;
  type?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};
const InputBox: React.FC<InputBoxProps> = ({ label, defaultValue,icon,  type = "text", inputProps })  => {
  return (
    <>
    <FormControl sx={{ m: 1, minWidth: 284 }} variant="outlined">
    <InputLabel htmlFor="input-with-icon">{label}</InputLabel>
    <OutlinedInput
      id="input-with-icon"
      defaultValue={defaultValue}
      label={label}
      type={type}
      inputProps={inputProps}
      startAdornment={
        <InputAdornment position="start">
          {/* <AccountCircle /> */}
          {/* <CallIcon /> */}
          {icon}
        </InputAdornment>
      }
    />
    </FormControl>
    </>
  )
}

export default InputBox

