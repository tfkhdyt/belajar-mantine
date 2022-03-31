import {
  Header,
  MediaQuery,
  Burger,
  Text,
  useMantineTheme,
} from '@mantine/core'
import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'

export default function MyHeader({
  opened,
  setOpened,
}: {
  opened: boolean
  setOpened: Dispatch<SetStateAction<boolean>>
}) {
  const theme = useMantineTheme()
  return (
    <Header height={70} p='md'>
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size='sm'
            color={theme.colors.gray[6]}
            mr='xl'
          />
        </MediaQuery>
        <Link href='/' passHref>
          <Text component='a'>Belajar Mantine</Text>
        </Link>
      </div>
    </Header>
  )
}
