import { Box } from '@mui/material';
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import successVector from '../success-svgrepo-com.svg';
import styled from '@emotion/styled';

export const SuccessSvg = ({ show }) => {
   const nodeRef = React.useRef(null);

   return (
      <CSSTransition
         nodeRef={nodeRef}
         in={show}
         timeout={1000}
         classNames='my-node'>
         <Box ref={nodeRef} display='flex' justifyContent={'center'}>
            {show && <Image src={successVector} />}
         </Box>
      </CSSTransition>
   );
};

const Image = styled.img`
   width: 15rem;
   margin: 64px;
`;
