import React from 'react';

interface EditorialDividerProps {
  label?: string;
  number?: string;
}

export const EditorialDivider: React.FC<EditorialDividerProps> = ({ label, number }) => {
  return (
    <div className="w-full overflow-hidden relative" aria-hidden="true">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex items-center gap-4 py-1">
          {/* Subtle Left Rule */}
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#858A65]/40 dark:via-[#858A65]/30 to-[#858A65]/40 dark:to-[#858A65]/30" />

          {/* Subtle Editorial Mark */}
          {label ? (
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#858A65] dark:text-[#A2A882] shrink-0 select-none">
              {number && (
                <span className="text-[#263B2D] dark:text-[#D9D2E8] font-bold">
                  {number}
                </span>
              )}
              <span className="opacity-90">{label}</span>
            </div>
          ) : (
            <div className="w-1.5 h-1.5 rounded-full bg-[#858A65]/50 dark:bg-[#858A65]/40 shrink-0" />
          )}

          {/* Subtle Right Rule */}
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#858A65]/40 dark:via-[#858A65]/30 to-[#858A65]/40 dark:to-[#858A65]/30" />
        </div>
      </div>
    </div>
  );
};
