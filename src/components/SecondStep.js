import React, { useEffect, useState } from 'react';
import { StepCard } from './StepCard';
import styled from '@emotion/styled';
import {
   FormControl,
   FormControlLabel,
   Radio,
   RadioGroup,
} from '@mui/material';
import { Box } from '@mui/system';
import successVector from '../success-svgrepo-com.svg';

export const SecondStep = ({
   values,
   setValues,
   setStepsPassed,
   stepsPassed,
}) => {
   const { specialAccommodations, companyNameOnBadge } = values;

   useEffect(() => {
      console.log(checkIfPassed());
      checkIfPassed()
         ? setStepsPassed({ ...stepsPassed, second: true })
         : setStepsPassed({ ...stepsPassed, second: false });
   }, [companyNameOnBadge, specialAccommodations]);

   const checkIfPassed = () => {
      if (companyNameOnBadge === null || specialAccommodations === null) {
         return false;
      }
      return true;
   };

   return (
      <StepCard number={2} color={'#58355E'}>
         <Box>
            <Box
               display='flex'
               justifyContent='space-evenly'
               alignItems='center'
               flexDirection='row'>
               <Header>Would you like your company name in your badges?</Header>

               <FormControl>
                  <RadioGroup
                     value={companyNameOnBadge}
                     onChange={(event) => {
                        setValues({
                           ...values,
                           companyNameOnBadge: event.target.value,
                        });
                     }}>
                     <FormControlLabel
                        value={true}
                        control={<Radio />}
                        label='Yes'
                     />
                     <FormControlLabel
                        value={false}
                        control={<Radio />}
                        label='No'
                     />
                  </RadioGroup>
               </FormControl>
            </Box>
            <Box
               display='flex'
               justifyContent='space-evenly'
               alignItems='center'
               flexDirection='row'>
               <Header>
                  Will anyone in your group require special accommodations?
               </Header>
               <FormControl>
                  <RadioGroup
                     value={specialAccommodations}
                     onChange={(event) => {
                        setValues({
                           ...values,
                           specialAccommodations: event.target.value,
                        });
                     }}>
                     <FormControlLabel
                        value={true}
                        control={<Radio />}
                        label='Yes'
                     />
                     <FormControlLabel
                        value={false}
                        control={<Radio />}
                        label='No'
                     />
                  </RadioGroup>
               </FormControl>
            </Box>
            <Box display='flex' justifyContent={'center'}>
               {stepsPassed.second && <Image src={successVector} />}
            </Box>
         </Box>
      </StepCard>
   );
};

const Header = styled.h6`
   font-size: 20px;
   flex-basis: 80%;
   padding: 5px;
`;

const Image = styled.img`
   width: 36%;
   margin: 64px;
`;
