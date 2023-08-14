'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import ImageSkeleton from '../../common/skeletons/imageSkeleton';
import { FileObject } from '@hexabase/hexabase-js';

interface DetailCardProps {
  file?: FileObject;
}

export default function DetailCard({ file }: DetailCardProps) {
  const [imageUrl, setImageUrl] = useState<string>();

  useEffect(() => {
    if (!file) return;
    const getImageUrl = async () => {
      try {
        const blob = await file.download() as unknown;
        const imageUrl = URL.createObjectURL(blob as Blob);
        setImageUrl(imageUrl);
      } catch (error) {
        console.log('error', error);
        setImageUrl('');
      }
    };
    getImageUrl();
  }, [file]);

  return (
    <div className={!imageUrl ? ("w-[80%] mx-auto") : ("")}>
      {!imageUrl ? (
        <div className="h-52 w-full md:h-72">
          <ImageSkeleton className="bg-gray opacity-10" />
        </div>
      ) : (
        <div className="h-52 w-full md:h-72">
          <Image src={imageUrl} alt="image1" width={550} height={300} />
        </div>
      )}
    </div>
  );
}
