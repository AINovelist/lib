"use client";
import { useState } from 'react';
import {
  IconDownload,
  IconFingerprint,
  IconLogout,
  IconShoppingCart,
  IconSwitchHorizontal,
} from '@tabler/icons-react';
import { Button, SegmentedControl, Text } from '@mantine/core';
import classes from './NavbarSegmented.module.css';
import Link from 'next/link'; // Import Link from Next.js

const tabs = {
  account: [
    { link: '/air-pollution', label: 'کاهش آلودگی هوا', icon: IconFingerprint },
    { link: '/animal-protection', label: 'حفاظت از حیوانات', icon: IconFingerprint },
    { link: '/tree-preservation', label: 'حفاظت از درختان', icon: IconFingerprint },
    { link: '/waste-reduction', label: 'کاهش زباله', icon: IconFingerprint },
    { link: '/water-conservation', label: 'صرفه جویی در آب', icon: IconFingerprint },
  ],
  
  general: [
    { link: 'https://ainovelist.github.io/kids', label: 'قصه گو', icon: IconShoppingCart },
  ],
};

export function NavbarSegmented() {
  const [section, setSection] = useState<'account' | 'general'>('account');
  const [active, setActive] = useState('Billing');

  const links = tabs[section].map((item) => (
    <Button
    component={Link}
    href={item.link}
    color="blue"
    fullWidth
    justify="space-between"
    mt="md"
    radius="md"
    variant="transparent"
    leftSection={<item.icon size={14} />}
    rightSection={<span />}
    size='compact-md'
    key={item.label}
  >
    {item.label}
  </Button>
  ));

  return (
    <nav className={classes.navbar}>
      <div>
        <Text fw={500} size="sm" className={classes.title} c="dimmed" mb="xs">
          Ai Novelist
        </Text>

        <SegmentedControl
          value={section}
          onChange={(value: any) => setSection(value)}
          transitionTimingFunction="ease"
          fullWidth
          data={[
            { label: 'قصه‌ها', value: 'account' },
            { label: 'قصه‌گو', value: 'general' },
          ]}
        />
      </div>

      <div className={classes.navbarMain}>{links}</div>

      <div className={classes.footer}>
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>تغییر مدل</span>
        </a>

        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>خروج</span>
        </a>
      </div>
    </nav>
  );
}
