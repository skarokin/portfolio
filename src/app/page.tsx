'use client';

import dynamic from 'next/dynamic';
import { useState, ReactNode } from 'react';
import contentMap from './contentMap';

const MDEditor = dynamic(() => import('./md-editor'), { ssr: false });
const FS = dynamic(() => import('./fs'), { ssr: false });

const Background: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="background">{children}</div>;
};

export default function Home() {

  const [currentPage, setCurrentPage] = useState<string>('/readme.md');

  const changePage = (newPage: string) => {
    setCurrentPage(newPage);
  }

  const currentPageData = contentMap[currentPage as keyof typeof contentMap];
  const { content, url, children } = currentPageData;

  return (
    <>
      <Background>
        <section className={'min-h-screen p-8 lg:p-24 w-full'}>
          <div className="flex flex-col lg:flex-row items-start">
            <FS changePage={changePage}/>
            <MDEditor url={url} content={content}>
              {children}
            </MDEditor>
          </div>
        </section>
      </Background>
    </>
  );
}