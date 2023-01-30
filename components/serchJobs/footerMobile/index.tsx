import Search from '../../layout/search';
import { QuestionMarkCircleIcon } from '@heroicons/react/20/solid';

export default function FooterMobile() {
  return (
    <div className="container-responsive fixed bottom-0 left-0 z-20 h-28 bg-pastelRed">
      <div className="flex items-center gap-3 px-3 pt-6 pb-14">
        <div className="w-11/12">
          <Search />
        </div>

        <div className="h-7 w-7">
          <QuestionMarkCircleIcon />
        </div>
      </div>
    </div>
  );
}
