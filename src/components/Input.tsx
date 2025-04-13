"use client"
import type React from "react"
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import '../../src/assets/styles/main.css'

type InputBoxProps = {
  label: string;
  defaultValue?: string;
  icon?: React.ReactNode;
  type?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  endIcon?: React.ReactNode
};
const InputBox: React.FC<InputBoxProps> = ({ label, defaultValue, icon, type = "text", inputProps, endIcon }) => {
  return (
    <FormControl sx={{ m: 1, width: 336, height: 50 }} variant="outlined">
      <InputLabel htmlFor="input-with-icon" sx={{ fontSize: '14px', fontWeight: 400, color: '#000000', fontFamily: 'Poppins' }}>{label}</InputLabel>
      <OutlinedInput
        id="input-with-icon"
        defaultValue={defaultValue}
        label={label}
        type={type}
        inputProps={inputProps}
        startAdornment={
          <InputAdornment position="start">
            {icon}
          </InputAdornment>
        }
        endAdornment={
          endIcon && (<InputAdornment position="end">
            {endIcon}
          </InputAdornment>)
        }
        sx={{
          // Targets the input element text style.
          '& input': {
            fontSize: '14px',
            fontWeight: 400,
            color: '#000000',
            fontFamily: 'Poppins'
          },
          // Optionally, if you need to style other parts like the notched outline, you can add them here:
          '& .MuiOutlinedInput-notchedOutline': {
            // Example: outline border color
            borderColor: '#000000'
          }
        }}

      />
    </FormControl>

  )
}

export default InputBox

