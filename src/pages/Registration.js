import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import React from 'react';
import { FirstStep } from '../components/FirstStep';
import { StepCard } from '../components/StepCard';

export const Registration = () => {
   const [values, setValues] = React.useState({
      atterndesName: [{ 1: '' }],
      companyBadge: null,
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
               <StepCard number={2} color={'#58355E'}></StepCard>
            </Grid>
            <Grid flex={1} item>
               <StepCard number={3} color={'#EC0B43'}></StepCard>
            </Grid>
         </Grid>
      </>
   );
};

const Header = styled.h1``;
