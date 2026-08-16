import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const AccordionItem = ({ title, kannadaTitle, children, isOpen, onToggle }) => {
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white mb-3 shadow-sm hover:border-brand-navy-300 transition-all duration-200">
      <button
        onClick={onToggle}
        className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 focus:outline-none focus:bg-slate-50 transition-colors"
        aria-expanded={isOpen}
      >
        <div className="flex-1 pr-2">
          <h4 className="text-base sm:text-lg font-semibold text-brand-navy-900 leading-snug">
            {title}
          </h4>
          {kannadaTitle && (
            <p className="text-xs sm:text-sm text-brand-navy-600 font-medium font-kannada mt-0.5">
              {kannadaTitle}
            </p>
          )}
        </div>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-slate-100 text-brand-navy-800 transition-transform duration-300 ${
            isOpen ? 'rotate-180 bg-brand-navy-100 text-brand-navy-900' : ''
          }`}
        >
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>

      {isOpen && (
        <div className="px-5 pb-5 pt-1 text-slate-700 text-sm sm:text-base leading-relaxed border-t border-slate-100 bg-slate-50/50">
          <div className="whitespace-pre-line pt-2">{children}</div>
        </div>
      )}
    </div>
  );
};

export const Accordion = ({ items, allowMultiple = false }) => {
  const [openIndices, setOpenIndices] = useState([0]);

  const handleToggle = (index) => {
    if (allowMultiple) {
      setOpenIndices((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndices((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={item.id || index}
          title={item.title || item.question}
          kannadaTitle={item.kannadaTitle || item.kannadaQuestion}
          isOpen={openIndices.includes(index)}
          onToggle={() => handleToggle(index)}
        >
          {item.content || item.answer}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
