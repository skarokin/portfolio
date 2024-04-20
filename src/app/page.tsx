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

  const [content, setContent] = useState<string>(contentMap['/readme.md'].content);
  const [url, setUrl] = useState<string>(contentMap['/readme.md'].url);
  const [children, setChildren] = useState<ReactNode>(contentMap['/readme.md'].children);
  const [currentPage, setCurrentPage] = useState<string>('/readme.md');

  const changePage = (newPage: string) => {
    setCurrentPage(newPage);
    setContent(contentMap[newPage as keyof typeof contentMap].content);
    setUrl(contentMap[newPage as keyof typeof contentMap].url);
    setChildren(contentMap[newPage as keyof typeof contentMap].children);
  }

  return (
    <>
      <Background>
        <section className={'min-h-screen p-8 md:p-24 w-10/12 mt-16'}>
          <div className="flex-row md:flex items-start w-full">
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