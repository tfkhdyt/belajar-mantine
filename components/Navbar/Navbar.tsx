import { Navbar, Text } from '@mantine/core'
import fs from 'fs'
import path from 'path'

export async function getStaticProps() {
  const pagesDirectory = path.join(process.cwd(), 'pages')
  const pages = fs.readdirSync(pagesDirectory)
  console.log(pages)

  return {
    props: {
      pages,
    },
  }
}

export default function MyNavbar({ opened }: { opened: boolean }) {
  return (
    <Navbar
      p='md'
      hiddenBreakpoint='sm'
      hidden={!opened}
      width={{ sm: 200, lg: 300 }}
    >
      <Text>Belajar Mantine</Text>
      <Text>Belajar Mantine</Text>
      <Text>Belajar Mantine</Text>
    </Navbar>
  )
}
