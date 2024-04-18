import readMeContent from './content/readMeContent';
import aboutContent from './content/aboutContent';
import resumeContent from './content/resumeContent';
import linearRegressionContent from './content/linearRegressionContent';
import MYnotemdContent from './content/MYnotemdContent';
import reftypeContent from './content/reftypeContent';
import pycaptchaContent from './content/pycaptchaContent';
import depparseGrammarContent from './content/depparseGrammarContent';
import Image from 'next/image';
import Contacts from './contacts';

const LinearRegressionImage = () => (
    <div className="flex flex-col items-center justify-center mb-8">
        <Image
            src="./carbon_linearregression.png"
            alt="Linear Regression"
            width={300}
            height={225}
            className="w-64 h-auto mb-4 md:w-96 md:h-auto"
        />
    </div>
);

const MYnotemdImage = () => (
    <div className="flex flex-col items-center justify-center mb-8">
        <Image
            src="./carbon_mynotemd.png"
            alt="MYnote"
            width={300}
            height={225}
            className="w-64 h-auto mb-4 md:w-96 md:h-auto"
        />
    </div>
);

const ReftypeImage = () => (
    <div className="flex flex-col items-center justify-center mb-8">
        <Image
            src="./carbon_reftype.png"
            alt="reftype"
            width={300}
            height={225}
            className="w-64 h-auto mb-4 md:w-96 md:h-auto"
        />
    </div>
);

const PycaptchaImage = () => (
    <div className="flex flex-col items-center justify-center mb-8">
        <Image
            src="./carbon_pycaptcha.png"
            alt="pycaptcha"
            width={300}
            height={225}
            className="w-64 h-auto mb-4 md:w-96 md:h-auto"
        />
    </div>
);

const DepparseGrammarImage = () => (
    <div className="flex flex-col items-center justify-center mb-8">
        <Image
            src="./carbon_pyesl.png"
            alt="depparse-grammar"
            width={300}
            height={225}
            className="w-64 h-auto mb-4 md:w-96 md:h-auto"
        />
    </div>
);

const ImageAndContacts = () => (
    <div className="flex flex-col items-center justify-center mb-8">
        <Image
            src="./portfoliosean.png"
            alt="portfoliosean"
            width={300}
            height={225}
            className="w-32 h-auto rounded-full border-2 md:w-48 md:h-auto"
        />
        <Contacts />
    </div>
);

const contentMap = {
    '/readme.md': {
        content: readMeContent,
        url: '/readme.md',
        children: <ImageAndContacts key="imageAndContacts" />
    },
    '/about.md': {
        content: aboutContent,
        url: '/about.md',
        children: null
    },
    '/resume.md': {
        content: resumeContent,
        url: '/resume.md',
        children: null
    },
    '/projects/LinearRegression.md': {
        content: linearRegressionContent,
        url: '/projects/LinearRegression.md',
        children: <LinearRegressionImage/>
    },
    '/projects/MYnotemd.md': {
        content: MYnotemdContent,
        url: '/projects/MYnotemd.md',
        children: <MYnotemdImage/>
    },
    '/projects/reftype.md': {
        content: reftypeContent,
        url: '/projects/reftype.md',
        children: <ReftypeImage/>
    },
    '/projects/pycaptcha.md': {
        content: pycaptchaContent,
        url: '/projects/pycaptcha.md',
        children: <PycaptchaImage/>
    },
    '/projects/depparse-grammar.md': {
        content: depparseGrammarContent,
        url: '/projects/depparse-grammar.md',
        children: <DepparseGrammarImage/>
    },
};

export default contentMap;