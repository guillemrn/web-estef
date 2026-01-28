import { cn } from "@/lib/utils";

export function Container({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                "mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-[128px]",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
