import P from 'prop-types';
import * as Styled from './styles';

export const Heading = ({children, as = "h2", size = "big"}) => {
  return (
    <Styled.Container as={as} size={size}>
      {children}
    </Styled.Container>
  );
};

Heading.propTypes = {
  children: P.string.isRequired,
  as: P.oneOf(['h1','h2','h3','h4','h5']),
  size: P.oneOf(['small', 'medium', 'big']),
};
