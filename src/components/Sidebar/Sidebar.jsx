import Tag from '@/components/Tag/Tag';
import styles from './Sidebar.module.css';

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <h3>Popular tags</h3>

      <div className={styles.tags}>
        <Tag>react</Tag>
        <Tag>javascript</Tag>
        <Tag>frontend</Tag>
        <Tag>css</Tag>
      </div>
    </aside>
  );
}

export default Sidebar;
