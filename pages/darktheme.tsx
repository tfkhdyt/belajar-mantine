import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  Paper,
} from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import Cards from '../components/Cards';
import LightDarkButton from '../components/LightDarkButton';

const DarkTheme = () => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['ctrl+J', () => toggleColorScheme()]]);
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider theme={{ colorScheme }}>
        <Paper style={{ padding: '4rem', minHeight: '100vh' }} radius={0}>
          <LightDarkButton />
          <Cards />
        </Paper>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default DarkTheme;
