export default function Header({ title }: { title: string }) {
  return (
    <div className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-md items-center justify-between px-4 py-3">
        <div className="text-base font-semibold">{title}</div>
        <div className="flex items-center gap-3 text-white/70">
          <span className="h-9 w-9 rounded-full bg-white/10" />
          <span className="h-9 w-9 rounded-full bg-white/10" />
        </div>
      </div>
    </div>
  );
}
