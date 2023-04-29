import PropTypes from 'prop-types';
import { Item, Status, Name } from './FrendItem.styled';

export const FriendItem = ({ isOnline, avatar, name }) => {
  return (
    <Item className="item">
      <Status>{isOnline}</Status>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
