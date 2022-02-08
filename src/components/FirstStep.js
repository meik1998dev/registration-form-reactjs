import styled from '@emotion/styled';
import { Box, FormControl, MenuItem, Select, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { StepCard } from './StepCard';
import successVector from '../success-svgrepo-com.svg';

export const FirstStep = ({
   values,
   setValues,
   setStepsPassed,
   stepsPassed,
}) => {
   const [number, setNumber] = useState(0);
   const { attendsName } = values;

   useEffect(() => {
      if (Object.keys(attendsName).length !== 0) {
         checkIfPassed()
            ? setStepsPassed({ ...stepsPassed, first: true })
            : setStepsPassed({ ...stepsPassed, first: false });
      }
   }, [number, attendsName]);

   const handleSelect = (event) => {
      const {
         target: { value },
      } = event;

      const arr = { ...attendsName };

      if (value > number) {
         Array(value)
            .fill(0)
            .map((_, i) => {
               if (i + 1 > number) {
                  arr[i + 1] = '';
               }
            });
         setValues({ ...values, attendsName: arr });
      } else {
         Array(number)
            .fill(0)
            .map((_, i) => {
               if (i + 1 > value) {
                  delete arr[i + 1];
               }
            });
         setValues({ ...values, attendsName: arr });
      }

      setNumber(value);
   };

   const handleChangeName = (event, i) => {
      const {
         target: { value },
      } = event;

      setValues({
         ...values,
         attendsName: { ...values.attendsName, [i]: value },
      });
   };

   const checkIfPassed = () => {
      for (var key in attendsName) {
         if (attendsName[key] === '') {
            return false;
         }
      }
      return true;
   };

   return (
      <StepCard number={1} color={'#7AE7C7'}>
         <Box
            display='flex'
            justifyContent='space-evenly'
            alignItems='center'
            flexDirection='row'>
            <Header>How many people will attending?</Header>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
               <Select
                  defaultValue={''}
                  onChange={handleSelect}
                  inputProps={{ 'aria-label': 'Without label' }}>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
               </Select>
            </FormControl>
         </Box>
         <Box display='flex' flexDirection='column'>
            {Array(number)
               .fill(0)
               .map((_, i) => (
                  <Input
                     key={i}
                     onChange={(e) => handleChangeName(e, i + 1)}
                     label={`Attend ${i + 1} Name`}
                  />
               ))}
         </Box>
         <Box display='flex' justifyContent={'center'}>
            {stepsPassed.first && Object.keys(attendsName).length !== 0 && (
               <Image src={successVector} />
            )}
         </Box>
      </StepCard>
   );
};

const Header = styled.h6`
   font-size: 20px;
`;

const Input = styled(TextField)(() => ({
   margin: '10px',
}));

const Image = styled.img`
   width: 36%;
   margin: 64px;
`;
