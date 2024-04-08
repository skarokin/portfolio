import dynamic from 'next/dynamic';
import Section from '../section';

const Header = dynamic(() => import('../header'), { ssr: false });

export default function About() {
    return (
        <>
            <Header />
            <section id="about" className="min-h-screen flex flex-col items-left justify-start p-24 w-8/12">
                <div className="absolute top-32">
                    <Section title="About Me"/>
                </div>
                <div className="relative mt-24">
                    <h1 className="text-mainColor text-xl mb-2">My Programming Journey</h1>
                        <p className="text-slate-500 text-base mb-2">
                            &nbsp; 2017:
                        </p>
                        <ul className="list-disc pl-10 text-slate-500 text-base mb-2">
                            <li>Tried to read Java for Dummies in the 7th grade, couldn&apos;t even set up Eclipse and declared programming was too hard 😂</li>
                        </ul>
                        <p className="text-slate-500 text-base mb-2">
                            &nbsp; 2022:
                        </p>
                        <ul className="list-disc pl-10 text-slate-500 text-base mb-2">
                            <li>Started my first year at Rutgers University, taking Intro CS and Linear Algebra</li>
                            <li>Wrote a linear regression calculator in Java for a hackathon. Implemented all the math from scratch. This was my first time coming up with algorithms and putting them into code</li>
                        </ul>
                        <p className="text-slate-500 text-base mb-2">
                            &nbsp; 2023:
                        </p>
                        <ul className="list-disc pl-10 text-slate-500 text-base mb-2">
                            <li>Took DSA and Discrete Structures I</li>
                            <li>Made an Obsidian-like note taking app with Electron, using pure JavaScript/HTML/CSS</li>
                            <li>Developed a competitive typing game with React and Node, deployed on Firebase</li>
                            <li>Built an object detection based CAPTCHA system by training my own YOLOv4-tiny model</li>
                            <li>Took Computer Architecture, Discrete Structures II, and Linear Programming</li>
                        </ul>
                        <p className="text-slate-500 text-base mb-2">
                        &nbsp; 2024:
                        </p>
                        <ul className="list-disc pl-10 text-slate-500 text-base mb-2">
                            <li>Took Design and Analysis of Computer Algorithms, Data Management with Python, and Databases</li>
                            <li>Developed a grammar checker by combining spaCy&apos;s dependency parser with rule-based systems. Created training pipelines to support any language with treebank data and custom grammar rules</li>
                            <ul className="list-disc pl-10 text-slate-500 text-base mb-2">
                                <li>Worked with a researcher and two friends on this, led all parts of the research and development process</li>
                            </ul>
                            <li>Made this portfolio website you&apos;re looking at right now with Next.js</li>
                        </ul>
                    <h1 className="text-mainColor text-xl mb-2">Fun (i guess) Facts</h1>
                        <p className="text-slate-500 text-base mb-2">
                            &nbsp; I love animanga, am the IGL for a Valorant team, and help coach my high school&apos;s Esports team <br/>
                            &nbsp; I&apos;ve done 7 coast-to-coast road trips and have visited almost every major national park<br/>
                            &nbsp; I lived in Oregon from 2018-2019 <br/>
                            &nbsp; In 2018, I heard an Aimer song for the first time in an anime ending... she&apos;s been my favorite artist ever since <br/>
                            &nbsp; In 2021, I started learning Japanese (mainly just to understand Aimer lyrics) <br/>
                            &nbsp; In 2022, I started going to the gym and fell in love with health and fitness <br/>
                        </p>
                </div>
            </section>
        </>
    );
}