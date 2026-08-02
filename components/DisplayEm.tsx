import { displayEmClass } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export default function DisplayEm({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <em className={cn(displayEmClass, className)}>{children}</em>;
}
