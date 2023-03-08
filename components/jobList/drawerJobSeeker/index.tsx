import { SetStateAction } from 'react';

import { EnvelopeIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/solid';

import { LJobSeekers } from '../../../types/jobsList';

interface IDrawer {
  setShowDrawer: React.Dispatch<SetStateAction<boolean>>;
  drawerContent: LJobSeekers;
}
const Drawer = ({ setShowDrawer, drawerContent }: IDrawer) => {
  return (
    <div className="z-5 1s absolute top-0 right-0  h-screen  w-[320px] transform bg-[#FFFFFF] shadow-[0_10px_15px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out md:w-[650px] lg:h-[1323px]">
      <div className="py-6 px-5" onClick={() => setShowDrawer(false)}>
        <XMarkIcon width={16} height={16} />
      </div>
      <div className="px-12 md:mt-[110px]">
        <div className="flex items-center">
          <div>
            <UserIcon width={16} height={16} />
          </div>
          <p className="text-2xl font-bold">{drawerContent.name}</p>
        </div>

        <div className="flex items-center">
          <div>
            <EnvelopeIcon width={16} height={16} />
          </div>
          <p className="text-xl">{drawerContent.email}</p>
        </div>
        <div className="border-b border-b-[#E1E1E1] pb-4">
          <p className="font-base font-bold md:mt-[50px]">自己PR</p>
        </div>

        <div className="mt-[22px]">
          <div className="text-xs">
            {drawerContent.self_promotion.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
