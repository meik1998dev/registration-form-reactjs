import { Box } from '@mui/material';
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import successVector from '../success-svgrepo-com.svg';
import styled from '@emotion/styled';

export const SuccessSvg = ({ show }) => {
   return (
      <CSSTransition in={show} timeout={1000} classNames='my-node'>
         <Box display='flex' justifyContent={'center'}>
            {show && <Image src={successVector} />}
         </Box>
      </CSSTransition>
   );
};

const Image = styled.img`
   width: 200px;
   margin: 64px;
`;