'use client';

interface LocalStorageState<T> {
  value: T;
  setValue: (value: T) => void;
}

const useLocalStorage = <T,>(key: string, initial: T): LocalStorageState<T> => {
  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initial;
  });

  const updateValue = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return { value, setValue: updateValue };
};

interface FilterState {
  filtered: unknown[];
  search: string;
  setSearch: (search: string) => void;
  status: string;
  setStatus: (status: string) => void;
}

const useFilter = (items: unknown[], fields: string[]) => {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');

  const filtered = items.filter((item: any) => {
    const itemString = fields.reduce((acc, field) => acc + item[field], '');
    return itemString.toLowerCase().includes(search.toLowerCase());
  });

  return {
    filtered,
    search,
    setSearch,
    status,
    setStatus,
  };
};

interface ModalState {
  open: boolean;
  close: () => void;
  isOpen: boolean;
  activeItem: unknown;
  setActiveItem: (item: unknown) => void;
}

const useModal = () => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<unknown>(null);

  const handleOpen = (item: unknown) => {
    setActiveItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setActiveItem(null);
    setOpen(false);
  };

  return {
    open,
    close: handleClose,
    isOpen: open,
    activeItem,
    setActiveItem: handleOpen,
  };
};

interface ToastState {
  toast: boolean;
  showToast: (message: string, type: string) => void;
}

const useDemoToast = () => {
  const [toast, setToast] = useState(false);

  const showToast = (message: string, type: string) => {
    setToast(true);
    setTimeout(() => {
      setToast(false);
    }, 3000);
  };

  return { toast, showToast };
};

export { useLocalStorage, useFilter, useModal, useDemoToast };