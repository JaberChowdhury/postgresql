'use client';

import { DateInput } from '@mantine/dates';
import {
  Modal,
  Text,
  TextInput,
  Select,
  Button,
  Group,
  SegmentedControl,
  NumberInput,
  Grid,
} from '@mantine/core';
import {
  IconBuildingBank,
  IconDeviceDesktop,
  IconPlaneTilt,
  IconShoppingCart,
  IconToolsKitchen2,
} from '@tabler/icons-react';
import { useState } from 'react';

const categoryData = [
  { value: 'Housing', label: 'Housing' },
  { value: 'Food', label: 'Food & Dining' },
  { value: 'Transport', label: 'Transportation' },
  { value: 'Tech', label: 'Technology' },
  { value: 'Travel', label: 'Travel' },
  { value: 'Investment', label: 'Investment' },
];

export function LogTransactionModal({ opened, onClose }: { opened: boolean; onClose: () => void }) {
  const [type, setType] = useState('Expense');
  const [date, setDate] = useState<Date | null>(new Date());

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={
        <Text fw={600} size="lg">
          Log New Transaction
        </Text>
      }
      centered
      size="md"
    >
      <SegmentedControl
        fullWidth
        mb="xl"
        value={type}
        onChange={setType}
        data={['Expense', 'Income']}
        color={type === 'Expense' ? 'red' : 'teal'}
      />

      <Grid mb="md">
        <Grid.Col span={6}>
          <NumberInput
            label="Amount"
            placeholder="0.00"
            prefix="$ "
            decimalScale={2}
            fixedDecimalScale
            hideControls
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <DateInput
            label="Date"
            placeholder="Select date"
            value={date}
            onChange={setDate}
            clearable
            maxDate={new Date()}
          />
        </Grid.Col>
      </Grid>

      <TextInput label="Merchant / Title" placeholder="e.g. The Archer Bistro" mb="md" />

      <Select
        label="Category"
        placeholder="Select category"
        data={categoryData}
        searchable
        clearable
        mb="xl"
        leftSection={<IconShoppingCart size={16} stroke={1.5} />}
      />

      <TextInput label="Notes" placeholder="Optional details..." mb="xl" />

      <Group justify="flex-end">
        <Button variant="subtle" color="gray" onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={onClose} color={type === 'Expense' ? 'red' : 'teal'}>
          {type === 'Expense' ? 'Log Expense' : 'Log Income'}
        </Button>
      </Group>
    </Modal>
  );
}
