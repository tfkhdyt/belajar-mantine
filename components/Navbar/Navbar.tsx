import { Navbar, Text } from '@mantine/core'
import Link from 'next/link'
import data from './data'

export default function MyNavbar({ opened }: { opened: boolean }) {
  return (
    <Navbar
      p='md'
      hiddenBreakpoint='sm'
      hidden={!opened}
      width={{ sm: 200, lg: 300 }}
    >
      {data &&
        data.menu.map((menu, index) => (
          <Link href={`${menu.replaceAll(' ', '-').toLowerCase()}`} key={index}>
            <Text component='a'>{menu}</Text>
          </Link>
        ))}
    </Navbar>
  )
}
