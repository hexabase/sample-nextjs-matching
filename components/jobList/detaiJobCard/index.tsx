'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { getFile } from '../../../utils/apis';
import ImageSkeleton from '../../common/skeletons/imageSkeleton';

interface DetailCardProps {
  file_id?: string;
}

export default function DetailCard({ file_id }: DetailCardProps) {
  const [imageUrl, setImageUrl] = useState<string>();

  useEffect(() => {
    if (file_id) {
      const getImageUrl = async () => {
        try {
          const res = await getFile(file_id);
          const imageBytes = new Uint8Array(res.data);
          const blob = new Blob([imageBytes.buffer], { type: 'image' });
          const imageUrl = URL.createObjectURL(blob);
          setImageUrl(imageUrl);
        } catch (error) {
          console.log('error', error);
          setImageUrl('');
        }
      };

      getImageUrl();
    }
  }, [file_id]);

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
