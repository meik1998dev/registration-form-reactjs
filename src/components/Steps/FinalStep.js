import { Button, Checkbox } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { StepCard } from '../StepCard';
import styled from '@emotion/styled';

export const FinalStep = ({ values }) => {
   const [checked, setChecked] = React.useState(false);

   const handleChange = (event) => {
      setChecked(event.target.checked);
   };

   return (
      <StepCard number={3} color={'#7AE7C7'}>
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
            <Button
               style={{ marginBottom: '1rem' }}
               onClick={() => console.log(values)}
               disabled={checked ? false : true}
               variant='contained'>
               Complete Registration
            </Button>
         </Box>
      </StepCard>
   );
};

const Header = styled.h6`
   font-size: 1.3rem;
`;
