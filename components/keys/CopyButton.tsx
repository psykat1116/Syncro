"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { CheckCheck, Copy } from "lucide-react";

interface CopyButtonProps {
  value?: string;
}

const CopyButton = ({ value }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!value) {
      return;
    }
    setCopied(true);
    navigator.clipboard.writeText(value);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  const Icon = copied ? CheckCheck : Copy;

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleCopy}
      disabled={!value || copied}
    >
      <Icon className="h-4 w-4" />
    </Button>
  );
};

export default CopyButton;
