import PropTypes from 'prop-types';

import style from './FriendList.module.css';

export const FriendList = ({ friends }) => {
    return (
        <ul className={style.friendList}>
            {friends.map(friend => (
                <li className={style.item} key={friend.id}>
                    <span className={friend.isOnline ? style.online : style.offline}></span>
                    <img className={style.avatar} src={friend.avatar} alt="User avatar" width="48" />
                    <p className={style.name}>{friend.name}</p>
                </li>
            ))}
        </ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    ).isRequired,
};