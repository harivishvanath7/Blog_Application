function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-6xl mx-auto px-4 text-center">

        <h3 className="text-white text-xl font-semibold mb-4">
          Hari's Blogs
        </h3>

        <p className="mb-4">
          Sharing knowledge with the world 🌍
        </p>

        <div className="flex justify-center gap-6 mb-4">
          <span className="hover:text-white cursor-pointer">Twitter</span>
          <span className="hover:text-white cursor-pointer">LinkedIn</span>
          <span className="hover:text-white cursor-pointer">GitHub</span>
        </div>

        <p className="text-sm">
          © 2026 Hari's Blogs. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;