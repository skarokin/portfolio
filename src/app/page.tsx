import Contacts from './contacts';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const Header = dynamic(() => import('./header'), { ssr: false });

export default function Home() {
  return (
    <>
      <Header />
      <section
        id="home"
        className={'bg-bgColor flex min-h-screen flex-col items-left justify-center p-8 md:p-24 w-full md:w-8/12'}
      >
        <div className="">
          <div className="flex items-center justify-center mb-8">
            <Image
              src="./portfoliosean.png"
              alt="portfoliosean"
              width={300}
              height={225}
              className="w-48 h-auto rounded-full border-2 md:w-64 md:h-auto"
            />
          </div>
          <Contacts />
          <div className="mb-2">
            <h1 className="text-slate-500 text-2xl font-bold md:text-3xl">
              Sean Kim
            </h1>
            <h6 className="text-slate-500 text-lg md:text-xl">
              Rutgers University-New Brunswick, 2026
            </h6>
          </div>
        </div>
        <div className="mb-8">
          <p className="text-slate-500 text-sm md:text-base mb-2">
            &nbsp;Hi, my name is Sean! I&apos;m pursuing a bachelor&apos;s in
            computer science at Rutgers University. <br />
            &nbsp;I have experience in full-stack development, data science, and
            ML engineering. <br />
            &nbsp;My 2024 research objectives include natural language
            processing and compiler design. <br />
            <br />
            &nbsp;If you&apos;re a recruiter, hi! I&apos;m open to internship
            positions. Feel free to take a look at my resume and contact me.
            <br />
            &nbsp;If you&apos;re a student, hi! I&apos;m open for collaboration,
            or just to chat.
          </p>
        </div>
      </section>
    </>
  );
}