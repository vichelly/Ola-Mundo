import { Link, useLocation } from 'react-router-dom';
import MenuLink from '../MenuLink';
import styles from './Menu.module.css';

export default function Menu() {

  return (
    <header>
        <nav className={styles.navegacao} >
            {/* no lugar de <a></a> de a usar Link
            no link usar to='' ao invés de href */}
            <MenuLink to="/" >
                Início
            </MenuLink>
            <MenuLink to="/sobremim" >
                Sobre mim
            </MenuLink>
        </nav>
    </header>
  )
}
