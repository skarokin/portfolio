'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faFile as farFile } from '@fortawesome/free-regular-svg-icons';

export default function FS({
    // changePage
} : {
    // changePage: (newPage: string) => void;
}) {

    const changePage = (newPage: string) => {
        window.location.hash = newPage.startsWith('/') ? newPage.substring(1) : newPage;
    };
    
    const [isRootOpen, setIsRootOpen] = useState<boolean>(true);
    const [isProjectsOpen, setIsProjectsOpen] = useState<boolean>(true);

    return (
        <div className="whitespace-nowrap bg-bgColor/50 backdrop-blur-[2px] shadow-2xl min-h-fit mb-8 min-w-72 border-2 border-slate-700 rounded py-2 px-4 mr-4 font-mono text-slate-300">
            <div onClick={() => setIsRootOpen(!isRootOpen)} className="items-center cursor-pointer">
                <FontAwesomeIcon icon={isRootOpen ? faFolderOpen : faFolder} className="mr-2 w-4"/>
                sean_kim
            </div>
            <AnimatePresence>
                {isRootOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-2"
                    >
                        <ul className="pl-4 text-sm lg:text-base mb-2">
                            <li>
                                <div onClick={() => setIsProjectsOpen(!isProjectsOpen)} className="flex flex-row items-center cursor-pointer mb-2">
                                    <FontAwesomeIcon icon={isProjectsOpen ? faFolderOpen : faFolder} className="mr-2 w-4"/>
                                    projects
                                </div>
                                <AnimatePresence>
                                    {isProjectsOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="mt-2"
                                        >
                                            <ul className="pl-4 text-sm lg:text-base mb-2">
                                                <li className="cursor-pointer mb-2" onClick={() => changePage('/projects/LinearRegression.md')}>
                                                    <FontAwesomeIcon icon={farFile}/> LinearRegression.md
                                                </li>
                                                <li className="cursor-pointer mb-2" onClick={() => changePage('/projects/MYnotemd.md')}>
                                                    <FontAwesomeIcon icon={farFile}/> MYnotemd.md
                                                </li>
                                                <li className="cursor-pointer mb-2" onClick={() => changePage('/projects/reftype.md')}>
                                                    <FontAwesomeIcon icon={farFile}/> reftype.md
                                                </li>
                                                <li className="cursor-pointer mb-2" onClick={() => changePage('/projects/pycaptcha.md')}>
                                                    <FontAwesomeIcon icon={farFile}/> pycaptcha.md
                                                </li>
                                                <li className="cursor-pointer mb-2" onClick={() => changePage('/projects/depparse-grammar.md')}>
                                                    <FontAwesomeIcon icon={farFile}/> depparse-grammar.md
                                                </li>
                                            </ul>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </li>
                            <li className="cursor-pointer mb-2" onClick={() => changePage('/readme.md')}>
                                <FontAwesomeIcon icon={farFile}/> readme.md
                            </li>
                            <li className="cursor-pointer mb-2" onClick={() => changePage('/about.md')}>
                                <FontAwesomeIcon icon={farFile}/> about.md
                            </li>
                            <li className="cursor-pointer mb-2" onClick={() => changePage('/resume.md')}>
                                <FontAwesomeIcon icon={farFile}/> resume.md
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}