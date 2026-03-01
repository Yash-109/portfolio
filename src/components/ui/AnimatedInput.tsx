"use client";

import { ReactNode, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";

interface AnimatedInputProps {
  id: string;
  name: string;
  type?: "text" | "email" | "textarea";
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  icon: ReactNode;
  error?: string;
  isValid?: boolean;
  rows?: number;
  required?: boolean;
}

export default function AnimatedInput({
  id,
  name,
  type = "text",
  label,
  placeholder = "",
  value,
  onChange,
  icon,
  error,
  isValid,
  rows = 1,
  required = false,
}: AnimatedInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [shouldShake, setShouldShake] = useState(false);

  /* Only single-line inputs get floating label */
  const isFloating = type !== "textarea" && (isFocused || value.length > 0);

  useEffect(() => {
    if (error) {
      setShouldShake(true);
      const timer = setTimeout(() => setShouldShake(false), 500);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const borderColor = error
    ? "border-red-500/50"
    : isValid
      ? "border-green-500/50"
      : isFocused
        ? "border-transparent"
        : "border-white/10";

  const glowColor = error
    ? "shadow-red-500/20"
    : isValid
      ? "shadow-green-500/20"
      : "shadow-purple-500/20";

  const iconColor = error
    ? "text-red-400"
    : isValid
      ? "text-green-400"
      : isFocused
        ? "text-purple-400"
        : "text-gray-500";

  /* ── TEXTAREA: traditional label-above layout ── */
  if (type === "textarea") {
    return (
      <div className="relative w-full">
        <motion.div
          animate={{ x: shouldShake ? [-8, 8, -8, 8, 0] : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative"
        >
          {/* Label above */}
          <label
            htmlFor={id}
            className={`block text-sm font-medium mb-2 transition-colors duration-300 ${error ? "text-red-400" : isValid ? "text-green-400" : isFocused ? "text-purple-400" : "text-gray-400"
              }`}
          >
            {label}
            {required && <span className="text-red-400 ml-1">*</span>}
            {isValid && <Check className="inline w-3.5 h-3.5 ml-1.5 text-green-500" />}
            {error && <X className="inline w-3.5 h-3.5 ml-1.5 text-red-500" />}
          </label>

          {/* Border wrapper */}
          <div className="relative">
            {isFocused && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 rounded-xl gradient-border-animated p-[2px] pointer-events-none z-0"
              >
                <div className="w-full h-full bg-gray-900 rounded-xl" />
              </motion.div>
            )}

            <div className={`relative ${isFocused ? "z-10" : "z-0"}`}>
              <textarea
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                rows={rows}
                placeholder={placeholder}
                required={required}
                className={`
                  w-full px-4 pt-4 pb-4
                  min-h-[140px] resize-none
                  bg-white/5 backdrop-blur-lg
                  border-2 ${borderColor}
                  rounded-xl
                  text-white text-base font-normal
                  placeholder-gray-500
                  transition-all duration-300 ease-out
                  focus:outline-none focus:bg-white/10 focus:border-purple-500
                  ${isFocused ? `focus:shadow-lg ${glowColor}` : ""}
                `}
              />
            </div>
          </div>
        </motion.div>

        {/* Error message */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-2.5 ml-1 text-sm text-red-400 flex items-center gap-1.5"
            >
              <span className="text-xs">⚠</span>
              <span>{error}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  /* ── SINGLE-LINE INPUT: floating label layout ── */
  return (
    <div className="relative w-full">
      <motion.div
        animate={{ x: shouldShake ? [-8, 8, -8, 8, 0] : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="relative"
      >
        {/* Gradient border wrapper */}
        <div className="relative">
          {/* Animated gradient border (only on focus) */}
          {isFocused && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 rounded-xl gradient-border-animated p-[2px] pointer-events-none z-0"
            >
              <div className="w-full h-full bg-gray-900 rounded-xl" />
            </motion.div>
          )}

          {/* Input container */}
          <div className={`relative ${isFocused ? "z-10" : "z-0"}`}>
            <input
              id={id}
              name={name}
              type={type}
              value={value}
              onChange={onChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder={isFocused ? placeholder : ""}
              required={required}
              className={`
                w-full pl-12 pr-12 py-4
                h-14
                bg-white/5 backdrop-blur-lg
                border-2 ${borderColor}
                rounded-xl
                text-white text-base font-normal
                placeholder-gray-500
                transition-all duration-300 ease-out
                focus:outline-none focus:bg-white/10 focus:border-purple-500
                ${isFocused ? `focus:shadow-lg ${glowColor}` : ""}
              `}
              style={{
                transform: isFocused ? "translateZ(8px)" : "translateZ(0)",
                transformStyle: "preserve-3d",
              }}
            />

            {/* Left icon */}
            <div
              className={`
                absolute left-4 top-1/2 -translate-y-1/2
                w-5 h-5 transition-colors duration-300 z-10
                ${iconColor}
              `}
            >
              {icon}
            </div>

            {/* Floating label */}
            <motion.label
              htmlFor={id}
              animate={{
                y: isFloating ? -38 : 0,
                x: isFloating ? -40 : 0,
                scale: isFloating ? 0.85 : 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={`
                absolute left-12 top-1/2 -translate-y-1/2
                text-base font-medium
                pointer-events-none z-20
                transition-colors duration-300
                ${error
                  ? "text-red-400"
                  : isValid
                    ? "text-green-400"
                    : isFocused
                      ? "text-purple-400"
                      : "text-gray-400"
                }
                ${isFloating ? "bg-[#020817] px-2 rounded-md" : ""}
              `}
              style={{ originX: 0, originY: 0.5 }}
            >
              {label}
              {required && !isFloating && <span className="text-red-400 ml-1">*</span>}
            </motion.label>

            {/* Validation icon (right side) */}
            <AnimatePresence>
              {(isValid || error) && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className={`absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 z-10 ${isValid ? "text-green-500" : "text-red-500"
                    }`}
                >
                  {isValid ? <Check className="w-5 h-5" /> : <X className="w-5 h-5" />}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Error message */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-2.5 ml-1 text-sm text-red-400 flex items-center gap-1.5"
          >
            <span className="text-xs">⚠</span>
            <span>{error}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
