import PropTypes from 'prop-types';
import { List, Item } from './StatList.styled';

export const StatList = ({ items }) => {
  return (
    <List>
      {items.map(item => (
        <Item key={item.id}>
          <span className="label">{item.label}</span>
          <span className="percentage">{item.percentage}</span>
        </Item>
      ))}
    </List>
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
