import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      theme={{
        fontFamily: 'serif',
        colorScheme: 'dark',
        fontSizes: {
          md: 12,
        },
        loader: 'dots',
        radius: {
          sm: 15,
        },
        colors: {
          blue: [
            '#7958f2',
            '#364fc7',
            '#99e9f2',
            '#fd7e14',
            '#f59f00',
            '#5c940d',
            '#12b886',
            '#4c6ef5',
            '#ae3ec9',
            '#f03e3e',
          ],
        },
      }}
      // styles={{
      //   Button: (theme) => {
      //     root: {
      //       backgroundColor: theme.colors.blue[1];
      //     }
      //   },
      // }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
