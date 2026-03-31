export default function Banner() {
    return (
        <section className="bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 py-16 px-6">
            <div className="max-w-3xl mx-auto text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold">Ready To Transform Your Workflow?</h2>
                <p className="mt-4 text-purple-100 text-sm md:text-base">
                    Join thousands of creators and teams already using DigiTools to work smarter.<br />
                    Start your free trial today.
                </p>

                <div className="flex items-center justify-center gap-4 mt-8">
                    <a href="#products" className="bg-white text-purple-600 font-medium text-sm px-6 py-3 rounded-full hover:bg-purple-50 transition shadow">
                        Explore Products
                    </a>
                    <a href="#pricing" className="border border-white text-white font-medium text-sm px-6 py-3 rounded-full hover:bg-white/10 transition">
                        View Pricing
                    </a>
                </div>

                
                <p className="mt-6 text-purple-200 text-xs">
                    14-day free trial • No credit card required • Cancel anytime
                </p>
            </div>
        </section>
    )
}
