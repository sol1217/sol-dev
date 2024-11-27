import clsx from 'clsx';

import segway from '../../../public/assets/images/segway-powersports.png';
import Image from "next/image";

interface SegwayPowersportProps {
  author?: string;
  license?: string;
  repository: string;
  description: string;
}

function SegwayPowersportProject({
  author = '',
  license = '',
  repository,
  description,
}: SegwayPowersportProps) {
  return (
    <div
      className={clsx(
        'h-full w-full bg-white p-4 text-sm text-slate-600',
        'dark:bg-slate-900 dark:text-slate-400'
      )}
    >
      <Image src={segway} alt="segway powersports" width={600} height={150}/>
    </div>
  );
}

export default SegwayPowersportProject;
