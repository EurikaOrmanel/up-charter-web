import { Music2, Search } from "lucide-react";

export default function NavBar() {

    return <>
        <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur-xl bg-black/30 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Music2 size={32} className="text-pink-500" />
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Up-charter
                        </h1>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full opacity-70 blur group-hover:opacity-100 transition-opacity" />
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60" size={20} />
                            <input
                                type="text"
                                placeholder="Search tracks..."
                                className="bg-black/50 backdrop-blur-lg rounded-full pl-12 pr-6 py-3 w-64 border border-white/10 focus:outline-none focus:border-pink-500 transition-all"
                            //   value={searchTerm}
                            //   onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
} 