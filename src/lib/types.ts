// Define TypeScript interfaces for every entity in the FORGE spec
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'event_planner' | 'marketer';
  createdAt: string;
  updatedAt: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  attendees: Attendee[];
  sessions: Session[];
  createdAt: string;
}

export interface Attendee {
  id: string;
  name: string;
  email: string;
  event: Event;
  registeredAt: string;
}

export interface Session {
  id: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  speaker: User;
  event: Event;
  createdAt: string;
}

export interface Notification {
  id: string;
  message: string;
  sender: User;
  receiver: User | Attendee;
  sentAt: string;
}

export interface Automation {
  id: string;
  type: 'reminder' | 'notification';
  event: Event;
  triggeredAt: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}

export interface ApiResponse<T> {
  ok: boolean;
  data?: T;
  error?: string;
}