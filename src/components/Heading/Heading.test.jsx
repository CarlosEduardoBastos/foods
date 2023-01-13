import { screen } from '@testing-library/react';
import { Heading } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.xxlarge,
    });
  });

  it('should render correct heading sizes', () => {
    renderTheme(<Heading size="small">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.xsmall,
    });
  });

  it('should render with size big', () => {
    renderTheme(<Heading size="big">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.xxlarge,
    });
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Heading size="big">texto</Heading>);
    expect(container).toMatchSnapshot();
  });
});