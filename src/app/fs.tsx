'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faFolderOpen } from '@fortawesome/free-solid-svg-icons';

export default function FS({
    changePage
} : {
    changePage: (newPage: string) => void;
}) {
    const [isRootOpen, setIsRootOpen] = useState<boolean>(true);
    const [isProjectsOpen, setIsProjectsOpen] = useState<boolean>(true);

    return (
        <div className="break-words min-h-fit min-w-16 md:min-w-32 border-2 border-slate-700 rounded py-2 px-4 mr-4 font-mono text-slate-300">
            <div onClick={() => setIsRootOpen(!isRootOpen)} className="flex flex-row items-center cursor-pointer">
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
                        <ul className="pl-4 text-sm md:text-base mb-2">
                            <li>
                                <div onClick={() => setIsProjectsOpen(!isProjectsOpen)} className="flex flex-row items-center cursor-pointer">
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
                                            <ul className="pl-4 text-sm md:text-base mb-2">
                                                <li className="cursor-pointer" onClick={() => changePage('/projects/LinearRegression.md')}>
                                                    LinearRegression.md
                                                </li>
                                                <li className="cursor-pointer" onClick={() => changePage('/projects/MYnotemd.md')}>
                                                    MYnotemd.md
                                                </li>
                                                <li className="cursor-pointer" onClick={() => changePage('/projects/reftype.md')}>
                                                    reftype.md
                                                </li>
                                                <li className="cursor-pointer" onClick={() => changePage('/projects/pycaptcha.md')}>
                                                    pycaptcha.md
                                                </li>
                                                <li className="cursor-pointer" onClick={() => changePage('/projects/depparse-grammar.md')}>
                                                    depparse-grammar.md
                                                </li>
                                            </ul>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </li>
                            <li className="cursor-pointer" onClick={() => changePage('/readme.md')}>
                                readme.md
                            </li>
                            <li className="cursor-pointer" onClick={() => changePage('/about.md')}>
                                about.md
                            </li>
                            <li className="cursor-pointer" onClick={() => changePage('/resume.md')}>
                                resume.md
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}