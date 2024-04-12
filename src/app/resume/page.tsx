import dynamic from 'next/dynamic';
import Section from '../section';

const Header = dynamic(() => import('../header'), { ssr: false });

export default function Resume() {
  return (
    <>
      <Header />
      <section
        id="resume"
        className="bg-bgColor flex min-h-screen flex-col items-left justify-center p-8 md:p-24 w-full md:w-8/12"
      >
        <div className="absolute top-32">
          <Section title="Resume" />
        </div>
        <div className="flex justify-center w-full mt-24">
          <iframe
            src="./resume.pdf"
            width="100%"
            height="800px"
            loading="lazy"
            title="resume"
            className="md:h-[1000px]"
          ></iframe>
        </div>
      </section>
    </>
  );
}