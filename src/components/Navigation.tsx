import Link from 'next/link';

export function Navigation() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto p-4 flex justify-between">
        <Link href="/">
          <a className="text-2xl font-bold text-gray-900">Virtual Event Automator</a>
        </Link>
        <ul className="flex gap-4">
          <li>
            <Link href="/dashboard">
              <a className="text-sm font-semibold text-gray-500 hover:text-gray-900">Dashboard</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}