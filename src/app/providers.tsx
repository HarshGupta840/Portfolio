"use client";
import { useEffect, useState } from "react";
import Glitch from "./component/glitch";

interface Props {
  children: React.ReactNode;
}

export function Providers({ children }: Props) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    if (document.readyState === "complete") return setShowLoader(false);
    window.addEventListener("load", () => {
      setShowLoader(false);
    });
  }, []);

  return <>{showLoader ? <Glitch /> : children}</>;
}
