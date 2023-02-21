'use client';
import { useEffect } from 'react';

import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  XMarkIcon
} from '@heroicons/react/24/solid';
import classNames from 'classnames';

interface AlertsError {
  type: string;
  message: string;
  open: boolean;
  setOpen: () => void;
}

export default function AlertsError({
  type,
  message,
  open,
  setOpen,
}: AlertsError) {
  const notificationClass = classNames({
    'bg-aquamarine': type === 'success',
    'bg-yellow-400': type === 'warning',
    'bg-pastelRed': type === 'error',
    'border-t-4': true,
    'border-teal-500': type === 'success',
    'border-yellow-600': type === 'warning',
    'border-red': type === 'error',
    'rounded-b': true,
    'text-teal-900': type === 'success',
    'text-white': type === 'error' || 'warning',
    'px-4': true,
    'py-3': true,
    'shadow-md': true,
  });
  useEffect(() => {
    open &&
      setTimeout(() => {
        handleClose();
      }, 5000);
  }, [open]);

  const handleClose = () => {
    setOpen();
  };
  return (
    <>
      {open && (
        <div className=" fixed top-20 right-5 z-10">
          <div role="alert" className={notificationClass}>
            <div className="flex items-center gap-x-2">
              <div className="py-1">
                {type === 'success' ? (
                  <CheckCircleIcon width={30} height={30} />
                ) : (
                  <ExclamationCircleIcon width={30} height={30} />
                )}
              </div>
              <div className="text-left">
                <p className="text-sm">{message}</p>
              </div>
              <div className="ml-4">
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-2 rounded-full hover:bg-slate-100"
                >
                  <XMarkIcon width={18} height={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
