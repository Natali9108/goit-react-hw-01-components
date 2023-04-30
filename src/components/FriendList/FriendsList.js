import PropTypes from 'prop-types';
import { FriendItem } from './FriendItem';
import { FriendsList } from './FriendsList.styled';

export const FrendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(friend => (
        <FriendItem
          key={friend.id}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
        />
      ))}
    </FriendsList>
  );
};

FrendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
