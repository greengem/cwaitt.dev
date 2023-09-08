// pages/404.js

import Link from 'next/link'
import { useRouter } from 'next/router'
//import styles from './404.module.css'  // If you want to add styles

export default function Custom404() {
  const router = useRouter();

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page <code>{router.asPath}</code> does not exist.</p>
      <Link href="/">
        Go back home
      </Link>
    </div>
  )
}
