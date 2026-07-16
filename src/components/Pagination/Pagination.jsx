import styles from './Pagination.module.css';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = [];

  for (let i = 1; i <= totalPages; i += 1) {
    pages.push(i);
  }

  return (
    <div className={styles.pagination}>
      {pages.map((page) => (
        <button
          key={page}
          className={
            page === currentPage
              ? `${styles.page} ${styles.active}`
              : styles.page
          }
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
