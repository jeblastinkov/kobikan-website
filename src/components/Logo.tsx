export function Logo({ className = "" }: { className?: string }) {
  return <img src="/kobikan-logo.svg" alt="KobiKan" className={`h-8 w-auto ${className}`} />;
}
