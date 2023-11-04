import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss'
import Head from "next/head";
import {useState} from "react";

const Header = () => {
    const [theme, setTheme] = useState<boolean>(true)
    return (
        <div className={styles.header}>
            <Head>
                    <style>{`
                    #__next {
                      background-color: ${theme ? 'black': 'white'};
                      color: ${theme ? 'white': 'black'}
                            }
                         select {
                         background: ${theme ? 'black': 'white'};
                         }
                         `}
                    </style>
            </Head>
            <Link href="/">

                    <Image src="/logo.png" width={64} height={64} alt="Logo" />
            </Link>

            <button >
                <div onClick={() => setTheme(!theme)}>
                    {
                        theme ?
                        <Image className={styles.theme} src={'/light.png'} width={20} height={20} alt="theme" />
                        :
                        <Image className={styles.theme} src={'/dark.png'} width={20} height={20} alt="theme" />
                        }

                </div>
            </button>
        </div>
    );
}

export default Header;
