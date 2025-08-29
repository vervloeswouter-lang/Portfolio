// app/cv/page.tsx
export const metadata = {
  title: "CV — Wouter Vervloessem",
  description: "View and download the CV (PDF).",
};

const CV_PATH = "/cv/WouterVervloessem_CV.pdf"; // place the file in /public/cv/

export default function CvPage() {
  return (
    <section className="container py-12 md:py-16 max-w-4xl">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold">Curriculum Vitae</h1>
        <div className="flex gap-3">
          <a href={CV_PATH} download className="btn btn-primary">
            Download PDF
          </a>
          <a href={CV_PATH} target="_blank" rel="noreferrer" className="btn btn-outline">
            Open in new tab
          </a>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-3">
        <iframe
          src={CV_PATH}
          title="Wouter Vervloessem — CV"
          className="h-[80vh] w-full rounded-xl"
        />
      </div>

      <p className="mt-3 text-xs text-zinc-500">
        If the preview doesn’t load on your device, use <a className="underline" href={CV_PATH} target="_blank" rel="noreferrer">Open in new tab</a>.
      </p>
    </section>
  );
}
