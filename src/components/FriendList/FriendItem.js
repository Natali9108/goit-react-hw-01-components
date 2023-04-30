import PropTypes from 'prop-types';
import { FriendBox, FriendStatus, FriendName } from './FriendItem.styled';

export const FriendItem = ({ isOnline, avatar, name }) => {
  return (
    <FriendBox>
      <FriendStatus>{isOnline}</FriendStatus>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </FriendBox>
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
