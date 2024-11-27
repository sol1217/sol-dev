import clsx from 'clsx';
import Image from "next/image";
import repsell from "../../../public/assets/images/repsell.png";

interface HawkcodedProps {
  packageName: string;
  description: string;
  isWithTypeScript?: boolean;
}

function HawkcodedProject({
  packageName,
  description,
  isWithTypeScript = false,
}: HawkcodedProps) {
  return (
    <div
      className={clsx(
        'h-full w-full bg-white p-4 text-sm text-slate-600',
        'dark:bg-slate-900 dark:text-slate-400'
      )}
    >
      <Image src={repsell} alt="segway powersports" width={600} height={150}/>

    </div>
  );
}

export default HawkcodedProject;
