import { ChevronRightIcon } from '@heroicons/react/20/solid';

const menuLists = [
  {
    title: 'お仕事を探している人',
    items: [
      {
        itemTitle: '求人一覧ページ',
      },
      {
        itemTitle: 'ご利用方法・注意事項',
      },
    ],
  },
  {
    title: 'お仕事をして欲しい会社',
    items: [
      {
        itemTitle: 'ログイン / 求人を出す企業様',
      },
      {
        itemTitle: '求人企業に登録する',
      },
    ],
  },
  {
    title: '運営会社情報',
    items: [
      {
        itemTitle: '運営会社',
      },
      {
        itemTitle: 'プライバシーポリシー',
      },
      {
        itemTitle: 'お問合せ',
      },
    ],
  },
];

export default function SPMenus() {
  return (
    <main className="mt-24">
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
                    onClick={() => console.log('click items', item)}
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
