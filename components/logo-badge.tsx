"use client";

export default function LogoBadge({ name, src }: { name: string; src: string }) {
  return (
    <div className="flex items-center gap-2">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={name}
        width={28}
        height={28}
        className="rounded"
        onError={(e) => {
          e.currentTarget.outerHTML =
            `<span class='inline-flex h-7 items-center rounded-md bg-zinc-100 px-2 text-xs text-zinc-700'>${name}</span>`;
        }}
      />
      <span className="text-sm">{name}</span>
    </div>
  );
}
