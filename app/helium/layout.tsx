import type { Metadata } from "next";
import { HeliumFrame } from "@/app/components/HeliumFrame";

export const metadata: Metadata = {
  title: "Helium",
  description: "Explore Helium's noble-gas identity, cosmic formation, quantum behavior, discovery, uses, and supply.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <HeliumFrame>{children}</HeliumFrame>;
}
