import PropTypes from 'prop-types';
import { FriendItem } from './FriendItem';

export const FrendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <FriendItem key={friend.id} avatar={friend.avatar} name={friend.name} />
      ))}
    </ul>
  );
};

FrendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
