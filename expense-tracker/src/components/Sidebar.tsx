'use client';

import { Flex, Text, Stack, UnstyledButton, Group, Box } from '@mantine/core';
import {
  IconLayoutDashboard,
  IconReceipt2,
  IconChartPie,
  IconWallet,
  IconHelp,
  IconLogout,
} from '@tabler/icons-react';
import { usePathname } from 'next/navigation';

const mainLinks = [
  { icon: IconLayoutDashboard, label: 'DASHBOARD', path: '/' },
  { icon: IconReceipt2, label: 'TRANSACTIONS', path: '/transactions' },
  { icon: IconChartPie, label: 'ANALYTICS', path: '/analytics' },
  { icon: IconWallet, label: 'BUDGETS', path: '/budgets' },
];

const bottomLinks = [
  { icon: IconHelp, label: 'HELP' },
  { icon: IconLogout, label: 'LOGOUT' },
];

interface SidebarContentProps {
  onNavigate: (path: string) => void;
}

export function SidebarContent({ onNavigate }: SidebarContentProps) {
  const pathname = usePathname();

  return (
    <Flex
      direction="column"
      h="100%"
      p="xl"
      style={{
        transition: 'background-color 0.2s ease',
      }}
    >
      <Box mb={50}>
        <Text fw={800} size="xl" style={{ letterSpacing: '-0.5px', color: 'var(--text-main)' }}>
          ExpensePro
        </Text>
        <Text size="xs" style={{ letterSpacing: '1px', color: 'var(--text-dimmed)' }}>
          WEALTH MANAGEMENT
        </Text>
      </Box>

      <Stack gap="xs" flex={1}>
        {mainLinks.map((link) => {
          const isActive = pathname === link.path;
          return (
            <UnstyledButton
              key={link.label}
              onClick={() => onNavigate(link.path)}
              style={{
                padding: '10px 16px',
                borderRadius: '8px',
                backgroundColor: isActive ? 'var(--btn-active-bg)' : 'transparent',
                transition: 'background-color 0.2s ease',
              }}
            >
              <Group gap="md">
                <link.icon
                  size={20}
                  stroke={1.5}
                  color={isActive ? 'var(--text-main)' : 'var(--text-dimmed)'}
                />
                <Text
                  size="sm"
                  fw={600}
                  style={{
                    letterSpacing: '0.5px',
                    color: isActive ? 'var(--text-main)' : 'var(--text-dimmed)',
                  }}
                >
                  {link.label}
                </Text>
              </Group>
            </UnstyledButton>
          );
        })}
      </Stack>

      <Stack gap="xs">
        {bottomLinks.map((link) => (
          <UnstyledButton
            key={link.label}
            style={{
              padding: '10px 16px',
              borderRadius: '8px',
            }}
          >
            <Group gap="md">
              <link.icon size={20} stroke={1.5} color="var(--text-dimmed)" />
              <Text
                size="sm"
                fw={600}
                style={{ letterSpacing: '0.5px', color: 'var(--text-dimmed)' }}
              >
                {link.label}
              </Text>
            </Group>
          </UnstyledButton>
        ))}
      </Stack>
    </Flex>
  );
}
