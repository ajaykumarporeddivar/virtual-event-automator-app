import { useState, useEffect } from 'react';
import { DashboardCard } from './DashboardCard';

export default function Dashboard() {
  const [events, setEvents] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const eventData = [
      { id: 1, title: 'Event 1' },
      { id: 2, title: 'Event 2' },
    ];
    setEvents(eventData);

    const userData = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Doe' },
    ];
    setUsers(userData);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {events.map((event) => (
          <DashboardCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}