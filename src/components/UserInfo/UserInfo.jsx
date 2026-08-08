import styles from './UserInfo.module.css';

import Icon from '@/assets/Icon.png';

function UserInfo({ username, date, image }) {
  return (
    <div className={styles.userInfo}>
      <img
        className={styles.avatar}
        src={image || Icon}
        alt={username}
        onError={(e) => {
          e.target.src = Icon;
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
