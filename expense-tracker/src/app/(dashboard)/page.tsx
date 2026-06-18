'use client';

import {
  Box,
  Group,
  Title,
  Text,
  Badge,
  UnstyledButton,
  ActionIcon,
  Grid,
  Card,
} from '@mantine/core';
import {
  IconTrendingUp,
  IconTrendingDown,
  IconCirclePlus,
  IconDeviceDesktop,
  IconToolsKitchen2,
  IconBuildingBank,
  IconPlaneTilt,
} from '@tabler/icons-react';
import Image from 'next/image';
import { useMantineColorScheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { LogTransactionModal } from '@/components/LogTransactionModal';
import { StaggerList, StaggerItem } from '@/components/Animations';

export default function DashboardPage() {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  const [openedModal, { open: openModal, close: closeModal }] = useDisclosure(false);

  return (
    <>
      <div>
        {/* Portfolio Value Section */}
        <Box mb={60}>
          <Text
            size="xs"
            fw={700}
            style={{ letterSpacing: '1px', color: 'var(--text-dimmed)' }}
            mb={8}
          >
            CURRENT PORTFOLIO VALUE
          </Text>
          <Title
            order={1}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 600,
              letterSpacing: '-1.5px',
              color: 'var(--text-main)',
            }}
          >
            $12,450.00
          </Title>
          <Group gap="sm" mt="md">
            <Badge
              variant="filled"
              size="lg"
              radius="xl"
              style={{
                textTransform: 'none',
                fontWeight: 600,
                backgroundColor: 'var(--text-main)',
                color: 'var(--bg-main)',
              }}
            >
              + 15.5%
            </Badge>
            <Text size="sm" fw={500} style={{ color: 'var(--text-dimmed)' }}>
              Since last month
            </Text>
          </Group>
        </Box>

        {/* Dashboard Grid */}
        <Grid>
          <Grid.Col span={{ base: 12, lg: 8 }}>
            <Grid mb="xl">
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <Card
                  padding="xl"
                  radius="lg"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: 'none',
                    transition: 'background-color 0.2s ease',
                  }}
                >
                  <Text
                    size="xs"
                    fw={700}
                    style={{
                      letterSpacing: '1px',
                      color: 'var(--text-dimmed)',
                    }}
                    mb="xs"
                  >
                    TOTAL INCOME
                  </Text>
                  <Title
                    order={2}
                    style={{
                      fontSize: '2rem',
                      fontWeight: 600,
                      color: 'var(--text-main)',
                    }}
                    mb="xl"
                  >
                    $8,240.00
                  </Title>
                  <Group justify="space-between" align="flex-end">
                    <IconTrendingUp size={32} stroke={1.5} style={{ color: 'var(--text-main)' }} />
                    <UnstyledButton
                      style={{
                        backgroundColor: 'var(--btn-dark)',
                        color: 'var(--bg-main)',
                        padding: '8px 24px',
                        borderRadius: '20px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        letterSpacing: '0.5px',
                      }}
                    >
                      DETAILS
                    </UnstyledButton>
                  </Group>
                </Card>
              </Grid.Col>

              <Grid.Col span={{ base: 12, sm: 6 }}>
                <Card
                  padding="xl"
                  radius="lg"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: 'none',
                    transition: 'background-color 0.2s ease',
                  }}
                >
                  <Text
                    size="xs"
                    fw={700}
                    style={{
                      letterSpacing: '1px',
                      color: 'var(--text-dimmed)',
                    }}
                    mb="xs"
                  >
                    TOTAL EXPENSES
                  </Text>
                  <Title
                    order={2}
                    style={{
                      fontSize: '2rem',
                      fontWeight: 600,
                      color: 'var(--text-main)',
                    }}
                    mb="xl"
                  >
                    $2,190.50
                  </Title>
                  <Group justify="space-between" align="flex-end">
                    <IconTrendingDown
                      size={32}
                      stroke={1.5}
                      style={{ color: 'var(--text-main)' }}
                    />
                    <UnstyledButton
                      style={{
                        backgroundColor: 'var(--btn-dark)',
                        color: 'var(--bg-main)',
                        padding: '8px 24px',
                        borderRadius: '20px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        letterSpacing: '0.5px',
                      }}
                    >
                      DETAILS
                    </UnstyledButton>
                  </Group>
                </Card>
              </Grid.Col>
            </Grid>

            {/* Asset Distribution */}
            <Card
              padding="xl"
              radius="lg"
              style={{
                backgroundColor: 'var(--bg-dark-card)',
                border: 'none',
                transition: 'background-color 0.2s ease',
                minHeight: '240px',
              }}
            >
              <Text
                size="xs"
                fw={700}
                style={{ letterSpacing: '1px', color: 'var(--text-inverse)' }}
                opacity={0.6}
                mb="xs"
              >
                ASSET DISTRIBUTION
              </Text>
              <Text size="lg" fw={500} mb={60} style={{ color: 'var(--text-inverse)' }}>
                Strategic Allocation
              </Text>

              <Group gap={60}>
                <Box>
                  <Text
                    size="xs"
                    style={{
                      letterSpacing: '1px',
                      color: 'var(--text-inverse)',
                    }}
                    opacity={0.6}
                  >
                    EQUITIES
                  </Text>
                  <Text size="xl" fw={600} style={{ color: 'var(--text-inverse)' }}>
                    65%
                  </Text>
                </Box>
                <Box>
                  <Text
                    size="xs"
                    style={{
                      letterSpacing: '1px',
                      color: 'var(--text-inverse)',
                    }}
                    opacity={0.6}
                  >
                    FIXED INCOME
                  </Text>
                  <Text size="xl" fw={600} style={{ color: 'var(--text-inverse)' }}>
                    25%
                  </Text>
                </Box>
                <Box>
                  <Text
                    size="xs"
                    style={{
                      letterSpacing: '1px',
                      color: 'var(--text-inverse)',
                    }}
                    opacity={0.6}
                  >
                    CASH
                  </Text>
                  <Text size="xl" fw={600} style={{ color: 'var(--text-inverse)' }}>
                    10%
                  </Text>
                </Box>
              </Group>
            </Card>
          </Grid.Col>

          {/* Log Transaction Right Column */}
          <Grid.Col span={{ base: 12, lg: 4 }}>
            <Card
              padding="xl"
              radius="lg"
              style={{
                backgroundColor: 'transparent',
                border: '1px solid var(--border-light)',
                minHeight: '240px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                transition: 'border-color 0.2s ease',
              }}
            >
              <ActionIcon
                variant="transparent"
                size="xl"
                mb="md"
                onClick={openModal}
                style={{ color: 'var(--text-main)' }}
              >
                <IconCirclePlus stroke={1} size={48} />
              </ActionIcon>
              <Title order={3} fw={600} mb="xs" style={{ color: 'var(--text-main)' }}>
                Log Transaction
              </Title>
              <Text size="sm" mb="xl" maw={200} style={{ color: 'var(--text-dimmed)' }}>
                Manually add your latest expense or income entry.
              </Text>
              <UnstyledButton
                onClick={openModal}
                style={{
                  border: '1px solid var(--text-main)',
                  color: 'var(--text-main)',
                  padding: '10px 24px',
                  borderRadius: '24px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '1px',
                  transition: 'all 0.2s ease',
                }}
              >
                START NOW
              </UnstyledButton>
            </Card>
          </Grid.Col>
        </Grid>

        {/* Recent Transactions */}
        <Box mt={60}>
          <Group justify="space-between" mb="xl">
            <Box>
              <Text
                size="xs"
                fw={700}
                style={{ letterSpacing: '1px', color: 'var(--text-dimmed)' }}
                mb={4}
              >
                TIMELINE
              </Text>
              <Title
                order={2}
                style={{
                  fontSize: '1.8rem',
                  fontWeight: 600,
                  color: 'var(--text-main)',
                }}
              >
                Recent Transactions
              </Title>
            </Box>
            <Text
              size="xs"
              fw={700}
              style={{
                letterSpacing: '1px',
                cursor: 'pointer',
                color: 'var(--text-main)',
                borderBottom: '1px solid var(--text-main)',
              }}
            >
              VIEW ARCHIVE
            </Text>
          </Group>

        <StaggerList>
            {[
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
            ].map((tx) => (
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
                        backgroundColor: 'var(--bg-card)',
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
                    <Text
                      size="xs"
                      fw={600}
                      style={{
                        letterSpacing: '0.5px',
                        color: 'var(--text-dimmed)',
                      }}
                    >
                      {tx.status}
                    </Text>
                  </Box>
                </Group>
              </StaggerItem>
            ))}
          </StaggerList>
        </Box>

        {/* Insights Section */}
        <Grid mt={80} align="center">
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Text
              size="xs"
              fw={700}
              style={{ letterSpacing: '1px', color: 'var(--text-dimmed)' }}
              mb="md"
            >
              INSIGHTS
            </Text>
            <Title
              order={2}
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                fontWeight: 600,
                color: 'var(--text-main)',
                lineHeight: 1.2,
              }}
              mb="xl"
            >
              Your spending has
              <br />
              decreased by 14%
              <br />
              this quarter.
            </Title>
            <Text size="sm" mb={40} style={{ lineHeight: 1.6, color: 'var(--text-dimmed)' }}>
              Based on our algorithmic analysis, you are on track to exceed your savings goal by
              $2,400 by end of year. We recommend diversifying your liquid assets into our 'Green
              Growth' fund.
            </Text>
            <UnstyledButton
              style={{
                backgroundColor: 'var(--btn-dark)',
                color: 'var(--bg-main)',
                padding: '12px 24px',
                borderRadius: '8px',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.5px',
              }}
            >
              EXPLORE OPPORTUNITIES
            </UnstyledButton>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Box
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                height: '400px',
                position: 'relative',
                marginTop: '20px',
              }}
            >
              <Image
                src="/insights_graphic.png"
                alt="Insights Graphic"
                fill
                style={{ objectFit: 'cover' }}
              />
            </Box>
          </Grid.Col>
        </Grid>
      </div>

      <LogTransactionModal opened={openedModal} onClose={closeModal} />
    </>
  );
}
