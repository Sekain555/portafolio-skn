import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type BreadcrumbItem = {
  label: string;
  href: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="breadcrumb" className={cn("mb-6", className)}>
      <ol className="flex items-center gap-2 text-sm text-muted-foreground">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {index > 0 && <ChevronRight className="h-4 w-4" />}
            <Link
              href={item.href}
              className={cn(
                "hover:text-primary transition-colors",
                index === items.length - 1 && "font-medium text-foreground"
              )}
              aria-current={index === items.length - 1 ? "page" : undefined}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
