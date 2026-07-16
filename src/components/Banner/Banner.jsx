import styles from './Banner.module.css';

function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <h1>Realworld Blog</h1>

        <p>A place to share your knowledge.</p>
      </div>
    </section>
  );
}

export default Banner;
