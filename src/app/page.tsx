'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect, ReactNode } from 'react';
import contentMap from './contentMap';

const MDEditor = dynamic(() => import('./md-editor'), { ssr: false });
const FS = dynamic(() => import('./fs'), { ssr: false });

const Background: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="background">{children}</div>;
};

export default function Home() {

  const [currentPage, setCurrentPage] = useState<string>('#readme.md');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(window.location.hash);
    };
  
    // Set initial hash if it's empty
    if (!window.location.hash) {
      window.location.hash = '#readme.md';
    }
  
    window.addEventListener('hashchange', handleHashChange);
  
    // Call handleHashChange directly to update currentPage with the current hash
    handleHashChange();
  
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const currentPageData = contentMap[currentPage as keyof typeof contentMap];
  const { content, url, rawContent } = currentPageData;

  return (
    <>
      <Background>
        <section className={'min-h-screen p-8 lg:p-24 w-full'}>
          <div className="flex flex-col lg:flex-row items-start">
            <FS />
            <MDEditor url={url} content={content} rawContent={rawContent}/>
          </div>
        </section>
      </Background>
    </>
  );
}