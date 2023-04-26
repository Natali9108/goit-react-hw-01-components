import PropTypes from 'prop-types';

function FrendList({ friends }) {
  return (
    <ul>
      {friends.map(({ id, avatar, name }) => (
        <li className="item" key={id}>
          <span className="status"></span>
          <img className="avatar" src={avatar} alt={name} width="48" />
          <p className="name">{name}</p>
        </li>
      ))}
    </ul>
  );
}

FrendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default FrendList;
