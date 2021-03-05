import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../../components/header';
import Nav from '../../components/nav';
import Main from '../../components/Main';
import getTabDataById from '../../data/getTabDataById';
import styles from '../../styles/Tab.module.scss';
import Bar from '../../components/Bar';

const Tab = () => {
  const router = useRouter();
  const { id } = router.query;
  const data = getTabDataById(id);

  console.log('data:', data)

  if (!data) return null;

  return (
    <div>
      <Head>

      </Head>

      <Header>
        <Nav />
      </Header>
      
      <Main>
        <h1 className={styles.title}>{data.title}</h1>
        <section className={styles.barContainer}>
          {data.bars.map((bar, i) => <Bar key={i} bar={bar} />)}
        </section>
      </Main>
    </div>
  );
};

export default Tab;
