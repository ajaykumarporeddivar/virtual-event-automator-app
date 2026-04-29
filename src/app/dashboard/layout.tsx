'use client';

import { AiOutlineTeam } from 'lucide-react';
import { BsCalendar2Event } from 'lucide-react';
import { IoPersonOutline } from 'lucide-react';
import { clsx } from 'clsx';
import AppSidebar from '@/components/layout/AppSidebar';
import AppHeader from '@/components/layout/AppHeader';
import DemoBanner from '@/components/layout/DemoBanner';

const navItems = [
  { label: 'Event Scheduling', icon: <BsCalendar2Event />, href: '/dashboard/event-scheduling' },
  { label: 'Session Management', icon: <AiOutlineTeam />, href: '/dashboard/session-management' },
  { label: 'Attendee Management', icon: <IoPersonOutline />, href: '/dashboard/attendee-management' },
  { label: 'Virtual Event Page', icon: <BsCalendar2Event />, href: '/dashboard/virtual-event-page' },
  { label: 'Integration with Popular Platforms', icon: <AiOutlineTeam />, href: '/dashboard/integration' },
  { label: 'Customizable', icon: <IoPersonOutline />, href: '/dashboard/customizable' },
  { label: 'Automation Service', icon: <BsCalendar2Event />, href: '/dashboard/automation' },
  { label: 'Dashboard Service', icon: <AiOutlineTeam />, href: '/dashboard/dashboard' },
];

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen">
      <AppSidebar navItems={navItems} />
      <div className="flex-1 flex flex-col overflow-y-auto">
        <AppHeader projectName="Virtual Event Automator" />
        <DemoBanner />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}