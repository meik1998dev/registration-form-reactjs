import { Button, Checkbox, FormControlLabel } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { StepCard } from '../components/StepCard';
import styled from '@emotion/styled';

export const FinalStep = () => {
   const [checked, setChecked] = React.useState(true);

   const handleChange = (event) => {
      setChecked(event.target.checked);
   };
   return (
      <StepCard number={3} color={'#EC0B43'}>
         <Box
            display='flex'
            justifyContent='space-evenly'
            alignItems='center'
            flexDirection='row'>
            <Header>Are you ready to rock?</Header>
            <Checkbox
               checked={checked}
               onChange={handleChange}
               inputProps={{ 'aria-label': 'controlled' }}
            />
         </Box>
         <Box display='flex' justifyContent='center'>
            <Button disabled={checked ? false : true} variant='contained'>
               Complete Registration
            </Button>
         </Box>
      </StepCard>
   );
};

const Header = styled.h6`
   font-size: 20px;
`;
