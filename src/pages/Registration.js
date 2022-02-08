import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import React, { useState } from 'react';
import { FinalStep } from '../components/FinalStep';
import { FirstStep } from '../components/FirstStep';
import { SecondStep } from '../components/SecondStep';

export const Registration = () => {
   const [values, setValues] = useState({
      attendsName: {},
      companyNameOnBadge: null,
      specialAccommodations: null,
   });

   const [stepsPassed, setStepsPassed] = useState({
      first: false,
      second: false,
   });

   console.log(stepsPassed);

   return (
      <>
         <Header>Seminar Registration</Header>
         <Grid spacing={5} container flex>
            <Grid flex={1} item>
               <FirstStep
                  stepsPassed={stepsPassed}
                  setStepsPassed={setStepsPassed}
                  values={values}
                  setValues={setValues}
               />
            </Grid>
            <Grid
               style={{
                  zIndex: stepsPassed.first ? 1 : -1,
                  opacity: stepsPassed.first ? 1 : 0.4,
               }}
               flex={1}
               item>
               <SecondStep
                  stepsPassed={stepsPassed}
                  setStepsPassed={setStepsPassed}
                  values={values}
                  setValues={setValues}
               />
            </Grid>
            <Grid
               style={{
                  zIndex: stepsPassed.second ? 1 : -1,
                  opacity: stepsPassed.second ? 1 : 0.4,
               }}
               flex={1}
               item>
               <FinalStep values={values} />
            </Grid>
         </Grid>
      </>
   );
};

const Header = styled.h1``;
