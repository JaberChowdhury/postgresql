'use client';

import { Box, Card, Text, Title, Group, TextInput, ActionIcon, Select, Badge } from '@mantine/core';
import { StaggerList, StaggerItem } from '@/components/Animations';
import {
  IconSearch,
  IconFilter,
  IconDeviceDesktop,
  IconToolsKitchen2,
  IconBuildingBank,
  IconPlaneTilt,
  IconShoppingCart,
  IconCar,
} from '@tabler/icons-react';

const allTransactions = [
  {
    id: 1,
    title: 'Premium Digital Subscription',
    category: 'TECHNOLOGY',
    date: 'OCT 24, 2023',
    amount: '- $120.00',
    status: 'PENDING',
    icon: IconDeviceDesktop,
  },
  {
    id: 2,
    title: 'The Archer Bistro',
    category: 'LIFESTYLE',
    date: 'OCT 23, 2023',
    amount: '- $84.50',
    status: 'CLEARED',
    icon: IconToolsKitchen2,
  },
  {
    id: 3,
    title: 'Stock Dividend - AAPL',
    category: 'INVESTMENT',
    date: 'OCT 22, 2023',
    amount: '+ $340.25',
    status: 'CLEARED',
    icon: IconBuildingBank,
  },
  {
    id: 4,
    title: 'Lufthansa Airways',
    category: 'TRAVEL',
    date: 'OCT 20, 2023',
    amount: '- $1,240.00',
    status: 'CLEARED',
    icon: IconPlaneTilt,
  },
  {
    id: 5,
    title: 'Whole Foods Market',
    category: 'GROCERIES',
    date: 'OCT 18, 2023',
    amount: '- $145.20',
    status: 'CLEARED',
    icon: IconShoppingCart,
  },
  {
    id: 6,
    title: 'Uber Rideshare',
    category: 'TRANSPORT',
    date: 'OCT 15, 2023',
    amount: '- $32.40',
    status: 'CLEARED',
    icon: IconCar,
  },
  {
    id: 7,
    title: 'Freelance Consulting',
    category: 'INCOME',
    date: 'OCT 10, 2023',
    amount: '+ $2,500.00',
    status: 'CLEARED',
    icon: IconBuildingBank,
  },
];

export function TransactionsView() {
  return (
    <div>
      <Box mb={40}>
        <Text
          size="xs"
          fw={700}
          style={{ letterSpacing: '1px', color: 'var(--text-dimmed)' }}
          mb={8}
        >
          FULL HISTORY
        </Text>
        <Title
          order={1}
          style={{
            fontSize: '3.5rem',
            fontWeight: 600,
            letterSpacing: '-1.5px',
            color: 'var(--text-main)',
          }}
        >
          Transactions
        </Title>
      </Box>

      <Card padding="xl" radius="lg" style={{ backgroundColor: 'var(--bg-card)', border: 'none' }}>
        <Group justify="space-between" mb="xl">
          <TextInput
            placeholder="Search transactions..."
            leftSection={<IconSearch size={16} stroke={1.5} />}
            styles={{
              input: {
                backgroundColor: 'var(--bg-main)',
                color: 'var(--text-main)',
                borderColor: 'var(--border-light)',
              },
            }}
            w={{ base: '100%', sm: 300 }}
          />
          <Group>
            <Select
              placeholder="All Categories"
              data={['All', 'Technology', 'Lifestyle', 'Investment', 'Travel']}
              styles={{
                input: {
                  backgroundColor: 'var(--bg-main)',
                  color: 'var(--text-main)',
                  borderColor: 'var(--border-light)',
                },
              }}
            />
            <ActionIcon
              size="lg"
              variant="default"
              style={{
                borderColor: 'var(--border-light)',
                backgroundColor: 'var(--bg-main)',
                color: 'var(--text-main)',
              }}
            >
              <IconFilter size={18} stroke={1.5} />
            </ActionIcon>
          </Group>
        </Group>

        <StaggerList>
          {allTransactions.map((tx) => (
            <StaggerItem key={tx.id}>
              <Group
                justify="space-between"
                py="lg"
                style={{
                  borderBottom: '1px solid var(--border-subtle)',
                  transition: 'border-color 0.2s ease',
                }}
              >
                <Group gap="xl">
                  <ActionIcon
                    size={48}
                    radius="xl"
                    variant="light"
                    style={{
                      backgroundColor: 'var(--bg-main)',
                      color: 'var(--text-main)',
                    }}
                  >
                    <tx.icon size={24} stroke={1.5} />
                  </ActionIcon>
                  <Box>
                    <Text fw={600} size="md" style={{ color: 'var(--text-main)' }}>
                      {tx.title}
                    </Text>
                    <Text
                      size="xs"
                      fw={600}
                      style={{
                        letterSpacing: '0.5px',
                        color: 'var(--text-dimmed)',
                      }}
                    >
                      {tx.category} · {tx.date}
                    </Text>
                  </Box>
                </Group>
                <Box style={{ textAlign: 'right' }}>
                  <Text fw={700} size="md" style={{ color: 'var(--text-main)' }}>
                    {tx.amount}
                  </Text>
                  <Badge
                    size="sm"
                    variant="light"
                    color={tx.status === 'PENDING' ? 'yellow' : 'gray'}
                    style={{ marginTop: 4 }}
                  >
                    {tx.status}
                  </Badge>
                </Box>
              </Group>
            </StaggerItem>
          ))}
        </StaggerList>
      </Card>
    </div>
  );
}
