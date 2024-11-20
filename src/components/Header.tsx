
function Header() {
  return (
    <header className="py-4" style={{
      backgroundColor: "var(--header-bg-color)",
      color: "var(--text-white-color)",
    }} >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold">ABC Public Libraries</h1>
        <nav className="space-x-4">
          <a href="#" className="hover:underline">Books & Resources</a>
          <a href="#" className="hover:underline">What's On</a>
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">My Account</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
