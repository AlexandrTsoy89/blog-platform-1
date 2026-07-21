import styles from './UserInfo.module.css';
import defaultAvatar from '@/assets/default-avatar.png';

function UserInfo({ username, date, image }) {
  return (
    <div className={styles.userInfo}>
      <img
        className={styles.avatar}
        src={image || defaultAvatar}
        alt={username}
      />

      <div>
        <p className={styles.username}>{username}</p>

        <span className={styles.date}>{date}</span>
      </div>
    </div>
  );
}

export default UserInfo;
