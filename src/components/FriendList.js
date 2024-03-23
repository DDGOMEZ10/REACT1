import PropTypes from 'prop-types';



// Componente para mostrar información de amigos
const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline, id } = friend;

  return (
    <li key={id} className={`friend-item ${isOnline ? 'online' : 'offline'}`}>
       {isOnline ? <span className="status online-now"></span> : <span className="status offline-now"></span>}
      <img src={avatar} alt={`Avatar de ${name}`} />
      <span className='name'>{name}</span>
     
    </li>
  );
};

// Define PropTypes para FriendListItem
FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

// Componente FriendList
const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map((friend) => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};

// Define PropTypes para FriendList
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;
