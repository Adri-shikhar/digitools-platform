export default function Nav({ carts }) {
    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 py-3 px-6 shadow-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                <h1 className="text-2xl font-bold italic text-purple-600">DigiTools</h1>

                <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
                    <li><a href="#products" className="hover:text-purple-600 transition">Products</a></li>
                    <li><a href="#features" className="hover:text-purple-600 transition">Features</a></li>
                    <li><a href="#pricing" className="hover:text-purple-600 transition">Pricing</a></li>
                    <li><a href="#testimonials" className="hover:text-purple-600 transition">Testimonials</a></li>
                    <li><a href="#faq" className="hover:text-purple-600 transition">FAQ</a></li>
                </ul>

                <div className="flex items-center gap-4">

                    <div className="relative">
                        <button className="text-gray-600 hover:text-purple-600 transition" aria-label="Cart">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                        </button>
                       
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                {carts.length}
                            </span>
                       
                    </div>


                    <a href="#login" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition">Login</a>


                    <a href="#get-started" className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-5 py-2 rounded-full transition">
                        Get Started
                    </a>
                </div>
            </div>
        </nav>
    )
}
