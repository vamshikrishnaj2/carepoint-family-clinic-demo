import React, { useState } from 'react';
import { AlertCircle, Eye, Info, ChevronDown, ChevronUp } from 'lucide-react';

interface DemoNoticeProps {
  isLargeText: boolean;
  onToggleLargeText: () => void;
}

export const DemoNotice: React.FC<DemoNoticeProps> = ({ isLargeText, onToggleLargeText }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <aside
      aria-label="Demonstration and Non-Medical Notice"
      className="bg-amber-50 border-b border-amber-200 text-amber-950 text-xs sm:text-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          {/* Main Demo Notice */}
          <div className="flex items-start sm:items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-800 shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" />
            <div className="font-medium text-amber-900 leading-snug">
              <span className="font-bold underline decoration-amber-400">DEMO PORTFOLIO NOTICE:</span>{' '}
              Fictional healthcare concept for design and development demonstration.
            </div>
          </div>

          {/* Quick Controls */}
          <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
            {/* Accessibility text size toggle */}
            <button
              type="button"
              onClick={onToggleLargeText}
              aria-pressed={isLargeText}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-100/80 hover:bg-amber-200 text-amber-900 border border-amber-300 font-medium transition-colors focus-visible:ring-2 focus-visible:ring-amber-700"
              title="Toggle larger, high-readability text mode"
            >
              <Eye className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{isLargeText ? 'Default Text' : 'Larger Text'}</span>
            </button>

            {/* Expand / collapse disclaimer details */}
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              aria-expanded={isExpanded}
              aria-controls="demo-notice-details"
              className="inline-flex items-center gap-1 text-amber-900 font-medium hover:text-amber-950 transition-colors focus-visible:ring-2 focus-visible:ring-amber-700"
            >
              <span>{isExpanded ? 'Hide Details' : 'Details'}</span>
              {isExpanded ? (
                <ChevronUp className="w-3.5 h-3.5" aria-hidden="true" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Collapsible Detailed Disclaimers */}
        {isExpanded && (
          <div
            id="demo-notice-details"
            className="mt-2 pt-2 border-t border-amber-200/80 text-xs text-amber-900 leading-relaxed grid sm:grid-cols-2 gap-2"
          >
            <div className="flex items-start gap-1.5">
              <Info className="w-3.5 h-3.5 text-amber-800 shrink-0 mt-0.5" aria-hidden="true" />
              <p>
                <strong>Fictional Information Only:</strong> All doctors, credentials, medical claims, patient reviews,
                and treatment outcomes presented on this website are fictional. No actual healthcare services are provided.
              </p>
            </div>
            <div className="flex items-start gap-1.5 bg-amber-100/60 p-1.5 rounded border border-amber-300/50">
              <AlertCircle className="w-3.5 h-3.5 text-red-700 shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-red-950">
                <strong>Emergency Warning:</strong> If you are experiencing a medical emergency, do not use this site.
                Call <strong>911</strong> or your local emergency services, or proceed to the nearest hospital emergency room.
              </p>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
