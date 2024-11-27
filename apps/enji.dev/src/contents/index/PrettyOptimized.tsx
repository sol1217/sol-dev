import clsx from 'clsx';

import SectionTitle from '@/components/sections/SectionTitle';

function PrettyOptimized() {
  return (
    <header className={clsx('mb-8')}>
      <SectionTitle
        text="Contact Section"
        title="Contact Information."
        caption="/work/contact"
        description={`Feel free to get in touch via social media, email or phone, I am available at any time
.`}
      />
    </header>
  );
}

export default PrettyOptimized;
