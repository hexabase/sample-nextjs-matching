import './globals.css';
import Image from 'next/image';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <main>
          <header>
            <div></div>
          </header>
          {children}
          <footer className="relative bg-eerieBlack pt-16 pb-32 text-white md:pb-1 md:pt-12">
            <div className="absolute inset-x-1/2 top-[-26px] flex h-[52px] w-[52px] translate-x-[-50%] items-center justify-center rounded-full bg-pastelRed sm:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6 stroke-2 text-black"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            </div>
            <div className="container-reponesive">
              <div className="sm:flex sm:justify-between">
                <div className="flex items-center justify-center">
                  <Image
                    src="images/HEXA-JOB-logo-mark.svg"
                    alt="logo"
                    width={167}
                    height={38}
                  />
                </div>
                <div className="grid grid-flow-col grid-rows-2 gap-3 py-16 text-[9px] font-medium leading-3 sm:text-sm sm:leading-5">
                  <div>
                    <p className="text-spanishGray">お仕事を探している人</p>
                    <p>求人一覧ページ</p>
                    <p>ご利用方法・注意事項</p>
                  </div>
                  <div>
                    <p className="text-spanishGray">お仕事をして欲しい会社</p>
                    <p>ログイン / 求人を出す企業様</p>
                    <p>求人企業に登録する</p>
                  </div>
                  <div>
                    <p className="text-spanishGray">カンパニー</p>
                    <p>運営会社</p>
                    <p>プライバシーポリシー</p>
                    <p>お問合せ</p>
                  </div>
                </div>
              </div>

              <p className="text-center text-xs font-normal leading-4 sm:text-left">
                ©️2022 Hexabase
              </p>
            </div>
          </footer>
        </main>
      </body>
    </html>
  );
}
