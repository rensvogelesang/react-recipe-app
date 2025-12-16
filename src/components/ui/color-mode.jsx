"use client";

import { useEffect, useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useTheme } from "next-themes";

export function ColorModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const current = theme ?? resolvedTheme;
  const isActive = (mode) => current === mode;

  return (
    <ButtonGroup isAttached size="sm">
      {["light", "dark", "system"].map((mode) => (
        <Button
          key={mode}
          onClick={() => setTheme(mode)}
          variant={isActive(mode) ? "solid" : "ghost"}
        >
          {mode.charAt(0).toUpperCase() + mode.slice(1)}
        </Button>
      ))}
    </ButtonGroup>
  );
}
