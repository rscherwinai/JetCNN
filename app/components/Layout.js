import Link from "next/link";
import Image from "next/image";
import BreakingNews from "./BreakingNews";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <BreakingNews />
      {/* Top Navigation */}
      <nav className="bg-[#125740] text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/images/jets-logo.svg"
                alt="Jets Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="font-bold text-2xl">JETS NEWS</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/news" className="hover:text-gray-200 transition-colors font-semibold">
                News
              </Link>
              <Link href="/analysis" className="hover:text-gray-200 transition-colors font-semibold">
                Analysis
              </Link>
              <Link href="/schedule" className="hover:text-gray-200 transition-colors font-semibold">
                Schedule
              </Link>
              <Link href="/roster" className="hover:text-gray-200 transition-colors font-semibold">
                Roster
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Secondary Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-6 h-10 text-sm">
            <Link href="/team" className="hover:text-[#125740] transition-colors">Team</Link>
            <Link href="/stats" className="hover:text-[#125740] transition-colors">Stats</Link>
            <Link href="/standings" className="hover:text-[#125740] transition-colors">Standings</Link>
            <Link href="/videos" className="hover:text-[#125740] transition-colors">Videos</Link>
            <Link href="/photos" className="hover:text-[#125740] transition-colors">Photos</Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="min-h-[calc(100vh-400px)]">
        {children}
      </div>

      {/* Footer */}
      <footer className="bg-[#125740] text-white mt-12">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">New York Jets</h3>
              <p className="text-gray-300 text-sm">
                Your trusted source for Jets news, analysis, and updates.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/news" className="hover:text-gray-300">Latest News</Link></li>
                <li><Link href="/schedule" className="hover:text-gray-300">Game Schedule</Link></li>
                <li><Link href="/roster" className="hover:text-gray-300">Team Roster</Link></li>
                <li><Link href="/tickets" className="hover:text-gray-300">Tickets</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Team</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
                <li><Link href="/staff" className="hover:text-gray-300">Staff</Link></li>
                <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
                <li><Link href="/careers" className="hover:text-gray-300">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Follow the Jets</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                {/* Add other social media icons */}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-sm text-gray-300">
            <p>© 2024 Jets News. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 