import styles from '../About.module.css';

const Page = () => {
  return (
    <div className={styles.about}>
      <div className={styles.introduction}>
        <h2 className={styles.about__subheader}>Hi 👋</h2>
        <p className={styles.about__paragraph}>
          My name is Javid. I’m a frontend developer <br /> based in Baku,
          Azerbaijan.
        </p>
      </div>

      <div className={styles.expl}>
        <h2 className={styles.about__subheader}>Why does this blog exist?</h2>
        <p className={styles.about__paragraph}>
          I like to explain things in simple words. It motivates me to learn
          stuff <br />
          rather than make myself acquaintaned with it.
        </p>
      </div>

      <div className={styles.love}>
        <h2 className={styles.about__subheader}>I love</h2>
        <p className={styles.about__paragraph}>
          Literature, music, philosophy, films, playing basketball.
        </p>
      </div>

      <div className={styles.cv}>
        <p className={styles.about__paragraph}>
          You can see my{' '}
          <a className={styles.cv__link} href="#">
            CV here
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Page;
