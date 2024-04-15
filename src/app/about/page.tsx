import dynamic from 'next/dynamic';
import Section from '../section';

const Header = dynamic(() => import('../header'), { ssr: false });

export default function About() {
  return (
    <>
      <Header />
      <section
        id="about"
        className="min-h-screen flex flex-col items-left justify-start p-8 md:p-24 w-full md:w-8/12"
      >
        <div className="absolute top-32">
          <Section title="About Me" />
        </div>
        <div className="pt-32 md:pt-20">
          <h1 className="text-mainColor text-lg md:text-xl mb-2">
            My Programming Journey
          </h1>
          <p className="pl-4 text-slate-500 text-sm md:text-base mb-2">
            2017:
          </p>
          <ul className="list-disc pl-10 text-slate-500 text-sm md:text-base mb-2">
            <li>
              Tried to read Java for Dummies in the 7th grade, couldn&apos;t even set
              up Eclipse and declared programming was too hard 😂
            </li>
          </ul>
          <p className="pl-4 text-slate-500 text-sm md:text-base mb-2">
            2022:
          </p>
          <ul className="list-disc pl-10 text-slate-500 text-sm md:text-base mb-2">
            <li>
              Started my first year at Rutgers University, taking Intro CS and Linear
              Algebra
            </li>
            <li>
              Wrote a linear regression calculator in Java for a hackathon.
              Implemented all the math from scratch. This was my first time coming up
              with algorithms and putting them into code
            </li>
          </ul>
          <p className="pl-4 text-slate-500 text-sm md:text-base mb-2">
            2023:
          </p>
          <ul className="list-disc pl-10 text-slate-500 text-sm md:text-base mb-2">
            <li>Took DSA and Discrete Structures I</li>
            <li>
              Made an Obsidian-like note taking app with Electron, using pure
              JavaScript/HTML/CSS
            </li>
            <li>
              Developed a competitive typing game with React and Node, deployed on
              Firebase. Implemented a MySQL database through Google Cloud SQL
            </li>
            <ul className="list-disc pl-10 text-slate-500 text-sm md:text-base mb-2">
              <li>
                On March 24, 2024 at 11:59 PM, my 90 day GCP free trial ran out...
                unfortunately marked the end of deployment :(
              </li>
            </ul>
            <li>
              Took Computer Architecture, Discrete Structures II, and Linear
              Programming
            </li>
            <li>
              Built an object detection based CAPTCHA system by training my own
              YOLOv4-tiny model. Made a customizable image augmentation pipeline
            </li>
          </ul>
          <p className="pl-4 text-slate-500 text-sm md:text-base mb-2">
            2024:
          </p>
          <ul className="list-disc pl-10 text-slate-500 text-sm md:text-base mb-2">
            <li>
              Took Design and Analysis of Computer Algorithms, Data Management with
              Python, and Databases
            </li>
            <li>
              Did 3 months of research on POS tagging and dependency parsing.
              Attempted to create a HMM POS tagger from scratch and a shift-reduce
              dependency parser from scratch... miserably failed both
            </li>
            <li>
              Developed a grammar checker by combining spaCy&apos;s dependency
              parser with rule-based systems. Created training pipelines for
              spaCy&apos;s POS tagger and dependency parser to enable custom grammar
              rules and multi-language support
            </li>
            <ul className="list-disc pl-10 text-slate-500 text-sm md:text-base mb-2">
              <li>
                Worked with two friends on this; led all parts of the research and
                development process
              </li>
            </ul>
            <li>Made this portfolio website you&apos;re looking at right now with Next.js</li>
            <li>Took Intro to Deep Learning and Principles of Programming Languages</li>
          </ul>
          <h1 className="text-mainColor text-lg md:text-xl mb-2 mt-4">
            Fun (i guess) Facts
          </h1>
          <ul className="list-disc pl-10 text-slate-500 text-sm md:text-base mb-2">
            <li>
              I love animanga, am the IGL for a Valorant team, and help coach my high
              school&apos;s Esports team
            </li>
            <li>
              I love typing. 210 WPM on 15s test (78th global) and 177 WPM on 60s
              (129th global)
            </li>
            <li>
              I&apos;ve done 7 coast-to-coast road trips and have visited almost
              every major national park
            </li>
            <li>I lived in Oregon from 2018-2019</li>
            <li>
              In 2018, I heard an Aimer song for the first time in an anime ending.
              She&apos;s been my favorite artist ever since
            </li>
            <li>
              In 2021, I started learning Japanese... mainly just to understand Aimer
              lyrics
            </li>
            <li>In 2022, I started going to the gym and always look forward to leg day</li>
          </ul>
        </div>
      </section>
    </>
  );
}