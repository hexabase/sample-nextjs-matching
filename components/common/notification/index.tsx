'use client';

import { Dispatch, SetStateAction, useCallback, useEffect } from 'react';

import classNames from 'classnames';
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';

import { TNotification } from '../../../types';

interface NotificationProps {
  notification: TNotification;
  setNotification: Dispatch<SetStateAction<TNotification>>;
}

export default function Notification({
  notification,
  setNotification,
}: NotificationProps) {
  const { type, open, message } = notification;

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

  const handleClose = useCallback(() => {
    setNotification({ open: false });
  }, [setNotification]);

  useEffect(() => {
    open &&
      setTimeout(() => {
        handleClose();
      }, 3000);
  }, [handleClose, open]);

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
