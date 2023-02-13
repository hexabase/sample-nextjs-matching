import { EnvelopeIcon, UserIcon, XMarkIcon } from "@heroicons/react/24/solid"
import { LJobSeekers } from "../../../types/jobsList";

interface IDrawer {
  setShowDrawer: any;
  drawerContent: LJobSeekers;
  showDrawer: boolean;
}
const Drawer = ({ setShowDrawer, drawerContent, showDrawer }: IDrawer) => {
  return (
    <div className='absolute h-screen z-5 top-0 right-0  bg-[#FFFFFF]  lg:h-[1323px] w-[320px] md:w-[650px] shadow-[0_10px_15px_rgba(0,0,0,0.1)] transform transition-transform duration-300 ease-in-out 1s'>
      <div className='py-6 px-5'
        onClick={() => setShowDrawer(false)}
      >
        <XMarkIcon width={16} height={16} />
      </div>
      <div className='px-12 md:mt-[110px]'>

        <div className='flex items-center'>
          <div >
            <UserIcon width={16} height={16} />
          </div>
          <p className='font-bold text-2xl'>{drawerContent.name}</p>
        </div>

        <div className='flex items-center'>
          <div >
            <EnvelopeIcon width={16} height={16} />
          </div>
          <p className='text-xl'>{drawerContent.mail}</p>
        </div>
        <div className="border-b border-b-[#E1E1E1] pb-4">
          <p className='font-base font-bold md:mt-[50px]'>自己PR</p>
        </div>

        <div className="mt-[22px]">
          <p className="text-xs">以前６ヶ月キッチンのバイトをしていたことがあります。経験年数は少ないですが、業務の基本的な流れは理解しています。また、複数の飲食店でのバイト経験があり、キッチン・ホールやレジ打ちなどの基本作業はできます。
            他者の作業状況を把握して臨機応変に対応しつつ、優先順位をつけて効率よく仕事を進められるようにしていました。コミュニケーションも同様です。周りの人が気持ちよく仕事に取り組めるよう、相手の立場に立ってものごとを考えることを心がけていました。
          </p>
        </div>

      </div>

      <div>

      </div>
    </div>
  )
}

export default Drawer