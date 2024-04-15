'use client'

import dynamic from 'next/dynamic';
import Section from '../section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Header = dynamic(() => import('../header'), { ssr: false });

export default function Resume() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpen2, setIsOpen2] = useState<boolean>(false);
  const [isOpen3, setIsOpen3] = useState<boolean>(false);

  return (
    <>
      <Header />
      <section
        id="resume"
        className="min-h-screen flex flex-col items-left justify-start p-8 md:p-24 w-full md:w-8/12"
      >
        <div className="absolute top-32 flex items-baseline">
          <Section title="Resume" />
          <div className="ml-4 flex flex-col items-center">
            <a href="https://docs.google.com/document/d/1ZN6fzOB1hM_DZ0hx0Q8nPTXasOPXdar-b_pZh_5av48/export?format=pdf" className="text-slate-500 transition-colors duration-300 ease-in-out fill-current hover:text-mainColor">
              <FontAwesomeIcon icon={faCloudArrowDown} className="w-6"/>
            </a>
          </div>
          <p className="ml-4 text-slate-500 text-sm">(Interested? Download the PDF! It has more info)</p>
        </div>
        <div className="pt-32 md:pt-20 md:pt-20 pl-4 grid grid-rows-2 text-slate-500">
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2 text-mainColor">EDUCATION</h2>
            <div className="border-l-4 border-slate-500 pl-4">
              <h3 className="text-lg md:text-xl font-bold">Rutgers University - New Brunswick</h3>
                <p>Bachelor of Arts - Computer Science</p>
                <p>Sep 2022 - May 2026</p>
                <ul className="list-disc pl-10 text-slate-500 text-sm md:text-base mb-2">
                  <li>GPA: 3.84</li>
                  <li>Relevant Coursework: DSA, Computer Architecture, Databases, Data Management, Deep Learning</li>
                  <li>Dean&apos;s List: 2022-2024</li>
                </ul>
            </div>
            <div className="mt-4">
              <h2 className="text-xl md:text-2xl font-bold mb-2 text-mainColor">EXPERIENCE</h2>
              <div className="border-l-4 border-slate-500 pl-4">
                <h3 className="text-lg md:text-xl font-bold">UHACCS Hackathon 2022</h3>
                <p>4th Place Participant</p>
                <p>Dec 2022</p>
                <ul className="list-disc pl-10 text-slate-500 text-sm md:text-base mb-2">
                  <li>Developed a linear regression library in Java.</li>
                  <li>Implemented least squares approximation from scratch.</li>
                </ul>
                <h3 className="text-lg md:text-xl font-bold">Cafe Leah</h3>
                <p>Barista</p>
                <p>May 2023 - Dec 2023</p>
                <ul className="list-disc pl-10 text-slate-500 text-sm md:text-base mb-2">
                  <li>Made an average of 20 bingsoo and 10 coffee per hour.</li>
                  <li>Oversaw daily inventory management, maintaing a 100% availability rate to match customer demand.</li>
                </ul>
              </div>
            </div>
            <div className="mt-4">
              <h2 className="text-xl md:text-2xl font-bold mb-2 text-mainColor">PROJECTS</h2>
              <div className="border-l-4 border-slate-500 pl-4">
                <h3 className="text-lg md:text-xl font-bold">ref:type</h3>
                <p>TypeScript, React, Node, Express, Google Cloud Platform</p>
                <ul className="list-disc pl-10 text-slate-500 text-sm md:text-base mb-2">
                  <li>Built a competitive typing game with React, deployed on Firebase Hosting.</li>
                  <li>Increased average typing speed of 120 users to over 100 WPM during a two week testing period.</li>
                  <li>Leveraged Firebase Cloud Functions written in Node for live updates of leaderboard status and user profiles.</li>
                  <li>Implemented a MySQL database through Google Cloud SQL.</li>
                </ul>
                <h3 className="text-lg md:text-xl font-bold">depparse-grammar</h3>
                <p>spaCy, Firebase, React</p>
                <ul className="list-disc pl-10 text-slate-500 text-sm md:text-base mb-2">
                  <li>Developed a multi-language grammar checking model with spaCy by combining a dependency parser with rule-based systems.</li>
                  <li>Integrated spaCy training pipelines into a corpus augmentor to train a dependency parser and part of speech tagger on user-defined grammar errors.</li>
                  <li>Deployed the English grammar checking model on Firebase Cloud Functions, available through a React interface.</li>
                  <li>Created an ETL pipeline to improve the model through analysis on user data.</li>
                </ul>
                <h3 className="text-lg md:text-xl font-bold">pycaptcha</h3>
                <p>OpenCV, PyTorch, Pandas, NumPy, Matplotlib</p>
                <ul className="list-disc pl-10 text-slate-500 text-sm md:text-base mb-2">
                  <li>Developed a CAPTCHA system with object detection using YOLOv4-tiny fine-tuned on a 12,000 image dataset.</li>
                  <li>Engineered a dataset augmentation pipeline with NumPy and Matplotlib to enhance training data for the model.</li>
                  <li>Built a post-processing pipeline with Pandas to discard images with false detections.</li>
                </ul>
              </div>
            </div>
            <div className="mt-4">
              <h2 className="text-xl md:text-2xl font-bold mb-2 text-mainColor">SKILLS</h2>
              <div className="border-l-4 border-slate-500 pl-4">
                <button 
                  onClick={(event) => {
                    event.preventDefault();
                    setIsOpen(!isOpen);}
                  } 
                  className="text-lg md:text-xl font-bold flex flex-row"
                >
                  Programming Languages 
                  <motion.div
                    animate={{ rotate: isOpen ? -90 : 0, translateY: isOpen ? "9px" : "0px" }}
                    transition={{ duration: 0.2 }}
                  >
                    <FontAwesomeIcon icon={faCaretDown} className="ml-4 w-4"/>
                  </motion.div>
                </button>
                  <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-2"
                    >
                      <div className="grid grid-cols-2 w-1/2">
                        <p className="mb-1">Java</p>
                        <p className="mb-1">C</p>
                        <p className="mb-1">Python</p>
                        <p className="mb-1">JavaScript</p>
                        <p className="mb-1">TypeScript</p>
                        <p className="mb-1">HTML/CSS</p>
                        <p className="mb-1">SQL</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <button 
                  onClick={(event) => {
                    event.preventDefault();
                    setIsOpen2(!isOpen2);}
                  } 
                  className="text-lg md:text-xl font-bold flex flex-row mt-4"
                >
                  Data Science/ML
                  <motion.div
                    animate={{ rotate: isOpen2 ? -90 : 0, translateY: isOpen2 ? "9px" : "0px" }}
                    transition={{ duration: 0.2 }}
                  >
                    <FontAwesomeIcon icon={faCaretDown} className="ml-4 w-4"/>
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isOpen2 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-2"
                    >
                      <div className="grid grid-cols-2 w-1/2">
                        <p className="mb-1">NumPy</p>
                        <p className="mb-1">Pandas</p>
                        <p className="mb-1">Matplotlib</p>
                        <p className="mb-1">spaCy</p>
                        <p className="mb-1">PyTorch</p>
                        <p className="mb-1">OpenCV</p>
                        <p className="mb-1">Jupyter Notebook</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <button 
                  onClick={(event) => {
                    event.preventDefault();
                    setIsOpen3(!isOpen3);}
                  }
                  className="text-lg md:text-xl font-bold flex flex-row mt-4"
                >
                  Web Development
                  <motion.div
                    animate={{ rotate: isOpen3 ? -90 : 0, translateY: isOpen3 ? "9px" : "0px" }}
                    transition={{ duration: 0.2 }}
                  >
                    <FontAwesomeIcon icon={faCaretDown} className="ml-4 w-4"/>
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isOpen3 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-2"
                    >
                      <div className="grid grid-cols-2 w-1/2">
                        <p className="mb-1">React.js</p>
                        <p className="mb-1">Node.js</p>
                        <p className="mb-1">Express.js</p>
                        <p className="mb-1">Tailwind CSS</p>
                        <p className="mb-1">Next.js</p>
                        <p className="mb-1">Google Cloud Platform</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}