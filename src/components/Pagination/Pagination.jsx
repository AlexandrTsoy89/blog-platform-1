import styles from './Pagination.module.css';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const groupSize = 10;

  const currentGroup = Math.ceil(currentPage / groupSize);

  const startPage = (currentGroup - 1) * groupSize + 1;
  const endPage = Math.min(startPage + groupSize - 1, totalPages);

  const pages = [];

  for (let i = startPage; i <= endPage; i += 1) {
    pages.push(i);
  }

  const hasPrevGroup = startPage > 1;
  const hasNextGroup = endPage < totalPages;

  const goToPrevGroup = () => {
    if (hasPrevGroup) {
      onPageChange(startPage - groupSize);
    }
  };

  const goToNextGroup = () => {
    if (hasNextGroup) {
      onPageChange(endPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className={styles.pagination}>
      <button
        className={styles.page}
        onClick={goToPrevGroup}
        disabled={!hasPrevGroup}
      >
        {'<<'}
      </button>

      <button
        className={styles.page}
        onClick={goToPrevPage}
        disabled={currentPage === 1}
      >
        {'<'}
      </button>

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

      <button
        className={styles.page}
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
      >
        {'>'}
      </button>

      <button
        className={styles.page}
        onClick={goToNextGroup}
        disabled={!hasNextGroup}
      >
        {'>>'}
      </button>
    </div>
  );
}

export default Pagination;
