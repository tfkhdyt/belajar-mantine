import type { NextPage } from 'next';
import { Button, Loader, MantineProvider, Paper, Text } from '@mantine/core';
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Paper>
        <Text>Nama saya Taufik Hidayat</Text>
        <Text>Nama saya Muhammad Fauzi Fathirohman</Text>
      </Paper>
      <Button>Hello world!</Button>
      <Button>Halo dunia!</Button>
      <MantineProvider theme={{ fontFamily: 'Greycliff CF, sans-serif' }}>
        <Button>Greycliff CF Button</Button>
      </MantineProvider>
      <Loader />
    </>
  );
};

export default Home;
