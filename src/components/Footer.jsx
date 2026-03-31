export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-14 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10">

               
                <div className="col-span-2 md:col-span-1">
                    <h2 className="text-xl font-bold italic text-white mb-3">DigiTools</h2>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Premium digital tools for creators, professionals, and businesses. We've streamlined and curated a selection of powerful tools.
                    </p>
                </div>

               
                <div>
                    <h3 className="text-white font-semibold text-sm mb-4">Product</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-white transition">Features</a></li>
                        <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                        <li><a href="#" className="hover:text-white transition">Templates</a></li>
                        <li><a href="#" className="hover:text-white transition">Integrations</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold text-sm mb-4">Company</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-white transition">About</a></li>
                        <li><a href="#" className="hover:text-white transition">Blog</a></li>
                        <li><a href="#" className="hover:text-white transition">Careers</a></li>
                        <li><a href="#" className="hover:text-white transition">Press</a></li>
                    </ul>
                </div>

         
                <div>
                    <h3 className="text-white font-semibold text-sm mb-4">Resources</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                        <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                        <li><a href="#" className="hover:text-white transition">Community</a></li>
                        <li><a href="#" className="hover:text-white transition">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold text-sm mb-4">Social Links</h3>
                    <div className="flex items-center gap-3">
                       
                        <a href="#" className="w-9 h-9 bg-gray-700 hover:bg-purple-600 rounded-full flex items-center justify-center transition" aria-label="Facebook">
                            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
                        </a>
                        
                        <a href="#" className="w-9 h-9 bg-gray-700 hover:bg-purple-600 rounded-full flex items-center justify-center transition" aria-label="Twitter">
                            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 12 7.5v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5 0-.28-.03-.56-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
                        </a>
                        
                        <a href="#" className="w-9 h-9 bg-gray-700 hover:bg-purple-600 rounded-full flex items-center justify-center transition" aria-label="LinkedIn">
                            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM6.918 20.452H3.756V9h3.162v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
