'use client';

import { Modal } from '@/components/ui';
import { clsx } from 'clsx';

interface Entity {
  id: number;
  title: string;
  parties: string;
  value: string;
  type: string;
  deadline: string;
  notes: string;
}

interface EntityDetailModalProps {
  item: Entity;
  open: boolean;
  onClose: () => void;
}

const EntityDetailModal = ({ item, open, onClose }: EntityDetailModalProps) => {
  const handleApproval = () => {
    console.log('Entity approved!');
  };

  const handleRejection = () => {
    console.log('Entity rejected!');
  };

  const handleArchival = () => {
    console.log('Entity archived!');
  };

  return (
    <Modal open={open} onClose={onClose}>
      <h2 className="modal-title">{item.title}</h2>
      <div className="modal-content">
        <div className="grid grid-cols-2 gap-4">
          <p className="label">Parties:</p>
          <p className="value">{item.parties}</p>
          <p className="label">Value:</p>
          <p className="value">{item.value}</p>
          <p className="label">Type:</p>
          <p className="value">{item.type}</p>
          <p className="label">Deadline:</p>
          <p className="value">{item.deadline}</p>
          <p className="label">Notes:</p>
          <p className="value">{item.notes}</p>
        </div>
      </div>
      <div className="modal-actions">
        <button className="btn btn-primary" onClick={handleApproval}>
          Approve
        </button>
        <button className="btn btn-secondary" onClick={handleRejection}>
          Reject
        </button>
        <button className="btn btn-tertiary" onClick={handleArchival}>
          Archive
        </button>
      </div>
    </Modal>
  );
};

interface ConfirmModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  message: string;
  onConfirm: () => void;
  variant: 'danger' | 'info';
}

const ConfirmModal = ({ open, onClose, title, message, onConfirm, variant }: ConfirmModalProps) => {
  const className = clsx('modal', { 'modal-danger': variant === 'danger' });

  return (
    <Modal open={open} onClose={onClose} className={className}>
      <h2 className="modal-title">{title}</h2>
      <p className="modal-message">{message}</p>
      <div className="modal-actions">
        <button className="btn btn-confirm" onClick={onConfirm}>
          Confirm
        </button>
        <button className="btn btn-cancel" onClick={onClose}>
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export { EntityDetailModal, ConfirmModal };