import PropTypes from 'prop-types';
import {
  StatContainer,
  StatTitle,
  StatsList,
  StatsItem,
  StatsLabel,
  StatsPercentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatContainer>
      {title && <StatTitle>{title}</StatTitle>}
      <StatsList>
        {stats.map(stat => (
          <StatsItem key={stat.id}>
            <StatsLabel className="label">{stat.label}</StatsLabel>
            <StatsPercentage className="percentage">
              {stat.percentage}%
            </StatsPercentage>
          </StatsItem>
        ))}
      </StatsList>
    </StatContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
