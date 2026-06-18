'use client';

import { Box, Card, Text, Title, Group, Progress, SimpleGrid } from '@mantine/core';
import { StaggerGrid, StaggerCard } from '@/components/Animations';

const budgets = [
  { category: 'Housing', spent: 1200, limit: 1500, color: 'blue' },
  { category: 'Food & Dining', spent: 650, limit: 800, color: 'teal' },
  { category: 'Transportation', spent: 120, limit: 300, color: 'orange' },
  { category: 'Entertainment', spent: 400, limit: 350, color: 'red' }, // Over budget
  { category: 'Shopping', spent: 150, limit: 400, color: 'grape' },
];

export function BudgetsView() {
  return (
    <div>
      <Box mb={40}>
        <Text
          size="xs"
          fw={700}
          style={{ letterSpacing: '1px', color: 'var(--text-dimmed)' }}
          mb={8}
        >
          SPENDING LIMITS
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
          Budgets
        </Title>
      </Box>

      <StaggerGrid>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
        {budgets.map((budget) => {
          const percent = Math.min((budget.spent / budget.limit) * 100, 100);
          const isOver = budget.spent > budget.limit;

          return (
            <StaggerCard key={budget.category}>
              <Card
                padding="xl"
                radius="lg"
                style={{ backgroundColor: 'var(--bg-card)', border: 'none' }}
              >
                <Group justify="space-between" mb="sm">
                  <Text fw={600} size="lg" style={{ color: 'var(--text-main)' }}>
                    {budget.category}
                  </Text>
                  <Text fw={700} style={{ color: isOver ? 'red' : 'var(--text-main)' }}>
                    ${budget.spent}{' '}
                    <span style={{ color: 'var(--text-dimmed)', fontSize: '0.8em' }}>
                      / ${budget.limit}
                    </span>
                  </Text>
                </Group>

                <Progress
                  value={percent}
                  color={isOver ? 'red' : budget.color}
                  size="xl"
                  radius="xl"
                  style={{ backgroundColor: 'var(--bg-main)' }}
                />

                {isOver && (
                  <Text size="xs" c="red" mt="sm" fw={600}>
                    Over budget by ${budget.spent - budget.limit}
                  </Text>
                )}
                {!isOver && (
                  <Text size="xs" mt="sm" fw={600} style={{ color: 'var(--text-dimmed)' }}>
                    ${budget.limit - budget.spent} remaining
                  </Text>
                )}
              </Card>
            </StaggerCard>
          );
        })}
        </SimpleGrid>
      </StaggerGrid>
    </div>
  );
}
