import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__container} container`}>
        
        <p className={styles.footer__copy}>
          © {new Date().getFullYear()} Mesh Gawar. All rights reserved.
        </p>

      </div>
    </footer>
  );
}