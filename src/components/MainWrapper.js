'use client';
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 16px 24px;
  margin: 0px auto;
  border: 1px solid hsl(0deg 0% 50% / 0.3);
  border-radius: 2px;
  background: white;
  filter:invert();
`;
export default function MainWrapper({ children }) {
  return <Div>{children}</Div>;
}