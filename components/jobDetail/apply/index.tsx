
interface ApplyProps {
  handleOpenModal : () => void;
}

export default function Apply({handleOpenModal}: ApplyProps) {
  return (
    <>
      <p className="mb-2 text-xs font-medium sm:text-base">
        \ 最短30秒!カンタン入力！/
      </p>
      <button onClick={handleOpenModal} className="rounded-[40px] bg-pastelRed py-4 px-16 text-lg font-bold text-white">
        この求人に応募する
      </button>
    </>
  );
}
