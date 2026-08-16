import React from 'react';
import { Search, Filter, X } from 'lucide-react';
import { COURSE_CATEGORIES } from '../../data/coursesData';

const CourseFilter = ({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  totalResults
}) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm mb-10 space-y-5">
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by course name, exam (e.g. KAS, PSI, Banking, PGCET)..."
            className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-navy-900 focus:ring-2 focus:ring-brand-navy-100"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Results Counter */}
        <div className="text-xs text-slate-500 font-semibold px-2">
          Showing <span className="text-brand-navy-950 font-bold">{totalResults}</span> course programs
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1 hidden sm:inline-block">
          Filter:
        </span>
        {COURSE_CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                isActive
                  ? 'bg-brand-navy-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CourseFilter;
