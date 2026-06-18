'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {
  MantineProvider,
  createTheme,
  MantineThemeOverride,
  ColorSchemeScript,
  MantineColorShade,
} from '@mantine/core';
import { Outfit } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'] });

export interface ThemeSettings {
  primaryColor: string;
  primaryShade: MantineColorShade;
  defaultRadius: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fontFamily: string;
  focusRing: 'auto' | 'always' | 'never';
  cursorType: 'default' | 'pointer';
  loaderType: 'oval' | 'bars' | 'dots';
  autoContrast: boolean;
  luminanceThreshold: number;
  buttonVariant: 'filled' | 'light' | 'outline' | 'subtle' | 'default';
  buttonSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  cardPadding: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  cardShadow: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  cardRadius: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  inputVariant: 'default' | 'filled' | 'unstyled';
  badgeVariant: 'light' | 'filled' | 'outline' | 'dot';
  badgeSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  avatarRadius: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  scale: number;
  activeClassName: string; // empty string or some class
}

const defaultSettings: ThemeSettings = {
  primaryColor: 'darkCharcoal',
  primaryShade: 6,
  defaultRadius: 'md',
  fontFamily: outfit.style.fontFamily,
  focusRing: 'auto',
  cursorType: 'pointer',
  loaderType: 'oval',
  autoContrast: false,
  luminanceThreshold: 0.3,
  buttonVariant: 'filled',
  buttonSize: 'md',
  cardPadding: 'xl',
  cardShadow: 'sm',
  cardRadius: 'lg',
  inputVariant: 'default',
  badgeVariant: 'filled',
  badgeSize: 'md',
  avatarRadius: 'xl',
  scale: 1,
  activeClassName: '',
};

interface ThemeSettingsContextType {
  settings: ThemeSettings;
  updateSetting: <K extends keyof ThemeSettings>(key: K, value: ThemeSettings[K]) => void;
  resetSettings: () => void;
}

const ThemeSettingsContext = createContext<ThemeSettingsContextType | undefined>(undefined);

export function useThemeSettings() {
  const context = useContext(ThemeSettingsContext);
  if (!context) throw new Error('useThemeSettings must be used within ThemeSettingsProvider');
  return context;
}

export function ThemeSettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<ThemeSettings>(defaultSettings);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('expensepro-theme-settings');
    if (saved) {
      try {
        setSettings(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse theme settings', e);
      }
    }
    setMounted(true);
  }, []);

  const updateSetting = <K extends keyof ThemeSettings>(key: K, value: ThemeSettings[K]) => {
    setSettings((prev) => {
      const next = { ...prev, [key]: value };
      localStorage.setItem('expensepro-theme-settings', JSON.stringify(next));
      return next;
    });
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
    localStorage.removeItem('expensepro-theme-settings');
  };

  const customTheme = createTheme({
    primaryColor: settings.primaryColor,
    primaryShade: settings.primaryShade,
    defaultRadius: settings.defaultRadius,
    fontFamily: settings.fontFamily,
    focusRing: settings.focusRing,
    cursorType: settings.cursorType,
    autoContrast: settings.autoContrast,
    luminanceThreshold: settings.luminanceThreshold,
    scale: settings.scale,
    activeClassName: settings.activeClassName,
    colors: {
      darkCharcoal: [
        '#f5f5f5',
        '#e7e7e7',
        '#cdcdcd',
        '#b2b2b2',
        '#9a9a9a',
        '#8b8b8b',
        '#848484',
        '#717171',
        '#656565',
        '#575757',
      ],
    },
    components: {
      Button: {
        defaultProps: {
          variant: settings.buttonVariant,
          size: settings.buttonSize,
        },
      },
      Card: {
        defaultProps: {
          padding: settings.cardPadding,
          shadow: settings.cardShadow,
          radius: settings.cardRadius,
        },
      },
      TextInput: { defaultProps: { variant: settings.inputVariant } },
      PasswordInput: { defaultProps: { variant: settings.inputVariant } },
      Select: { defaultProps: { variant: settings.inputVariant } },
      Badge: {
        defaultProps: {
          variant: settings.badgeVariant,
          size: settings.badgeSize,
        },
      },
      Avatar: { defaultProps: { radius: settings.avatarRadius } },
      Loader: { defaultProps: { type: settings.loaderType } },
    },
  });

  return (
    <ThemeSettingsContext.Provider value={{ settings, updateSetting, resetSettings }}>
      {/* We wait for mount to prevent hydration mismatch of custom settings, or we just render provider immediately.
          Rendering provider immediately with default settings, then updating is safe, but causes a flash.
          Safe hydration pattern: render invisible until mounted, or render default then snap. 
          We'll render default, let client snap to avoid full block. */}
      <MantineProvider theme={customTheme} defaultColorScheme="light">
        {children}
      </MantineProvider>
    </ThemeSettingsContext.Provider>
  );
}
