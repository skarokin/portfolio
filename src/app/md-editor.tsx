'use client';

import React from 'react';
import { useState } from 'react';
import markdownit from 'markdown-it';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons/faCode';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons/faBookOpen';
import ReactDOMServer from 'react-dom/server';
import ReactMarkdown from 'react-markdown';

function MDEditor({
    url,
    content,
    children,
} : {
    url : string,
    content: string,
    children?: React.ReactNode
}) {
    const [sourceMode, setSourceMode] = useState<boolean>(false);
    // render \n as <br> (to ensure line breaks in source mode)
    // replace &emsp; with &amp;&emsp; (to prevent html from rendering) 
    const mdContent = content.replace(/(?:\r\n|\r|\n)/g, '<br>').replace(/&/g, '&amp;');
    // ensure line breaks with single \n
    content = content.replace(/(?:\r\n|\r|\n)/g, '\n\n')

    return (
        <div className="md-editor border-2 rounded py-2 px-4 border-slate-700 break-words w-full">
            <div className="font-mono flex flex-row justify-between mb-4">
                <div className="text-slate-300">
                <span>sean_kim</span>
                {url && url.split(/(\/|\.md)/).map((part, index) => (
                    part === '/' || part === '.md'
                        ? <span key={index} className="text-slate-500">{part}</span>
                        : <span key={index}>{part}</span>
                ))}
                </div>
                <div className="text-slate-300">
                    <button 
                        onClick={() => setSourceMode(true)}
                        className="transition-colors duration-300 ease-in-out hover:text-mainColor"
                    >
                        <FontAwesomeIcon icon={faCode} />
                    </button> {' '}
                    <button 
                        onClick={() => setSourceMode(false)}
                        className="transition-colors duration-300 ease-in-out hover:text-mainColor"    
                    >
                        <FontAwesomeIcon icon={faBookOpen} />
                    </button>
                </div>
            </div>
            {sourceMode ? <div className="font-mono text-slate-300">{ReactDOMServer.renderToStaticMarkup(children)}</div> : children}
            <div className={`text-slate-300 ${sourceMode ? 'font-mono text-slate-300' : ''}`}>
                {sourceMode ? <span dangerouslySetInnerHTML={{ __html: mdContent }} /> : <ReactMarkdown>{content}</ReactMarkdown>}
            </div>
        </div>
    )
}

export default MDEditor;