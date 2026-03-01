"use client";

import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface BaseInputProps {
  label: string;
  id: string;
  error?: string;
  required?: boolean;
}

interface TextInputProps extends BaseInputProps {
  type?: "text" | "email";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  as?: "input";
}

interface TextareaInputProps extends BaseInputProps {
  type?: "textarea";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
  as: "textarea";
}

type ContactInputProps = TextInputProps | TextareaInputProps;

export default function ContactInput({
  label,
  id,
  type = "text",
  value,
  onChange,
  error,
  required = false,
  placeholder = "",
  ...props
}: ContactInputProps) {
  const baseClasses = `
    w-full
    bg-slate-950/60
    border border-slate-800
    rounded-xl
    px-4 py-3
    text-sm text-white
    placeholder:text-slate-500
    transition-all duration-200
    hover:border-slate-600
    focus:outline-none
    focus:ring-2 focus:ring-indigo-500/40
    focus:border-indigo-500
  `;

  const errorClasses = error
    ? "border-red-500/50 focus:ring-red-500/40 focus:border-red-500"
    : "";

  const combinedClasses = `${baseClasses} ${errorClasses}`;

  return (
    <div className="w-full">
      <label htmlFor={id} className="block text-sm font-medium text-slate-300 mb-1.5">
        {label}
        {required && <span className="text-red-400 text-xs ml-1">*</span>}
      </label>

      {type === "textarea" ? (
        <textarea
          id={id}
          name={id}
          value={value}
          onChange={onChange as (e: React.ChangeEvent<HTMLTextAreaElement>) => void}
          placeholder={placeholder}
          required={required}
          rows={(props as TextareaInputProps).rows || 4}
          className={`${combinedClasses} min-h-[120px] resize-none`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange as (e: React.ChangeEvent<HTMLInputElement>) => void}
          placeholder={placeholder}
          required={required}
          className={combinedClasses}
        />
      )}

      {/* Reserve space for error message to prevent layout shift */}
      <div className="h-5 mt-1">
        {error && <p className="text-xs text-red-400">{error}</p>}
      </div>
    </div>
  );
}
