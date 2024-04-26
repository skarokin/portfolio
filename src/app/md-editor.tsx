'use client';

import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons/faCode';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons/faBookOpen';

function MDEditor({
    url,
    content,
    rawContent
} : {
    url : string,
    content: React.ElementType,
    rawContent: string,
}) {

    const [sourceMode, setSourceMode] = useState<boolean>(false);

    return (
        <div className="md-editor bg-bgColor/50 border-2 rounded py-2 px-4 border-slate-700 break-words w-full backdrop-blur-[2px] shadow-2xl">
            <div className="font-mono flex flex-row justify-between mb-4">
                <div className="text-slate-300">
                <span>sean_kim</span>
                {url && url.split(/(\/|\.md)/).map((part, index) => (
                    part === '/' || part === '.md'
                        ? <span key={index} className="text-slate-500">{part}</span>
                        : <span key={index}>{part}</span>
                ))}
                </div>
                <div className="text-slate-300 flex">
                    <button 
                        onClick={() => setSourceMode(true)}
                        className="flex flex-col mr-4 transition-colors duration-300 ease-in-out hover:text-mainColor"
                    >
                        <FontAwesomeIcon icon={faCode} />
                        <span className="text-sm">src</span>
                    </button>
                    <button 
                        onClick={() => setSourceMode(false)}
                        className="flex flex-col items-cejnter transition-colors duration-300 ease-in-out hover:text-mainColor"    
                    >
                        <FontAwesomeIcon icon={faBookOpen} />
                        <span className="text-sm">read</span> 
                    </button>
                </div>
            </div>
            <div className='text-slate-300'>
                {sourceMode ? <pre className="break-words whitespace-pre-wrap">{rawContent}</pre> : React.createElement(content)}
            </div>
        </div>
    )
}

export default MDEditor;