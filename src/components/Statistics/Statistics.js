import PropTypes from 'prop-types';
import { Container, Title } from './Statistics.styled';

export const Section = ({ title, children }) => {
  return (
    <Container className="statistics">
      {title && <Title>{title}</Title>}
      {children}
    </Container>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};
