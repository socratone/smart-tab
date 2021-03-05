import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import Header from '../../components/header';
import Nav from '../../components/nav';
import Main from '../../components/main';
import styles from '../../styles/tabList.module.scss';
import tabDatas from '../../data/tabDatas';

const TabList = () => {
  const router = useRouter();
  const { tabId } = router.query;

  return (
    <div>
      <Head>

      </Head>

      <Header>
        <Nav />
      </Header>
      
      <Main>
        <ul>
          {tabDatas.map(data => 
            <li key={data.id} className={styles.tab__li}>
              <Link href={`/tab/${data.id}`}>
                <a>{data.artist + ' - ' + data.title}</a>
              </Link>
            </li>
          )}
        </ul>
      </Main>
    </div>
  );
};

export default TabList;
