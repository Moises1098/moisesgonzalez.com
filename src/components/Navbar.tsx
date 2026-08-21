export default function Navbar() {
    return (
        <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-white"></div>
                <div className="text-xl font-bold">
                Moises Gonzalez
                </div>
            </div>
            
            <div className="flex space-x-4">
                <a href="/" className="hover:underline">Home</a>
                <a href="/about" className="hover:underline">About</a>
                <a href="/projects" className="hover:underline"> Projects</a>
                <a href="/mini-projects" className="hover:underline">Mini Projects</a>
                <a href="/contact-me" className="hover:underline">Contact Me</a>
            </div>
        </nav>
    )
}
