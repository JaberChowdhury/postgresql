'use client';

import {
  Box,
  Card,
  Title,
  Text,
  TextInput,
  PasswordInput,
  Button,
  Group,
  ActionIcon,
  Grid,
  Flex,
  Divider,
} from '@mantine/core';
import { motion } from 'framer-motion';
import { IconSun, IconMoon, IconBrandGoogle, IconBrandApple } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useMantineColorScheme } from '@mantine/core';

export default function SignupPage() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <Box
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg-main)',
        overflow: 'hidden',
      }}
    >
      <Box style={{ position: 'absolute', top: 40, right: 40, zIndex: 100 }}>
        <ActionIcon
          variant="transparent"
          size="xl"
          onClick={() => toggleColorScheme()}
          style={{ color: 'var(--text-main)' }}
        >
          {mounted ? (
            dark ? (
              <IconSun size={24} stroke={1.5} />
            ) : (
              <IconMoon size={24} stroke={1.5} />
            )
          ) : (
            <IconSun size={24} stroke={1.5} style={{ opacity: 0 }} />
          )}
        </ActionIcon>
      </Box>

      <Grid style={{ minHeight: '100vh', margin: 0 }}>
        {/* Left Side: Branding / Graphic */}
        <Grid.Col span={{ base: 12, md: 5, lg: 6 }} display={{ base: 'none', md: 'block' }}>
          <Box
            style={{
              height: '100%',
              background: 'var(--bg-auth)',
              position: 'relative',
              padding: '60px',
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <Box mb={60}>
                <Text
                  fw={800}
                  size="2.5rem"
                  style={{ letterSpacing: '-1px', color: 'var(--text-main)' }}
                >
                  ExpensePro
                </Text>
                <Text
                  size="sm"
                  fw={600}
                  style={{ letterSpacing: '2px', color: 'var(--text-dimmed)' }}
                >
                  WEALTH MANAGEMENT
                </Text>
              </Box>

              <Box style={{ position: 'absolute', bottom: 60, maxWidth: 400 }}>
                <Title
                  order={2}
                  style={{
                    color: 'var(--text-main)',
                    fontSize: '2.5rem',
                    lineHeight: 1.1,
                    marginBottom: '20px',
                  }}
                >
                  Begin your wealth journey.
                </Title>
                <Text size="lg" style={{ color: 'var(--text-dimmed)' }}>
                  Join thousands of users tracking their portfolios with military-grade precision.
                </Text>
              </Box>
            </motion.div>
          </Box>
        </Grid.Col>

        {/* Right Side: Form */}
        <Grid.Col span={{ base: 12, md: 7, lg: 6 }}>
          <Flex align="center" justify="center" style={{ height: '100%', padding: '40px' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              style={{ width: '100%', maxWidth: 420 }}
            >
              <Box mb={40} display={{ base: 'block', md: 'none' }} style={{ textAlign: 'center' }}>
                <Text
                  fw={800}
                  size="xl"
                  style={{ letterSpacing: '-0.5px', color: 'var(--text-main)' }}
                >
                  ExpensePro
                </Text>
              </Box>

              <Title
                order={2}
                mb="xs"
                style={{
                  color: 'var(--text-main)',
                  fontWeight: 700,
                  fontSize: '2rem',
                }}
              >
                Create an account
              </Title>
              <Text c="dimmed" size="sm" mb={40}>
                Enter your details to get started.
              </Text>

              <Group grow mb="lg">
                <Button
                  variant="default"
                  radius="md"
                  size="md"
                  leftSection={<IconBrandGoogle size={18} />}
                >
                  Google
                </Button>
                <Button
                  variant="default"
                  radius="md"
                  size="md"
                  leftSection={<IconBrandApple size={18} />}
                >
                  Apple
                </Button>
              </Group>

              <Divider label="Or register with email" labelPosition="center" mb="lg" />

              <Group grow mb="md">
                <TextInput label="First Name" placeholder="John" size="md" />
                <TextInput label="Last Name" placeholder="Doe" size="md" />
              </Group>

              <TextInput label="Email" placeholder="your@email.com" mb="md" size="md" />

              <PasswordInput label="Password" placeholder="••••••••" mb="md" size="md" />

              <PasswordInput label="Confirm Password" placeholder="••••••••" mb="xl" size="md" />

              <Button
                fullWidth
                size="lg"
                radius="md"
                onClick={() => router.push('/')}
                style={{
                  backgroundColor: 'var(--text-main)',
                  color: 'var(--bg-main)',
                }}
              >
                Create Account
              </Button>

              <Group justify="center" mt="xl">
                <Text size="sm" style={{ color: 'var(--text-dimmed)' }}>
                  Already have an account?{' '}
                  <span
                    style={{
                      color: 'var(--text-main)',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                    onClick={() => router.push('/login')}
                  >
                    Sign in
                  </span>
                </Text>
              </Group>
            </motion.div>
          </Flex>
        </Grid.Col>
      </Grid>
    </Box>
  );
}
