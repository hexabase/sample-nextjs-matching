import Button from "../../button"
import Image from 'next/image';

const EmptyJobList = () => {
  return (
    <>
      <div className="modal py-12 px-5 xl:py-28">
        <Image
          src="/emptyJob.png"
          alt="logo"
          width={299}
          height={168}
          className="mx-auto"
        />

        <p className="pt-4 text-2xl font-bold lg:text-[32px] xl:pt-5">
          まだ求人が１件も登録されていません。
        </p>

        <div
          className="pt-9 w-full xl:pt-7"

        >
          <Button roundedFull>新規求人を登録する</Button>
        </div>
      </div>
    </>
  )
}

export default EmptyJobList