'use client';

import { Box, Card, Text, Title, Group, useMantineColorScheme } from '@mantine/core';
import { AreaChart } from '@mantine/charts';

const data = [
  { name: 'Jan', income: 4000, expenses: 2400 },
  { name: 'Feb', income: 3000, expenses: 1398 },
  { name: 'Mar', income: 2000, expenses: 9800 },
  { name: 'Apr', income: 2780, expenses: 3908 },
  { name: 'May', income: 1890, expenses: 4800 },
  { name: 'Jun', income: 2390, expenses: 3800 },
  { name: 'Jul', income: 3490, expenses: 4300 },
];

export function AnalyticsView() {
  return (
    <div>
      <Box mb={60}>
        <Text
          size="xs"
          fw={700}
          style={{ letterSpacing: '1px', color: 'var(--text-dimmed)' }}
          mb={8}
        >
          PERFORMANCE TRACKING
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
          Analytics Overview
        </Title>
      </Box>

      <Card
        padding="xl"
        radius="lg"
        style={{
          backgroundColor: 'var(--bg-card)',
          border: 'none',
          transition: 'background-color 0.2s ease',
        }}
      >
        <Group justify="space-between" mb="xl">
          <Box>
            <Title order={3} style={{ color: 'var(--text-main)' }}>
              Income vs Expenses
            </Title>
            <Text size="sm" style={{ color: 'var(--text-dimmed)' }}>
              Last 7 Months
            </Text>
          </Box>
        </Group>

        <Box style={{ height: 400, width: '100%' }}>
          <AreaChart
            h={400}
            data={data}
            dataKey="name"
            series={[
              { name: 'income', color: 'var(--text-main)' },
              { name: 'expenses', color: 'teal.6' },
            ]}
            curveType="monotone"
            withGradient
            gridAxis="none"
            tooltipAnimationDuration={200}
          />
        </Box>
      </Card>
    </div>
  );
}
