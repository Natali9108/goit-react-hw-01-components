import PropTypes from 'prop-types';
import { StatContainer, StatTitle } from './Statistics.styled';

export const Section = ({ title, children }) => {
  return (
    <StatContainer className="statistics">
      {title && <StatTitle>{title}</StatTitle>}
      {children}
    </StatContainer>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};
