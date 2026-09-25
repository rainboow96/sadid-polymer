export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen pb-12 pt-24 lg:pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </main>
  );
}
