import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import React, { useState } from 'react';
import { FinalStep } from '../components/Steps/FinalStep';
import { FirstStep } from '../components/Steps/FirstStep';
import { SecondStep } from '../components/Steps/SecondStep';

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

   return (
      <>
         <Header>Seminar Registration</Header>
         <Grid className='grids_container' spacing={4} container flex>
            <Grid lg={4} md={12} xs={12} s={12} flex={1} item>
               <FirstStep
                  stepsPassed={stepsPassed}
                  setStepsPassed={setStepsPassed}
                  values={values}
                  setValues={setValues}
               />
            </Grid>
            <Grid
               lg={4}
               md={12}
               xs={12}
               s={12}
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
               lg={4}
               md={12}
               xs={12}
               s={12}
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

const Header = styled.h1`
   padding-left: 2rem;
`;
