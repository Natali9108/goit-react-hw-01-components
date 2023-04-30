import PropTypes from 'prop-types';
import {
  StatsList,
  StatsItem,
  StatsLabel,
  StatsPercentage,
} from './StatList.styled';

export const StatList = ({ items }) => {
  return (
    <StatsList>
      {items.map(item => (
        <StatsItem key={item.id}>
          <StatsLabel className="label">{item.label}</StatsLabel>
          <StatsPercentage className="percentage">
            {item.percentage}%
          </StatsPercentage>
        </StatsItem>
      ))}
    </StatsList>
  );
};

StatList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
