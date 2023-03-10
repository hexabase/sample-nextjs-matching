import { useRouter } from 'next/navigation';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

const menuLists = [
  {
    title: 'お仕事を探している人',
    items: [
      {
        itemTitle: '求人一覧ページ',
        link: '/',
      }
    ],
  },
  {
    title: 'お仕事をして欲しい会社',
    items: [
      {
        itemTitle: 'ログイン / 求人を出す企業様',
        link: '/auth/login',
      },
      {
        itemTitle: '求人企業に登録する',
        link: '/auth/register',
      },
    ],
  },
  {
    title: '運営会社情報',
    items: [
      {
        itemTitle: '運営会社',
        link: 'https://www.hexabase.com/',
      },
      {
        itemTitle: 'プライバシーポリシー',
        link: 'https://www.hexabase.com/privacy-policy/',
      },
      {
        itemTitle: 'お問合せ',
        link: 'https://www.hexabase.com/contact-us/',
      },
    ],
  },
];

export default function SPMenus() {
  const router = useRouter();
  const regex = new RegExp('https://', 'gi');

  return (
    <main className="mt-5">
      <div className="grid grid-cols-1 divide-y divide-chineseWhite">
        {menuLists[0] &&
          menuLists.map((menu, index) => (
            <div key={index}>
              <p className="flex h-10 items-center justify-between text-spanishGray">
                {menu.title}
              </p>
              {menu.items[0] &&
                menu.items.map((item, indexItem) => (
                  <div
                    key={indexItem}
                    className="flex h-10 items-center justify-between"
                    onClick={() => {
                      if (item.link.match(regex)) {
                        window.open(item.link, '_blank', 'noopener,noreferrer');
                      } else {
                        router.push(item.link);
                      }
                    }}
                  >
                    <p>{item.itemTitle}</p>
                    <ChevronRightIcon className="h-5 w-5" />
                  </div>
                ))}
            </div>
          ))}
      </div>
    </main>
  );
}
