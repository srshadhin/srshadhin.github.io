export function Backdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
      <div className="absolute inset-0 bg-bg" />
      <div className="bg-grid absolute inset-0" />
      <div className="bg-noise absolute inset-0" />
      <div
        className="absolute left-1/2 top-0 h-[560px] w-[900px] -translate-x-1/2 rounded-full opacity-[0.12] blur-[120px]"
        style={{ background: "var(--accent)" }}
      />
    </div>
  );
}
