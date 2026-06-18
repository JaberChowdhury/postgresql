'use client';

import {
  Box,
  Title,
  Text,
  Avatar,
  Grid,
  Card,
  TextInput,
  Button,
  Group,
  Divider,
  Badge,
} from '@mantine/core';
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconShieldCheck,
  IconCreditCard,
} from '@tabler/icons-react';

export default function ProfilePage() {
  return (
    <div>
      <Box mb={40}>
        <Text
          size="xs"
          fw={700}
          style={{ letterSpacing: '1px', color: 'var(--text-dimmed)' }}
          mb={8}
        >
          ACCOUNT
        </Text>
        <Title
          order={1}
          style={{
            fontSize: '2.5rem',
            fontWeight: 600,
            letterSpacing: '-1px',
            color: 'var(--text-main)',
          }}
        >
          Profile Settings
        </Title>
      </Box>

      <Grid style={{ gap: '2rem' }}>
        {/* Left Column: Profile Card */}
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Card
            padding="xl"
            radius="lg"
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              textAlign: 'center',
            }}
          >
            <Avatar
              src="https://ui-avatars.com/api/?name=Jaber+C&background=111&color=fff&size=128"
              size={120}
              radius={120}
              mx="auto"
              mb="md"
            />
            <Title order={3} fw={600} style={{ color: 'var(--text-main)' }}>
              Jaber C.
            </Title>
            <Text c="dimmed" size="sm" mb="xl">
              jaber@expensepro.io
            </Text>

            <Badge
              size="lg"
              variant="light"
              color="teal"
              leftSection={<IconShieldCheck size={14} />}
              mb="xl"
            >
              Pro Member
            </Badge>

            <Divider mb="xl" />

            <Group gap="xs" mb="sm" justify="center">
              <IconMapPin size={16} stroke={1.5} color="var(--text-dimmed)" />
              <Text size="sm" c="dimmed">
                New York, USA
              </Text>
            </Group>
            <Group gap="xs" mb="xl" justify="center">
              <IconPhone size={16} stroke={1.5} color="var(--text-dimmed)" />
              <Text size="sm" c="dimmed">
                +1 (555) 000-1234
              </Text>
            </Group>

            <Button variant="outline" fullWidth radius="md" color="red">
              Sign Out
            </Button>
          </Card>
        </Grid.Col>

        {/* Right Column: Settings Form */}
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Card
            padding="xl"
            radius="lg"
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
            }}
          >
            <Title order={4} mb="xl" style={{ color: 'var(--text-main)' }}>
              Personal Information
            </Title>

            <Grid mb="md">
              <Grid.Col span={6}>
                <TextInput label="First Name" defaultValue="Jaber" />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput label="Last Name" defaultValue="C." />
              </Grid.Col>
            </Grid>

            <TextInput
              label="Email Address"
              defaultValue="jaber@expensepro.io"
              leftSection={<IconMail size={16} />}
              mb="md"
            />
            <TextInput
              label="Phone Number"
              defaultValue="+1 (555) 000-1234"
              leftSection={<IconPhone size={16} />}
              mb="xl"
            />

            <Group justify="flex-end" mb={40}>
              <Button
                style={{
                  backgroundColor: 'var(--btn-dark)',
                  color: 'var(--bg-main)',
                }}
              >
                Save Changes
              </Button>
            </Group>

            <Divider mb="xl" />

            <Title order={4} mb="xl" style={{ color: 'var(--text-main)' }}>
              Billing Information
            </Title>
            <Group
              justify="space-between"
              align="center"
              p="md"
              style={{
                border: '1px solid var(--border-subtle)',
                borderRadius: '8px',
              }}
            >
              <Group>
                <IconCreditCard size={24} color="var(--text-main)" />
                <Box>
                  <Text fw={600} style={{ color: 'var(--text-main)' }}>
                    Visa ending in 4242
                  </Text>
                  <Text size="sm" c="dimmed">
                    Expires 12/2026
                  </Text>
                </Box>
              </Group>
              <Button variant="subtle" color="gray">
                Edit
              </Button>
            </Group>
          </Card>
        </Grid.Col>
      </Grid>
    </div>
  );
}
