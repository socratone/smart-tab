import Head from 'next/head';
import Header from '../components/header';
import Main from '../components/main';
import Nav from '../components/nav';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Smart Tab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>
        <Nav />
      </Header>

      <Main>
        <p>hello world</p>
      </Main>
    </div>
  );
}
