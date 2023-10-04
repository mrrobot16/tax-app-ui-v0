export default function Navbar() {
  return (
    <header className="container sticky top-0 z-40 bg-white">
      <div className="h-16 border-b border-b-slate-200 py-4">
        <nav className="ml-4 pl-6">
          <a href="/" className="hover:text-slate-600 cursor-pointer font-bold">
            Home
          </a>
        </nav>
      </div>
    </header>
  );
}
