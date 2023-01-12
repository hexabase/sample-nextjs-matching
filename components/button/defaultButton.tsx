import React from 'react';

interface ButtonStatus {
  disabled?: boolean;
  roundedFull?: boolean;
  contentButton: string | React.ReactNode;
}

export default function DefaultButton({
  disabled,
  roundedFull,
  contentButton,
}: ButtonStatus) {
  const buttonStatus = disabled
    ? 'cursor-not-allowed bg-lightSilver hover:bg-argent'
    : 'bg-pastelRed hover:bg-jellyBean';

  const buttonType = roundedFull ? 'rounded-full p-4 sm:w-72 w-full' : null;
  return (
    <div>
      <button
        className={` text-lg text-white  lg:mx-auto  ${buttonStatus} ${buttonType}`}
        type={!disabled ? 'submit' : 'button'}
      >
        {contentButton}
      </button>
    </div>
  );
}
