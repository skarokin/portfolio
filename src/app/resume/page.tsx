import dynamic from 'next/dynamic';
import Section from '../section';

const Header = dynamic(() => import('../header'), { ssr: false });

export default function Resume() {
    return (
        <>
            <Header />
            <section id="resume" className="bg-bgColor flex min-h-screen flex-col items-left justify-center p-24 w-8/12">
                <div className="absolute top-32">
                    <Section title="Resume"/>
                </div>
                <div className="flex justify-center w-full mt-24">
                    <iframe
                        src="/resume.pdf"
                        width="100%"
                        height="1000px"
                        loading="lazy"
                        title="resume"
                    ></iframe>
                </div>
            </section>
        </>
    )
}