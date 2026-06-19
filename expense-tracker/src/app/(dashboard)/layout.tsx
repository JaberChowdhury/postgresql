'use client';

import { AppShell, Burger, Group, Text, ActionIcon, Avatar, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useMantineColorScheme } from '@mantine/core';
import { IconBell, IconSettings, IconSun, IconMoon, IconCoin } from '@tabler/icons-react';
import { SidebarContent } from '@/components/Sidebar';
import { SettingsModal } from '@/components/SettingsModal';
import { AnimatedPage } from '@/components/Animations';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Loading context so Sidebar can trigger it
const LoadingContext = createContext<{
  handleNavigate: (path: string) => void;
}>({ handleNavigate: () => {} });

export function useNavigation() {
  return useContext(LoadingContext);
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [openedSettings, { open: openSettings, close: closeSettings }] = useDisclosure(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  const handleNavigate = (path: string) => {
    if (pathname === path) return;
    close();
    setIsLoading(true);
    router.push(path);
    setTimeout(() => setIsLoading(false), 500);
  };

  const navItems = [
    { label: 'DASHBOARD', path: '/' },
    { label: 'TRANSACTIONS', path: '/transactions' },
    { label: 'ANALYTICS', path: '/analytics' },
    { label: 'BUDGETS', path: '/budgets' },
  ];

  return (
    <LoadingContext.Provider value={{ handleNavigate }}>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 260,
          breakpoint: 'md',
          collapsed: { mobile: !opened },
        }}
        padding="xl"
        styles={{
          main: {
            backgroundColor: 'var(--bg-main)',
            transition: 'background-color 0.2s ease',
          },
          header: {
            backgroundColor: 'var(--bg-main)',
            borderBottom: '1px solid var(--border-subtle)',
            transition: 'background-color 0.2s ease, border-color 0.2s ease',
          },
          navbar: {
            backgroundColor: 'var(--bg-sidebar)',
            borderRight: 'none',
            transition: 'background-color 0.2s ease',
          },
        }}
      >
        <AppShell.Header px={{ base: 'md', md: 'xl' }}>
          <Group justify="space-between" h="100%">
            <Group>
              <Burger
                opened={opened}
                onClick={toggle}
                hiddenFrom="md"
                size="sm"
                color="var(--text-main)"
              />
              <Group gap={40} display={{ base: 'none', md: 'flex' }}>
                {navItems.map((item) => {
                  const isActive = pathname === item.path;
                  return (
                    <Text
                      key={item.label}
                      size="xs"
                      fw={700}
                      onClick={() => handleNavigate(item.path)}
                      style={{
                        letterSpacing: '1px',
                        cursor: 'pointer',
                        borderBottom: isActive
                          ? '2px solid var(--text-main)'
                          : '2px solid transparent',
                        paddingBottom: 4,
                        color: isActive ? 'var(--text-main)' : 'var(--text-dimmed)',
                        transition: 'color 0.2s ease, border-color 0.2s ease',
                      }}
                    >
                      {item.label}
                    </Text>
                  );
                })}
              </Group>
            </Group>

            <Group gap="md">
              <ActionIcon
                variant="transparent"
                style={{ color: 'var(--text-main)' }}
                onClick={() => toggleColorScheme()}
              >
                {mounted ? (
                  dark ? (
                    <IconSun size={20} stroke={1.5} />
                  ) : (
                    <IconMoon size={20} stroke={1.5} />
                  )
                ) : (
                  <IconSun size={20} stroke={1.5} style={{ opacity: 0 }} />
                )}
              </ActionIcon>
              <ActionIcon variant="transparent" style={{ color: 'var(--text-main)' }}>
                <IconBell size={20} stroke={1.5} />
              </ActionIcon>
              <ActionIcon
                variant="transparent"
                style={{ color: 'var(--text-main)' }}
                display={{ base: 'none', sm: 'block' }}
                onClick={openSettings}
              >
                <IconSettings size={20} stroke={1.5} />
              </ActionIcon>
              {mounted && (
                <Avatar
                  radius="xl"
                  size="sm"
                  src={`https://ui-avatars.com/api/?name=Jaber+C&background=${dark ? 'fff' : '1c1c1a'}&color=${dark ? '1c1c1a' : 'fff'}`}
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleNavigate('/profile')}
                />
              )}
              {!mounted && <Avatar radius="xl" size="sm" />}
            </Group>
          </Group>
        </AppShell.Header>

        <AppShell.Navbar>
          <SidebarContent onNavigate={handleNavigate} />
        </AppShell.Navbar>

        <AppShell.Main>
          {/* Physical preloader that pushes content down */}
          <AnimatePresence>
            {isLoading && (
              <motion.div
                initial={{ height: 0, opacity: 0, scale: 0.95 }}
                animate={{ height: 56, opacity: 1, scale: 1 }}
                exit={{ height: 0, opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                style={{ overflow: 'hidden', marginBottom: 16 }}
              >
                <Box
                  style={{
                    height: 56,
                    backgroundColor: 'var(--bg-sidebar)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 12,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 14,
                    position: 'relative',
                  }}
                >
                  <motion.div
                    animate={{ 
                      rotateY: [0, 180, 360],
                      y: [0, -6, 0]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 1.2, 
                      ease: "easeInOut" 
                    }}
                    style={{ 
                      display: 'flex', 
                      color: 'var(--text-main)', 
                      perspective: 1000 
                    }}
                  >
                    <IconCoin size={24} stroke={1.5} />
                  </motion.div>
                  <Text
                    size="xs"
                    fw={700}
                    style={{ color: 'var(--text-main)', letterSpacing: '2px', zIndex: 1 }}
                  >
                    SYNCING LEDGER...
                  </Text>

                  {/* Elegant sweeping gradient effect */}
                  <motion.div
                    animate={{ x: ['-200%', '200%'] }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '50%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(128,128,128,0.05), transparent)',
                      transform: 'skewX(-20deg)',
                      pointerEvents: 'none',
                    }}
                  />
                </Box>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Page content with transition animation */}
          <AnimatedPage>{children}</AnimatedPage>
        </AppShell.Main>
      </AppShell>

      <SettingsModal opened={openedSettings} onClose={closeSettings} />
    </LoadingContext.Provider>
  );
}
