"use client";
import { Maximize, Minimize } from "lucide-react";

import Hint from "@/components/Hint";

interface FullScreenProps {
  isFullScreen: boolean;
  onToggle: () => void;
}

const FullScreen = ({ isFullScreen, onToggle }: FullScreenProps) => {
  const Icon = isFullScreen ? Minimize : Maximize;
  const label = isFullScreen ? "Minimize" : "Maximize";

  return (
    <div className="flex items-center justify-center gap-4">
      <Hint label={label} asChild>
        <button
          onClick={onToggle}
          className="text-white p-1.5 hover:bg-white/10 rounded-sm"
        >
          <Icon className="h-5 w-5" />
        </button>
      </Hint>
    </div>
  );
};

export default FullScreen;
