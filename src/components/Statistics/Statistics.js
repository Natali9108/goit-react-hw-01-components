import PropTypes from 'prop-types';
import { Title } from './Statistics.styled';

export const Section = ({ title, children }) => {
  return (
    <section className="statistics">
      {title && <Title>{title}</Title>}
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};
