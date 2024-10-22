"use client";
import React, { useState } from "react";
import { ArrowIcon } from "./footer";

interface EmailCopyProps {
  email: string;
}

export const EmailCopy: React.FC<EmailCopyProps> = ({ email }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div
      onClick={handleCopy}
      className="cursor-pointer flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
    >
      <ArrowIcon />
      <p className="ml-2 h-7">{email}</p>
      {copied && (
        <span style={{ marginLeft: "10px", color: "green" }}>Copied!</span>
      )}
    </div>
  );
};
