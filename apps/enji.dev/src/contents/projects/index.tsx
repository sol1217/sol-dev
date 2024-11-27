import clsx from 'clsx';
import { useState } from 'react';

import {GitHubIcon, NpmIcon, SegwayLogo} from '@/components/Icons';
import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';
import AppWindow from '@/components/wireframes/AppWindow';
import HawkcodedProject from "@/components/wireframes/Hawkcoded";
import SegwayPowersportProject from "@/components/wireframes/SegwayPowersports";

function ProjectsContents() {
  const [currentState, setCurrentState] = useState<'npm' | 'github' | 'country'>('github');


  return (
    <>
      <SectionTitle
        text="https://github.com/segway-powersports"
        title="Segway PowerSports (Web Site)"
        caption="https://github.com/sol1217/segway-powersports"
        description="Frontend developer (freelancer) Developed an attractive interface to market the company's products. created with (Next js, Typescript, CSS)"

      />
      <SectionTitle
        text="https://repsellcr.com/"
        title="Repsell Internacional"
        caption="https://repsellcr.com/"
        description="I collaborated with a company in the creation of a Web site where clients were looking for options to see the products. Skills(Next js, Typescript, CSS, HTML, Javascript)"

      />
      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <div className={clsx('hidden flex-1 flex-col gap-3 pt-8', 'lg:flex')}>
            <div className={clsx('flex flex-col gap-3')}>
              <SectionButton
                title="Repsell Project"
                href="https://repsellcr.com/"
                icon={<GitHubIcon className={clsx('my-2 h-16 w-16')} />}
                description="Tap to see the View of the project"
                active={currentState === 'npm'}
                onClick={() => setCurrentState('npm')}
              />
              <SectionButton
                title="Segway Powersports Project"
                href="https://github.com/sol1217/segway-powersports"
                icon={<GitHubIcon className={clsx('my-2 h-16 w-16')} />}
                description="Tap to see the github of the project"
                active={currentState === 'github'}
                onClick={() => setCurrentState('github')}
              />

            </div>
          </div>
          <div className={clsx('w-full', 'lg:w-auto')}>
            <div className={clsx('-mt-[41px]')}>
              <div className={clsx('w-full', 'lg:h-[400px] lg:w-[600px]')}>
                <AppWindow
                  type="browser"
                  browserTabs={[
                    {
                      icon: <SegwayLogo className="h-4 w-4" />,
                      title: 'Segway PowerSports',
                      isActive: currentState === 'github',
                    },
                    {
                      icon: <NpmIcon className="h-4 w-4" />,
                      title: 'Hawkcoded',
                      isActive: currentState === 'npm',
                    },
                  ]}
                >
                  {currentState === 'npm' && (
                    <HawkcodedProject
                      packageName="tailwindcss-accent"
                      description="Adds accent colors for more dynamic and flexible color utilization."
                      isWithTypeScript
                    />
                  )}
                  {currentState === 'github' && (
                    <SegwayPowersportProject
                      author="enjidev"
                      license="MIT"
                      repository="tailwindcss-accent"
                      description="Adds accent colors for more dynamic and flexible color utilization."
                    />
                  )}

                </AppWindow>
              </div>

            </div>
          </div>
        </div>
        <SectionTitle
          text="http://order-bar"
          title="No Country (Bar-Order)"
          caption="http://surl.li/nazfyk"
          description="Contributed to the development of a mobile application using React Native, working as a team with other developers."

        />
        <SectionTitle
          text=""
          title="Cabysis (IOS/ANDROID)"
          caption=""
          description="Costa Rica App (In progress)"
        />
      </SectionContent>
    </>
  );
}

export default ProjectsContents;
