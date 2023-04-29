import PropTypes from 'prop-types';
import { List, Item, Label, Percentage } from './StatList.styled';

export const StatList = ({ items }) => {
  return (
    <List>
      {items.map(item => (
        <Item key={item.id}>
          <Label className="label">{item.label}</Label>
          <Percentage className="percentage">{item.percentage}%</Percentage>
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
