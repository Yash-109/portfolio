"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BaseInputProps {
  label: string;
  id: string;
  error?: string;
  required?: boolean;
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

interface TextInputProps extends BaseInputProps {
  type?: "text" | "email";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  as?: "input";
  showCounter?: never;
  maxLength?: never;
}

interface TextareaInputProps extends BaseInputProps {
  type?: "textarea";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
  as: "textarea";
  showCounter?: boolean;
  maxLength?: number;
}

type ContactInputProps = TextInputProps | TextareaInputProps;

export default function ContactInput({
  label,
  id,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  required = false,
  placeholder = "",
  ...props
}: ContactInputProps) {
  const [focused, setFocused] = useState(false);
  const isTextarea = type === "textarea";
  const showCounter = isTextarea && (props as TextareaInputProps).showCounter;
  const maxLength = isTextarea ? ((props as TextareaInputProps).maxLength ?? 500) : undefined;
  const errorId = `${id}-error`;

  // Animated focus gradient border wrapper classes
  const wrapperBorderClasses = focused
    ? error
      ? "ring-1 ring-red-500/50 shadow-[0_0_0_3px_rgba(239,68,68,0.12)] border-red-500/50"
      : "ring-1 ring-indigo-500/60 shadow-[0_0_0_3px_rgba(99,102,241,0.15)] border-indigo-500/60"
    : error
    ? "border-red-500/40"
    : "border-slate-800 hover:border-slate-600";

  const inputClasses = `
    w-full
    bg-slate-950/70
    border ${wrapperBorderClasses}
    rounded-xl
    px-4 py-3
    text-sm text-white
    placeholder:text-slate-600
    transition-all duration-200
    focus:outline-none
    shadow-inner shadow-black/20
  `;

  const handleFocus = () => setFocused(true);
  const handleBlurInternal = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFocused(false);
    onBlur?.(e);
  };

  const sharedProps = {
    id,
    name: id,
    value,
    placeholder,
    required,
    "aria-required": required,
    "aria-invalid": !!error,
    "aria-describedby": error ? errorId : undefined,
  };

  return (
    <div className="w-full">
      <label htmlFor={id} className="block text-sm font-medium text-slate-300 mb-1.5">
        {label}
        {required && (
          <span className="text-red-400 text-xs ml-1" aria-hidden="true">
            *
          </span>
        )}
      </label>

      {isTextarea ? (
        <textarea
          {...sharedProps}
          onChange={onChange as (e: React.ChangeEvent<HTMLTextAreaElement>) => void}
          onFocus={handleFocus}
          onBlur={handleBlurInternal as React.FocusEventHandler<HTMLTextAreaElement>}
          rows={(props as TextareaInputProps).rows || 4}
          maxLength={maxLength}
          className={`${inputClasses} min-h-[120px] resize-none`}
        />
      ) : (
        <input
          {...sharedProps}
          type={type}
          onChange={onChange as (e: React.ChangeEvent<HTMLInputElement>) => void}
          onFocus={handleFocus}
          onBlur={handleBlurInternal as React.FocusEventHandler<HTMLInputElement>}
          className={`${inputClasses} min-h-[44px]`}
        />
      )}

      {/* Error + counter row — AnimatePresence spring bounce on errors */}
      <div className="flex items-start justify-between mt-1 min-h-[1.1rem]">
        <AnimatePresence mode="wait" initial={false}>
          {error ? (
            <motion.p
              key="error"
              id={errorId}
              role="alert"
              initial={{ opacity: 0, y: -6, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -4, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 380, damping: 22 }}
              className="text-xs text-red-400"
            >
              {error}
            </motion.p>
          ) : (
            <span key="empty" />
          )}
        </AnimatePresence>

        {showCounter && maxLength !== undefined && (
          <motion.span
            animate={{
              color:
                value.length >= maxLength
                  ? "#f87171"      // red-400
                  : value.length >= maxLength * 0.8
                  ? "#fbbf24"      // amber-400
                  : value.length >= maxLength * 0.5
                  ? "#94a3b8"      // slate-400
                  : "#64748b",     // slate-500
            }}
            transition={{ duration: 0.4 }}
            className="text-xs ml-auto flex-shrink-0 tabular-nums font-medium"
            aria-label={`${value.length} of ${maxLength} characters used`}
          >
            {value.length}/{maxLength}
          </motion.span>
        )}
      </div>
    </div>
  );
}
