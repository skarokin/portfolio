import readMeContent from './content/readMeContent.mdx';
import aboutContent from './content/aboutContent.mdx';
import resumeContent from './content/resumeContent.mdx';
import linearRegressionContent from './content/linearRegressionContent.mdx';
import MYnotemdContent from './content/MYnotemdContent.mdx';
import reftypeContent from './content/reftypeContent.mdx';
import pycaptchaContent from './content/pycaptchaContent.mdx';
import depparseGrammarContent from './content/depparseGrammarContent.mdx';

const rawReadMeContentModule = require('!!raw-loader!./content/readMeContent.mdx');
const rawReadMeContent = rawReadMeContentModule.default.replace(/import .*;\s*/g, '');

const rawAboutContentModule = require('!!raw-loader!./content/aboutContent.mdx');
const rawAboutContent = rawAboutContentModule.default.replace(/import .*;\s*/g, '');

const rawResumeContentModule = require('!!raw-loader!./content/resumeContent.mdx');
const rawResumeContent = rawResumeContentModule.default.replace(/import .*;\s*/g, '');

const rawLinearRegressionContentModule = require('!!raw-loader!./content/linearRegressionContent.mdx');
const rawLinearRegressionContent = rawLinearRegressionContentModule.default.replace(/import .*;\s*/g, '');

const rawMYnotemdContentModule = require('!!raw-loader!./content/MYnotemdContent.mdx');
const rawMYnotemdContent = rawMYnotemdContentModule.default.replace(/import .*;\s*/g, '');

const rawReftypeContentModule = require('!!raw-loader!./content/reftypeContent.mdx');
const rawReftypeContent = rawReftypeContentModule.default.replace(/import .*;\s*/g, '');

const rawPycaptchaContentModule = require('!!raw-loader!./content/pycaptchaContent.mdx');
const rawPycaptchaContent = rawPycaptchaContentModule.default.replace(/import .*;\s*/g, '');

const rawDepparseGrammarContentModule = require('!!raw-loader!./content/depparseGrammarContent.mdx');
const rawDepparseGrammarContent = rawDepparseGrammarContentModule.default.replace(/import .*;\s*/g, '');

const contentMap = {
    '#readme.md': {
        content: readMeContent,
        rawContent: rawReadMeContent,
        url: '/readme.md',
    },
    '#about.md': {
        content: aboutContent,
        rawContent: rawAboutContent,
        url: '/about.md',
    },
    '#resume.md': {
        content: resumeContent,
        rawContent: rawResumeContent,
        url: '/resume.md',
    },
    '#projects/LinearRegression.md': {
        content: linearRegressionContent,
        rawContent: rawLinearRegressionContent,
        url: '/projects/LinearRegression.md',
    },
    '#projects/MYnotemd.md': {
        content: MYnotemdContent,
        rawContent: rawMYnotemdContent,
        url: '/projects/MYnotemd.md',
    },
    '#projects/reftype.md': {
        content: reftypeContent,
        rawContent: rawReftypeContent,
        url: '/projects/reftype.md',
    },
    '#projects/pycaptcha.md': {
        content: pycaptchaContent,
        rawContent: rawPycaptchaContent,
        url: '/projects/pycaptcha.md',
    },
    '#projects/depparse-grammar.md': {
        content: depparseGrammarContent,
        rawContent: rawDepparseGrammarContent,
        url: '/projects/depparse-grammar.md',
    },
};

export default contentMap;