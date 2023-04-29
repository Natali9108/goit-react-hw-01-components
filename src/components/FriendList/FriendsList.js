import PropTypes from 'prop-types';
import { FriendItem } from './FriendItem';
import { List } from './FrendsList.styled';

export const FrendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => (
        <FriendItem
          key={friend.id}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
        />
      ))}
    </List>
  );
};

FrendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
