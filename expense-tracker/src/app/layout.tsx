import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';
import '@mantine/dates/styles.css';
import { ColorSchemeScript } from '@mantine/core';
import { ThemeSettingsProvider } from '@/components/ThemeSettingsProvider';
import './globals.css';

export const metadata = {
  title: 'ExpensePro - Wealth Management',
  description: 'Manage your expenses and portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body>
        <ThemeSettingsProvider>{children}</ThemeSettingsProvider>
      </body>
    </html>
  );
}
