import PropTypes from "prop-types";
import css from "./FriendList.module.css";

export const FriendList = ({ friends }) => (
    <ul className={css.friendList}>
      {friends.map(({ id, name, avatar, isOnline }) => (
          <FriendListItem
              key={id}
              avatar={avatar}
              name={name}
              isOnline={isOnline}
          />
      ))}
    </ul>
);

const FriendListItem = ({ isOnline, avatar, name }) => (

    <li className={css.item}>
      <span className={isOnline ? css.true : css.false}></span>
      <img src={avatar} alt="User avatar" width={48} />
      <p className={css.name}>{name}</p>
    </li>

);

FriendList.propTypes = {
  friends: PropTypes.array,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};