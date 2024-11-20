function Footer() {
  return (
    <footer
      className="text-white py-6 mt-8"
      style={{
        backgroundColor: "var(--header-bg-color)",
        color: "var(--book-card-bg-color)",
      }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm" style={{ fontSize: "var(--font-size-small)" }}>
          © 2024 ABC Public Libraries. All rights reserved.
        </p>
        <div className="space-x-4 mt-4">
          <a
            href="#"
            className="hover:underline"
            style={{ color: "var(--text-white-color)" }}
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-white hover:underline"
            style={{ color: "var(--text-white-color)" }}
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-white hover:underline"
            style={{ color: "var(--text-white-color)" }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
