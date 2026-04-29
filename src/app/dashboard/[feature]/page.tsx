'use client';

import { useEffect, useState } from 'react';
import { clsx } from 'clsx';
import { merge } from 'tailwind-merge';
import { ArrowRight } from 'lucide-react';
import data from '@/lib/data';

const FeaturePage = () => {
  const [slug, setSlug] = useState('');
  const [features, setFeatures] = useState(data.features);

  useEffect(() => {
    const pathname = window.location.pathname.split('/');
    setSlug(pathname.pop() || '');
  }, []);

  const featureViews = {
    'event-scheduling': (
      <div className={clsx('max-w-5xl mx-auto p-4')}>
        <h1 className="text-3xl font-bold mb-4">Event Scheduling</h1>
        <table className="w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Event Title</th>
              <th className="px-4 py-2">Start Date</th>
              <th className="px-4 py-2">End Date</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {features
              .filter((feature) => feature.slug === 'event-scheduling')
              .map((feature) => (
                <tr key={feature.id}>
                  <td className="px-4 py-2">{feature.title}</td>
                  <td className="px-4 py-2">{feature.startDate}</td>
                  <td className="px-4 py-2">{feature.endDate}</td>
                  <td className="px-4 py-2">
                    <span
                      className={clsx(
                        feature.status === 'scheduled'
                          ? 'bg-green-100 text-green-800'
                          : feature.status === 'cancelled'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-yellow-100 text-yellow-800',
                        'px-2 py-1 text-xs rounded'
                      )}
                    >
                      {feature.status}
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    ),
    'automated-email-notifications': (
      <div className={clsx('max-w-5xl mx-auto p-4')}>
        <h1 className="text-3xl font-bold mb-4">
          Automated Email Notifications
        </h1>
        <div className="grid grid-cols-1 gap-4">
          {features
            .filter((feature) => feature.slug === 'automated-email-notifications')
            .map((feature) => (
              <div key={feature.id} className="bg-white p-4 rounded">
                <h2 className="text-lg font-bold mb-2">{feature.title}</h2>
                <p className="text-gray-600">{feature.description}</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Send Notification
                </button>
              </div>
            ))}
        </div>
      </div>
    ),
    'virtual-event-page': (
      <div className={clsx('max-w-5xl mx-auto p-4')}>
        <h1 className="text-3xl font-bold mb-4">Virtual Event Page</h1>
        <div className="grid grid-cols-1 gap-4">
          {features
            .filter((feature) => feature.slug === 'virtual-event-page')
            .map((feature) => (
              <div key={feature.id} className="bg-white p-4 rounded">
                <h2 className="text-lg font-bold mb-2">{feature.title}</h2>
                <p className="text-gray-600">{feature.description}</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  View Event Page
                </button>
              </div>
            ))}
        </div>
      </div>
    ),
  };

  return (
    <div className={clsx('max-w-5xl mx-auto p-4')}>
      {featureViews[slug] ? (
        featureViews[slug]
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white p-4 rounded">
              <h2 className="text-lg font-bold mb-2">{feature.title}</h2>
              <p className="text-gray-600">{feature.description}</p>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => window.location.href = `/dashboard/${feature.slug}`}
              >
                View {feature.title}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FeaturePage;