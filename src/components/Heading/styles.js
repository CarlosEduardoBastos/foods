import styled, { css } from 'styled-components';

const titleSize = {
  small: (theme) => css`
    font-size: ${theme.fonts.sizes.xsmall};
  `,
  medium: (theme) => css`
    font-size: ${theme.fonts.sizes.medium};
  `,
  big: (theme) => css`
    font-size: ${theme.fonts.sizes.xxlarge};
    ${mediaFont(theme)}
  `,
};

const mediaFont = (theme) => css`
  @media (max-width: 1039px) {
    font-size: ${theme.fonts.sizes.large};
  }
`;

export const Container = styled.h1`
  ${({ theme, size }) => css`
    color: ${theme.colors.secondaryColor};
    font-weight: bold;
    ${titleSize[size](theme)}
  `}
`;
