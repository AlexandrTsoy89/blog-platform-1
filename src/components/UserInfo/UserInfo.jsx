import styles from './UserInfo.module.css';

import icon from '@/assets/icon.png';

function UserInfo({ username, date, image }) {
  return (
    <div className={styles.userInfo}>
      <img
        className={styles.avatar}
        src={image || icon}
        alt={username}
        onError={(e) => {
          e.target.src = icon;
        }}
      />

      <div>
        <p className={styles.username}>{username}</p>

        <span className={styles.date}>{date}</span>
      </div>
    </div>
  );
}

export default UserInfo;
