import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import React from 'react';
import { FinalStep } from '../components/FinalStep';
import { FirstStep } from '../components/FirstStep';
import { SecondStep } from '../components/SecondStep';
import { StepCard } from '../components/StepCard';

export const Registration = () => {
   const [values, setValues] = React.useState({
      attendsName: {},
      companyNameOnBadge: null,
      specialAccommodations: null,
   });

   console.log(values);

   return (
      <>
         <Header>Seminar Registration</Header>
         <Grid spacing={5} container flex>
            <Grid flex={1} item>
               <FirstStep values={values} setValues={setValues} />
            </Grid>
            <Grid flex={1} item>
               <SecondStep values={values} setValues={setValues} />
            </Grid>
            <Grid flex={1} item>
               <FinalStep values={values} />
            </Grid>
         </Grid>
      </>
   );
};

const Header = styled.h1``;
