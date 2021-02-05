import React, { ReactElement } from 'react';
import styled from 'styled-components';

export interface IImage extends React.ImgHTMLAttributes<HTMLImageElement> {}

export const Image: React.FC<IImage> = (
  {
    ...props
  },
): ReactElement => (
  <SImage {...props} />
);

const SImage = styled.img`
  object-fit: cover;
  width: 100%;
`;
