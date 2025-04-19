import styles from './SkipLinks.module.scss';

export default function SkipLinks () {
  return (
    <nav className={styles.skipLinks} aria-label="Skip links">
      <a href="#main-content" className={styles.skipLink}>Skip to main content</a>
      <a href="#menu" className={styles.skipLink}>Skip to menu</a>
      <a href="#footer" className={styles.skipLink}>Skip to footer</a>
    </nav>
  )
}
