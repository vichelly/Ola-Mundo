import styles from './Rodape.module.css';
import { ReactComponent as MarcaRegistrada } from 'assets/instagram.svg';

export default function Rodape() {
  return (
    <footer className={styles.rodape} >
        <a target="_blank" href='https://www.instagram.com/vichelly_/'> Instagram</a>
        <div></div>
        <div>/</div>
        <div></div>
        <a target="_blank" href="https://www.linkedin.com/in/vitor-lucas-fujita-fel%C3%ADcio-50a30622a/" >Linkedin</a>
    </footer>
  )
}
