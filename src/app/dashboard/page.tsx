'use client';

import { MOCK_EVENTS, STATS, RECENT_ACTIVITY, DEMO_USER } from '@/lib/data';
import { StatCard, Card, CardHeader, CardTitle, CardContent, Badge, Avatar } from '@/components/ui';
import { clsx } from 'clsx';
import { useState } from 'react';

const greeting = `Good morning, ${DEMO_USER.name}`;
const today = new Date().toLocaleDateString();

const statCards = [
  { label: 'Total Events', value: STATS.totalEvents },
  { label: 'Upcoming Events', value: STATS.upcomingEvents },
  { label: 'Attendees', value: STATS.attendees },
  { label: 'Sessions', value: STATS.sessions },
];

const mainEntity = MOCK_EVENTS;

const recentActivity = RECENT_ACTIVITY;

const quickActions = [
  { label: 'New Event', href: '/dashboard/event-scheduling' },
  { label: 'New Session', href: '/dashboard/session-management' },
  { label: 'New Attendee', href: '/dashboard/attendee-management' },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('events');

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">{greeting}</h2>
        <p className="text-gray-600">{today}</p>
      </div>
      <div className="flex flex-wrap mb-4">
        {statCards.map((card, index) => (
          <StatCard key={index} label={card.label} value={card.value} />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="col-span-2 lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Events</CardTitle>
            </CardHeader>
            <CardContent>
              <table className="w-full table-auto">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2">ID</th>
                    <th className="px-4 py-2">Title</th>
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mainEntity.map((event, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-4 py-2">{event.id}</td>
                      <td className="px-4 py-2">{event.title}</td>
                      <td className="px-4 py-2">{event.date}</td>
                      <td className="px-4 py-2">
                        <Badge variant={event.status === 'active' ? 'success' : 'pending'}>{event.status}</Badge>
                      </td>
                      <td className="px-4 py-2">
                        <button className="btn btn-sm btn-primary">View</button>
                        <button className="btn btn-sm btn-secondary">Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-1 lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                {recentActivity.map((activity, index) => (
                  <li key={index} className="flex items-center py-2">
                    <Avatar initials={activity.userInitials} />
                    <span className="ml-2">{activity.text}</span>
                    <span className="ml-2 text-gray-600">{activity.timeAgo}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="flex flex-wrap mb-4">
        {quickActions.map((action, index) => (
          <button key={index} className="btn btn-primary mr-2" onClick={() => setActiveTab(action.href)}>
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
}