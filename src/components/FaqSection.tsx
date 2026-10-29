import React, { useState, useId } from 'react';
import { GENERAL_FAQS } from '../data/clinicData';
import { ChevronDown, ChevronUp, Search, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);
  const searchInputId = useId();

  const categories = ['All', 'Appointments', 'Visiting the Clinic', 'Accessibility', 'Emergency Notice'];

  const filteredFaqs = GENERAL_FAQS.filter((faq) => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesQuery =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setOpenIds(filteredFaqs.map((f) => f.id));
  };

  const collapseAll = () => {
    setOpenIds([]);
  };

  return (
    <section
      id="faqs"
      aria-labelledby="faqs-heading"
      className="py-16 sm:py-20 bg-white border-b border-slate-200"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold tracking-wider uppercase text-teal-800 mb-2">
            04. Patient Help & Answers
          </div>
          <h2
            id="faqs-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-700 leading-relaxed">
            General non-diagnostic questions about appointments, clinic visits, and facility access.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200 mb-8 space-y-4">
          <div className="relative">
            <label htmlFor={searchInputId} className="sr-only">
              Search questions
            </label>
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" aria-hidden="true" />
            <input
              id={searchInputId}
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search general questions (e.g. documents, cancellation, parking)..."
              className="w-full pl-11 pr-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-500 focus:outline-hidden focus:ring-2 focus:ring-teal-700"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            {/* Functional Category Filter Buttons */}
            <div className="flex flex-wrap items-center gap-1.5" role="toolbar" aria-label="FAQ Categories">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  aria-pressed={selectedCategory === cat}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-teal-700 ${
                    selectedCategory === cat
                      ? 'bg-teal-700 text-white shadow-xs'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Expand / Collapse All */}
            <div className="flex items-center gap-3 text-xs">
              <button
                type="button"
                onClick={expandAll}
                className="text-slate-600 hover:text-teal-800 font-semibold focus-visible:ring-2 focus-visible:ring-teal-700 rounded px-1.5 py-0.5"
              >
                Expand all
              </button>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <button
                type="button"
                onClick={collapseAll}
                className="text-slate-600 hover:text-teal-800 font-semibold focus-visible:ring-2 focus-visible:ring-teal-700 rounded px-1.5 py-0.5"
              >
                Collapse all
              </button>
            </div>
          </div>
        </div>

        {/* Questions List */}
        {filteredFaqs.length > 0 ? (
          <div className="space-y-4" role="region" aria-label="FAQ accordions">
            {filteredFaqs.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              const headerId = `faq-header-${faq.id}`;
              const panelId = `faq-panel-${faq.id}`;

              return (
                <div
                  key={faq.id}
                  className={`border rounded-xl transition-all ${
                    isOpen ? 'border-teal-300 bg-teal-50/20' : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      id={headerId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex items-center justify-between p-5 text-left text-base sm:text-lg font-bold text-slate-900 focus-visible:ring-2 focus-visible:ring-teal-700 rounded-xl"
                    >
                      <span className="flex items-start gap-3 pr-4">
                        <HelpCircle className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{faq.question}</span>
                      </span>
                      <span className="text-slate-500 shrink-0">
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-teal-800" aria-hidden="true" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-slate-500" aria-hidden="true" />
                        )}
                      </span>
                    </button>
                  </h3>

                  {isOpen && (
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={headerId}
                      className="px-5 pb-5 pt-1 text-sm sm:text-base text-slate-700 leading-relaxed border-t border-slate-100"
                    >
                      <p>{faq.answer}</p>
                      <div className="mt-3 text-xs text-slate-500">
                        Category: <span className="font-medium text-slate-700">{faq.category}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="p-8 text-center bg-slate-50 rounded-xl border border-slate-200">
            <p className="text-slate-700 font-medium">No questions matched your search &quot;{searchQuery}&quot;.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-3 text-sm text-teal-700 font-semibold hover:underline"
            >
              Reset search & filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
