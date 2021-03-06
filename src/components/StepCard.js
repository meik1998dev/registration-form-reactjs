import styled from '@emotion/styled';
import React from 'react';

export const StepCard = ({ color, children, number }) => {
   return (
      <Card>
         <CardHeader color={color}>Step {number}</CardHeader>
         {children}
      </Card>
   );
};

const Card = styled.div`
   border-radius: 20px;
   background: #ffffff;
   box-shadow: 5px 5px 13px #d1d1d1, -5px -5px 13px #ffffff;
   padding: 1em;
   min-width: 25rem;
   margin-bottom: 2.5em;
`;

const CardHeader = styled.h3`
   margin-top: -2rem;
   background-color: ${(props) => props.color};
   color: #ffffff;
   margin-left: 15px;
   width: fit-content;
   padding: 0.5em;
   border-radius: 0.5rem;
`;
