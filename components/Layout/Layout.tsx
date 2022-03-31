import React, { ReactNode, useState } from 'react'
import { AppShell, useMantineTheme } from '@mantine/core'
import MyNavbar from '../Navbar/Navbar'
import MyFooter from '../Footer/Footer'
import MyHeader from '../Header/Header'

export default function AppShellDemo({ children }: { children: ReactNode }) {
  const theme = useMantineTheme()
  const [opened, setOpened] = useState(false)
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint='sm'
      asideOffsetBreakpoint='sm'
      fixed
      navbar={<MyNavbar opened={opened} />}
      // aside={
      //   <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
      //     <Aside p='md' hiddenBreakpoint='sm' width={{ sm: 200, lg: 300 }}>
      //       <Text>Application sidebar</Text>
      //     </Aside>
      //   </MediaQuery>
      // }
      footer={<MyFooter />}
      header={<MyHeader opened={opened} setOpened={setOpened} />}
    >
      {children}
    </AppShell>
  )
}
