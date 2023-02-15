'use client';

import React from 'react';

interface ButtonProps {
  disabled?: boolean;
  roundedFull?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({
  disabled,
  roundedFull,
  children,
  onClick,
}: ButtonProps) {
  const buttonStatus = disabled
    ? 'cursor-not-allowed bg-lightSilver hover:bg-argent'
    : 'bg-pastelRed hover:bg-jellyBean';

  const buttonType = roundedFull
    ? 'rounded-full p-4 sm:w-72 w-full'
    : 'rounded-sm';

  const handleClick = () => {
    onClick && onClick();
  };
  return (
    <div>
      <button
        className={`text-lg font-bold text-white  lg:mx-auto  ${buttonStatus} ${buttonType}`}
        type={!disabled ? 'submit' : 'button'}
        onClick={handleClick}
      >
        {children}
      </button>
    </div>
  );
}
