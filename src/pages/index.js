import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { FaShoppingCart } from 'react-icons/fa';

import Layout from '@components/Layout';
import Container from '@components/Container';
import Button from '@components/Button';

import products from '@data/products.json';

import styles from '@styles/Home.module.scss'

export default function Home() {

  const api_key = process.env.NEXT_SNIPCART_PUBLIC_KEY;
  console.log(api_key);
  // function handleOnSearch() {
  //   // Do something here
  // }
  return (
    <Layout>
      <Head>
        <title>Okobogee Store</title>
        <meta name="description" content="Your favorite geek stuff delivered!" />
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.3.0/default/snipcart.css" />
      </Head>

      <Container>
        <h1 className="sr-only">Okobogee Store</h1>

        {/* <div className={styles.discover}>
          <div className={styles.search}>
            <h2>Search</h2>
            <form>
              <input onChange={handleOnSearch} type="search" />
            </form>
          </div>
        </div> */}

        <p className={styles.cart}>
          <FaShoppingCart />
          <span>
            $0.00
          </span>
          <Button>View Cart</Button>
        </p>

        <h2 className="sr-only">Available Products</h2>
        <ul className={styles.products}>
          {products.map(product => {
            return (
              <li key={product.id}>
                <Link href={`/products/${product.id}`}>
                  <a>
                    <div className={styles.productImage}>
                      <Image width="864" height="1200" src={product.image} alt={product.title} />
                    </div>
                    <h3 className={styles.productTitle}>
                      { product.title }
                    </h3>
                    <p className={styles.price}>
                      ${ product.price }
                    </p>
                  </a>
                </Link>
                <p>
                  <Button>Add to Cart</Button>
                </p>
              </li>
            )
          })}
        </ul>
      </Container>
      <Script src="https://cdn.snipcart.com/themes/v3.3.0/default/snipcart.js"></Script>
      <div hidden id="snipcart" data-api-key={api_key}></div>
    </Layout>
  )
}