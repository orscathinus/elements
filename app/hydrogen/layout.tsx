import type { Metadata } from "next";
import { HydrogenFrame } from "@/app/components/HydrogenFrame";

export const metadata: Metadata = {
  title: "Hydrogen",
  description: "Explore Hydrogen's identity, atomic structure, cosmic origins, discovery, and uses.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <HydrogenFrame>{children}</HydrogenFrame>;
}

