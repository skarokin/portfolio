import dynamic from 'next/dynamic';
import Section from '../section';
import Image from 'next/image';

const Header = dynamic(() => import('../header'), { ssr: false });

export default function Projects() {
  return (
    <>
      <Header />
      <section id="projects" className="min-h-screen flex flex-col items-left justify-start p-24 w-8/12">
        <div className="absolute top-32">
          <Section title="Projects" />
        </div>
        <div className="grid grid-cols-3 gap-4 mt-20">
          <div className="">
            <div className="flex flex-col items-center">
              <Image src="./carbon_linearregression.png" alt="Linear Regression" width={400} height={300} className="w-full h-auto mb-4" />
              <a href="https://github.com/skarokin/crispy-system" className="text-mainColor text-xl mb-2 hover:underline hover:text-mainColor block text-center">
                Linear Regression
              </a>
              <p className="text-slate-500 font-bold mb-2">Java</p>
            </div>
            <ul className="list-disc pl-10 text-slate-500 text-base mb-2">
              <li>A linear regression calculator made in Java for Rutgers&apos; UHACCS Hackathon, placed 4th</li>
              <li>My first project!</li>
            </ul>
          </div>
          <div className="">
            <div className="flex flex-col items-center">
              <Image src="./carbon_mynotemd.png" alt="MYnote.md" width={400} height={300} className="w-full h-auto mb-4" />
              <a href="https://github.com/skarokin/MYnote.md" className="text-mainColor text-xl mb-2 hover:underline hover:text-mainColor block text-center">
                MYnote.md
              </a>
              <p className="text-slate-500 font-bold mb-2">JavaScript, Node</p>
            </div>
            <ul className="list-disc pl-10 text-slate-500 text-base mb-2">
              <li>A Markdown note editor made in Electron with LaTeX support and syntax highlighting</li>
              <li>My first experience with JavaScript and Node</li>
            </ul>
          </div>
          <div className="">
            <div className="flex flex-col items-center">
              <Image src="./carbon_reftype.png" alt="ref:type" width={400} height={300} className="w-full h-auto mb-4" />
              <a href="https://github.com/skarokin/reftype" className="text-mainColor text-xl mb-2 hover:underline hover:text-mainColor block text-center">
                ref:type
              </a>
              <p className="text-slate-500 font-bold mb-2">TypeScript, React, Node, GCP</p>
            </div>
            <ul className="list-disc pl-10 text-slate-500 text-base mb-2">
              <li>A competitive typing game made with React and Node with a real-time leaderboard</li>
              <li>My first full-stack project</li>
            </ul>
          </div>
          <div className="">
            <div className="flex flex-col items-center">
              <Image src="./carbon_pycaptcha.png" alt="pycaptcha" width={400} height={300} className="w-full h-auto mb-4" />
              <a href="https://github.com/skarokin/pycaptcha" className="text-mainColor text-xl mb-2 hover:underline hover:text-mainColor block text-center">
                pycaptcha
              </a>
              <p className="text-slate-500 font-bold mb-2">Python, NumPy, Pandas, PyTorch</p>
            </div>
            <ul className="list-disc pl-10 text-slate-500 text-base mb-2">
              <li>A CAPTCHA system that uses object detection on Google Street View Images</li>
              <li>My first data science project</li>
            </ul>
          </div>
          <div className="">
            <div className="flex flex-col items-center">
              <Image src="./carbon_pyesl.png" alt="pyesl" width={400} height={300} className="w-full h-auto mb-4" />
              <a href="https://github.com/skarokin/pyesl" className="text-mainColor text-xl mb-2 hover:underline hover:text-mainColor block text-center">
                pyesl (wip)
              </a>
              <p className="text-slate-500 font-bold mb-2">Python, spaCy, Pandas, Firebase</p>
            </div>
            <ul className="list-disc pl-10 text-slate-500 text-base mb-2">
              <li>A multi-language grammar checker that combines a dependency parser with user-defined rules</li>
              <li>
                    <a href="https://mmozgovoy.dev/papers/mozgovoy11b.pdf" className="text-mainColor hover:underline hover:text-mainColor">
                        This 
                    </a>{" "}
                    research paper (and the researcher himself) was very helpful
                </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}