import React, { useEffect } from 'react';
import { StepCard } from '../StepCard';
import styled from '@emotion/styled';
import {
   FormControl,
   FormControlLabel,
   Radio,
   RadioGroup,
   TextField,
} from '@mui/material';
import { Box } from '@mui/system';
import { SuccessSvg } from '../SuccessSvg';

export const SecondStep = ({
   values,
   setValues,
   setStepsPassed,
   stepsPassed,
}) => {
   const { specialAccommodations, companyNameOnBadge, companyName } = values;

   useEffect(() => {
      checkIfPassed()
         ? setStepsPassed({ ...stepsPassed, second: true })
         : setStepsPassed({ ...stepsPassed, second: false });
   }, [companyNameOnBadge, specialAccommodations, companyName]);

   const handleCompanyName = (event) => {
      setValues({ ...values, companyName: event.target.value });
   };

   const checkIfPassed = () => {
      if (
         companyNameOnBadge === null ||
         specialAccommodations === null ||
         (companyNameOnBadge === 'true' && companyName === '')
      ) {
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
                        if (event.target.value === 'false') {
                           console.log('x');
                           setValues({
                              ...values,
                              companyName: null,
                              companyNameOnBadge: event.target.value,
                           });
                        } else {
                           setValues({
                              ...values,
                              companyNameOnBadge: event.target.value,
                           });
                        }
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
            {companyNameOnBadge === 'true' && (
               <Input onChange={handleCompanyName} label='Company Name' />
            )}
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
            <SuccessSvg show={stepsPassed.second} />
         </Box>
      </StepCard>
   );
};

const Header = styled.h6`
   font-size: 1.3rem;
   flex-basis: 80%;
   padding: 5px;
`;

const Input = styled(TextField)(() => ({
   width: '70%',
   marginLeft: '30px',
}));
