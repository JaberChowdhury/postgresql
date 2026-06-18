'use client';

import {
  Modal,
  Tabs,
  Select,
  Slider,
  Switch,
  ColorInput,
  Text,
  Group,
  Box,
  NumberInput,
  Divider,
} from '@mantine/core';
import { useThemeSettings, ThemeSettings } from './ThemeSettingsProvider';
import { IconPalette, IconTypography, IconBoxModel, IconAdjustments } from '@tabler/icons-react';

export function SettingsModal({ opened, onClose }: { opened: boolean; onClose: () => void }) {
  const { settings, updateSetting, resetSettings } = useThemeSettings();

  const handleUpdate =
    <K extends keyof ThemeSettings>(key: K) =>
    (value: any) => {
      updateSetting(key, value);
    };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={
        <Text fw={700} size="lg">
          Theme Configuration
        </Text>
      }
      size="xl"
      padding="xl"
      centered
    >
      <Tabs defaultValue="colors" variant="outline">
        <Tabs.List mb="md">
          <Tabs.Tab value="colors" leftSection={<IconPalette size={16} />}>
            Colors & Contrast
          </Tabs.Tab>
          <Tabs.Tab value="sizes" leftSection={<IconTypography size={16} />}>
            Sizing & Spacing
          </Tabs.Tab>
          <Tabs.Tab value="components" leftSection={<IconBoxModel size={16} />}>
            Components
          </Tabs.Tab>
          <Tabs.Tab value="misc" leftSection={<IconAdjustments size={16} />}>
            Misc & Interactions
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="colors">
          <Box p="md">
            <Group grow align="flex-start" mb="xl">
              <Select
                label="Primary Color"
                description="Main theme color"
                data={['darkCharcoal', 'blue', 'teal', 'grape', 'red', 'orange']}
                value={settings.primaryColor}
                onChange={handleUpdate('primaryColor')}
              />
              <Box>
                <Text size="sm" fw={500}>
                  Primary Shade ({settings.primaryShade})
                </Text>
                <Text size="xs" c="dimmed" mb="xs">
                  Color intensity (0-9)
                </Text>
                <Slider
                  min={0}
                  max={9}
                  value={settings.primaryShade}
                  onChange={handleUpdate('primaryShade')}
                />
              </Box>
            </Group>
            <Divider mb="xl" />
            <Group grow mb="xl">
              <Switch
                label="Auto-contrast"
                description="Automatically adjust text color for contrast"
                checked={settings.autoContrast}
                onChange={(event) => handleUpdate('autoContrast')(event.currentTarget.checked)}
              />
              <Box>
                <Text size="sm" fw={500}>
                  Luminance Threshold ({settings.luminanceThreshold})
                </Text>
                <Slider
                  min={0}
                  max={1}
                  step={0.1}
                  value={settings.luminanceThreshold}
                  onChange={handleUpdate('luminanceThreshold')}
                />
              </Box>
            </Group>
          </Box>
        </Tabs.Panel>

        <Tabs.Panel value="sizes">
          <Box p="md">
            <Group grow mb="xl">
              <Select
                label="Global Default Radius"
                data={['xs', 'sm', 'md', 'lg', 'xl']}
                value={settings.defaultRadius}
                onChange={handleUpdate('defaultRadius')}
              />
              <Select
                label="Font Family"
                data={[
                  'Outfit, sans-serif',
                  'Inter, sans-serif',
                  'Roboto, sans-serif',
                  'monospace',
                ]}
                value={settings.fontFamily}
                onChange={handleUpdate('fontFamily')}
              />
            </Group>
            <Box mb="xl">
              <Text size="sm" fw={500}>
                Global UI Scale ({settings.scale})
              </Text>
              <Text size="xs" c="dimmed" mb="xs">
                Scales all elements (0.5 - 2.0)
              </Text>
              <Slider
                min={0.5}
                max={2.0}
                step={0.1}
                value={settings.scale}
                onChange={handleUpdate('scale')}
              />
            </Box>
          </Box>
        </Tabs.Panel>

        <Tabs.Panel value="components">
          <Box p="md">
            <Text fw={600} mb="md">
              Button Defaults
            </Text>
            <Group grow mb="xl">
              <Select
                label="Variant"
                data={['filled', 'light', 'outline', 'subtle', 'default']}
                value={settings.buttonVariant}
                onChange={handleUpdate('buttonVariant')}
              />
              <Select
                label="Size"
                data={['xs', 'sm', 'md', 'lg', 'xl']}
                value={settings.buttonSize}
                onChange={handleUpdate('buttonSize')}
              />
            </Group>

            <Text fw={600} mb="md">
              Card Defaults
            </Text>
            <Group grow mb="xl">
              <Select
                label="Padding"
                data={['xs', 'sm', 'md', 'lg', 'xl']}
                value={settings.cardPadding}
                onChange={handleUpdate('cardPadding')}
              />
              <Select
                label="Radius"
                data={['xs', 'sm', 'md', 'lg', 'xl']}
                value={settings.cardRadius}
                onChange={handleUpdate('cardRadius')}
              />
              <Select
                label="Shadow"
                data={['xs', 'sm', 'md', 'lg', 'xl']}
                value={settings.cardShadow}
                onChange={handleUpdate('cardShadow')}
              />
            </Group>

            <Text fw={600} mb="md">
              Input Defaults
            </Text>
            <Group grow mb="xl">
              <Select
                label="Input Variant"
                data={['default', 'filled', 'unstyled']}
                value={settings.inputVariant}
                onChange={handleUpdate('inputVariant')}
              />
            </Group>

            <Text fw={600} mb="md">
              Other Components
            </Text>
            <Group grow mb="xl">
              <Select
                label="Badge Variant"
                data={['light', 'filled', 'outline', 'dot']}
                value={settings.badgeVariant}
                onChange={handleUpdate('badgeVariant')}
              />
              <Select
                label="Badge Size"
                data={['xs', 'sm', 'md', 'lg', 'xl']}
                value={settings.badgeSize}
                onChange={handleUpdate('badgeSize')}
              />
              <Select
                label="Avatar Radius"
                data={['xs', 'sm', 'md', 'lg', 'xl']}
                value={settings.avatarRadius}
                onChange={handleUpdate('avatarRadius')}
              />
            </Group>
          </Box>
        </Tabs.Panel>

        <Tabs.Panel value="misc">
          <Box p="md">
            <Group grow mb="xl">
              <Select
                label="Focus Ring"
                data={['auto', 'always', 'never']}
                value={settings.focusRing}
                onChange={handleUpdate('focusRing')}
              />
              <Select
                label="Cursor Type"
                data={['default', 'pointer']}
                value={settings.cursorType}
                onChange={handleUpdate('cursorType')}
              />
              <Select
                label="Loader Type"
                data={['oval', 'bars', 'dots']}
                value={settings.loaderType}
                onChange={handleUpdate('loaderType')}
              />
            </Group>

            <Group justify="flex-end" mt={40}>
              <Text size="sm" c="dimmed" style={{ cursor: 'pointer' }} onClick={resetSettings}>
                Reset to Defaults
              </Text>
            </Group>
          </Box>
        </Tabs.Panel>
      </Tabs>
    </Modal>
  );
}
