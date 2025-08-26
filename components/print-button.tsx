"use client";

export default function PrintButton({ className = "" }: { className?: string }) {
  return (
    <button onClick={() => window.print()} className={`btn btn-primary ${className}`}>
      Download as PDF
    </button>
  );
}
