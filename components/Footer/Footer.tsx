"use client";


export function Footer() {
  
  

  return (
    <footer className="bg-zinc-900  py-8">
  <div className="max-w-screen-xl mx-auto   px-4 sm:px-6 lg:px-8">
    <div className="md:flex md:justify-between">
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white">FusionDev Solutions</h2>
        <p className="text-gray-400">
          Your partner in custom web and mobile solutions.
        </p>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35c-0.733 0-1.325 0.592-1.325 1.325v21.351c0 0.733 0.592 1.324 1.325 1.324h11.495v-9.294h-3.122v-3.622h3.122v-2.669c0-3.1 1.893-4.788 4.657-4.788 1.324 0 2.462 0.098 2.794 0.142v3.24h-1.917c-1.503 0-1.795 0.714-1.795 1.761v2.314h3.588l-0.468 3.622h-3.12v9.294h6.112c0.733 0 1.325-0.591 1.325-1.324v-21.35c0-0.733-0.592-1.325-1.325-1.325z" />
            </svg>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.954 4.569c-0.885 0.392-1.832 0.656-2.828 0.775 1.017-0.608 1.798-1.574 2.165-2.724-0.951 0.564-2.005 0.974-3.127 1.195-0.897-0.957-2.178-1.555-3.594-1.555-2.717 0-4.924 2.207-4.924 4.923 0 0.386 0.043 0.762 0.127 1.124-4.092-0.205-7.719-2.166-10.148-5.144-0.423 0.725-0.666 1.562-0.666 2.457 0 1.696 0.864 3.192 2.178 4.073-0.803-0.026-1.56-0.246-2.223-0.616v0.062c0 2.367 1.685 4.342 3.918 4.788-0.41 0.112-0.843 0.172-1.29 0.172-0.316 0-0.623-0.031-0.922-0.087 0.624 1.951 2.436 3.372 4.584 3.412-1.68 1.316-3.799 2.102-6.102 2.102-0.395 0-0.786-0.023-1.17-0.068 2.18 1.398 4.768 2.212 7.548 2.212 9.057 0 14.01-7.503 14.01-14.01 0-0.213-0.005-0.426-0.014-0.637 0.962-0.693 1.8-1.562 2.462-2.549z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.67 3h-15.34c-0.639 0-1.16 0.521-1.16 1.16v15.34c0 0.639 0.521 1.16 1.16 1.16h15.34c0.639 0 1.16-0.521 1.16-1.16v-15.34c0-0.639-0.521-1.16-1.16-1.16zM7.229 18.225h-2.758v-8.545h2.758v8.545zM5.85 8.702c-0.885 0-1.601-0.716-1.601-1.601s0.716-1.601 1.601-1.601 1.601 0.716 1.601 1.601-0.716 1.601-1.601 1.601zM19.229 18.225h-2.758v-4.162c0-0.993-0.02-2.271-1.385-2.271s-1.598 1.083-1.598 2.199v4.234h-2.758v-8.545h2.65v1.167h0.037c0.369-0.698 1.27-1.435 2.614-1.435 2.795 0 3.311 1.84 3.311 4.229v4.584h-0.001z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="mt-8 md:mt-0 md:flex md:items-center">
        <nav className="flex flex-wrap justify-center space-x-6">
          <a href="/about" className="text-gray-400 hover:text-white">
            About
          </a>
          <a href="/services" className="text-gray-400 hover:text-white">
            Services
          </a>
          <a href="/contact" className="text-gray-400 hover:text-white">
            Contact
          </a>
          <a href="/privacy-policy" className="text-gray-400 hover:text-white">
            Privacy Policy
          </a>
        </nav>
      </div>
    </div>
    <div className="mt-8 border-t border-gray-800 pt-6 text-center">
      <p className="text-gray-400">&copy; 2024 FusionDev Solutions. All rights reserved.</p>
    </div>
  </div>
</footer>

    
  );
}

