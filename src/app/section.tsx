import React from 'react';

const Section = ({ title }: { title: string }) => {
  return (
    <section className="-z-50">
      <span className="text-slate-500 text-3xl font-bold">{title}</span>
    </section>
  );
};

export default Section;