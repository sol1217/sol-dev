import clsx from 'clsx';

import SectionTitle from '@/components/sections/SectionTitle';

function DetailOriented() {
  return (
    <header className={clsx('mb-8')}>
      <SectionTitle
        text="Experience Section"
        title="My professional career as a Frontend developer"
        caption="/work/experience"
        description="Segway Powersports (Jul 2023 - Feb 2024): Created an interface from scratch, where the company's products will be displayed."
      />
    </header>
  );
}


export default DetailOriented;
