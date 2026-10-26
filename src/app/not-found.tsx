import Link from "next/link";
import { ArrowLeft, Home, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      {/* 404 Illustration */}
      <div className="relative mb-8">
        <h1 className="text-[clamp(120px,25vw,240px)] font-black leading-none tracking-tighter text-primary/10">
          404
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-lg">
        <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
          Page Not Found / Under Construction
        </span>

        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Sorry For The Inconvenience
        </h2>

        <p className="mb-8 text-muted-foreground leading-relaxed">
          The page you're looking for doesn't exist, has been moved, or is
          temporarily unavailable. Let's get you back on track.
        </p>

        {/* Back to Home */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Footer */}
      <p className="absolute bottom-8 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Geeb Dev Space. All rights reserved.
      </p>
    </main>
  );
}
