import clsx from 'clsx';
import { m } from 'framer-motion';
import Link from 'next/link';


import {InsightIcon, PinIcon } from '@/components/Icons';


import type { TPostFrontMatter } from '@/types';

type PostPreviewProps = TPostFrontMatter & {
  slug: string;
  pinned?: boolean;
};

function PostPreview({
  title,
  description,
  slug,
  lang,
  pinned = false,
}: PostPreviewProps) {
  return (
    <article lang={lang}>
      <div
        key={slug}
        className={clsx(
          'group relative mb-6 block overflow-hidden bg-gradient-to-t',
          'sm:mb-0 sm:rounded-2xl',
          pinned
            ? [
                'border-divider-light',
                'sm:border sm:p-4 md:mt-6 md:p-6',
                'dark:border-divider-dark',
              ]
            : ['sm:p-4 md:p-6']
        )}
      >
        {/* shine effect */}
        {pinned && (
          <m.div
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: '100%', opacity: [0, 1, 0, 0] }}
            transition={{
              delay: 1.4,
              duration: 1.84,
              ease: [0.85, 0, 0.15, 1],
            }}
            className="absolute -inset-x-64 inset-y-0 z-[-1]"
          >
            <div
              className={clsx(
                'absolute inset-y-0 w-10 -rotate-45 scale-[4] bg-black opacity-[0.08]',
                'dark:bg-white dark:opacity-[0.14]'
              )}
            />
          </m.div>
        )}
        {pinned && (
          <div
            className={clsx(
              'relative mb-4 flex items-center gap-2 font-semibold text-slate-500',
              'sm:text-slate-500',
              'dark:sm:text-accent-400 dark:text-slate-400'
            )}
          >
            <PinIcon className={clsx('h-5 w-5')} />
            Virtual Programming Courses
          </div>
        )}
        <div
          className={clsx(
            'text-slate mb-2 flex flex-col gap-2 text-xs text-slate-500',
            'dark:text-slate-400 md:mb-1'
          )}
        >
          <div className={clsx('flex gap-1')}>
            2023-2024
          </div>
        </div>
        <div className={clsx('mb-2')}>
          <h2
            className={clsx(
              'text-xl font-extrabold text-slate-700',
              'md:text-2xl',
              'dark:text-slate-300'
            )}
          >
            {title}
          </h2>
        </div>
        <p
          className={clsx(
            'mb-3 block leading-relaxed text-slate-600',
            'dark:text-slate-400'
          )}
        >
          {description}
        </p>
        <div
          className={clsx(
            'flex items-center gap-2 text-xs text-slate-600',
            'dark:text-slate-400',
            pinned ? ['mb-4', 'sm:mb-1'] : 'mb-4'
          )}
        >
          <InsightIcon className={clsx('-mt-0.5 h-4 w-4')} />
          <span className={clsx('flex gap-1.5')}>
            <span>Sol Calderón Courses</span>
          </span>
        </div>
        <Link href="/Sol-Calderon.pdf" style={{color: "#a78cfa", fontSize: 15, fontWeight: "bold"}}>See estudies in my CV</Link>

      </div>
    </article>
  );
}

export default PostPreview;
