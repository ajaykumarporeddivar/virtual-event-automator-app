'use client';

import { useState } from 'react';
import { Input, Button } from '@/components/ui';
import { clsx } from 'clsx';
import { ExportButton } from './ExportButton';

interface EntityType {
  title: string;
  parties: string;
  value: string;
  type: string;
  deadline: string;
  notes: string;
}

interface CreateEntityFormProps {
  onEntityCreated: (entity: EntityType) => void;
}

const CreateEntityForm = ({ onEntityCreated }: CreateEntityFormProps) => {
  const [title, setTitle] = useState('');
  const [parties, setParties] = useState('');
  const [value, setValue] = useState('');
  const [type, setType] = useState('');
  const [deadline, setDeadline] = useState('');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newEntity: EntityType = {
      title,
      parties,
      value,
      type,
      deadline,
      notes,
    };
    onEntityCreated(newEntity);
    setIsSuccess(true);
    setTitle('');
    setParties('');
    setValue('');
    setType('');
    setDeadline('');
    setNotes('');
  };

  const className = clsx('form', { 'success-state': isSuccess });

  return (
    <form onSubmit={handleSubmit} className={className}>
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <Input
        type="text"
        value={parties}
        onChange={(e) => setParties(e.target.value)}
        placeholder="Parties"
      />
      <Input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Value"
      />
      <Input
        type="text"
        value={type}
        onChange={(e) => setType(e.target.value)}
        placeholder="Type"
      />
      <Input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        placeholder="Deadline"
      />
      <Input
        type="text"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Notes"
      />
      <Button type="submit">Create Entity</Button>
      {isSuccess && <p>Entity created successfully!</p>}
    </form>
  );
};

interface FilterBarProps {
  onFilter: (filterState: FilterState) => void;
}

type FilterState = {
  search: string;
  status: string;
  dateRange: string;
};

const FilterBar = ({ onFilter }: FilterBarProps) => {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [dateRange, setDateRange] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    onFilter({ search, status, dateRange });
  };

  const handleStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
    onFilter({ search, status, dateRange });
  };

  const handleDateRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateRange(e.target.value);
    onFilter({ search, status, dateRange });
  };

  return (
    <div className="filter-bar">
      <Input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search"
      />
      <select value={status} onChange={handleStatus}>
        <option value="">Select Status</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      <Input
        type="text"
        value={dateRange}
        onChange={handleDateRange}
        placeholder="Date Range"
      />
    </div>
  );
};

const ExportButton = () => {
  const handleExport = () => {
    // Simulate CSV export
    const csvData = 'Name,Email\nJohn Doe,john@example.com\nJane Doe,jane@example.com';
    const blob = new Blob([csvData], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'export.csv';
    link.click();
  };

  return (
    <Button onClick={handleExport}>Export to CSV</Button>
  );
};

export { CreateEntityForm, FilterBar, ExportButton };