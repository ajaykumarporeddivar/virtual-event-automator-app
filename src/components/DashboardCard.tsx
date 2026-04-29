import { clsx } from 'clsx';
import { Lucide } from 'lucide-react';

interface DashboardCardProps {
  event: { id: number; title: string };
}

export function DashboardCard({ event }: DashboardCardProps) {
  return (
    <div className={clsx('w-80 p-4 bg-white rounded-lg shadow-lg')}>
      <h2 className="text-2xl font-bold text-gray-900">{event.title}</h2>
      <p className="text-gray-500 text-sm">Event ID: {event.id}</p>
      <div className="flex gap-2">
        <button className="px-4 py-2 bg-black text-white rounded-lg text-sm font-semibold hover:bg-gray-800">
          View Event
        </button>
        <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-semibold hover:bg-gray-50">
          Edit Event
        </button>
      </div>
    </div>
  );
}