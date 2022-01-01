import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
//hook
import { useSnipcart } from 'use-snipcart';

import Container from '@components/Container';

import styles from './Header.module.scss';

const Header = () => {
  const { cart = {} } = useSnipcart();
  const { subtotal = 0 } = cart;
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <p className={styles.headerTitle}>
          <Link href="/">
            <a>Okobogee Store</a>
          </Link>
        </p>
        <p className={styles.headerCart}>
          <button className="snipcart-checkout">
            <FaShoppingCart />
            <span>
              ${ subtotal.toFixed(2) }
            </span>
          </button>
        </p>
      </Container>
    </header>
  )
}

export default Header;