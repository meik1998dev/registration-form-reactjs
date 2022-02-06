import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import React from 'react';
import { StepCard } from '../components/StepCard';

export const Registration = () => {
   return (
      <>
         <Header>Seminar Registration</Header>
         <Grid spacing={3} container flex>
            <Grid flex={1} item>
               <StepCard number={1} color={'#7AE7C7'}>
                  sdfsdfsdf
               </StepCard>
            </Grid>
            <Grid flex={1} item>
               <StepCard number={2} color={'#58355E'}>
                  sdfsdfsdf
               </StepCard>
            </Grid>
            <Grid flex={1} item>
               <StepCard number={3} color={'#EC0B43'}>
                  sdfsdfsdf
               </StepCard>
            </Grid>
         </Grid>
      </>
   );
};

const Header = styled.h1``;
