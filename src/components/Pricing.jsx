export default function Pricing() {
    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-5xl mx-auto text-center">
               
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Simple, Transparent Pricing</h2>
                <p className="text-gray-500 mt-3">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 items-stretch">

                    <div className="bg-white border border-gray-200 rounded-2xl p-8 text-left flex flex-col">
                        <h3 className="text-lg font-semibold text-gray-900">Starter</h3>
                        <p className="text-gray-400 text-sm mt-1">Perfect for getting started</p>
                        <p className="mt-6">
                            <span className="text-4xl font-bold text-gray-900">$0</span>
                            <span className="text-gray-400 text-sm">/Month</span>
                        </p>
                        <ul className="mt-6 space-y-3 text-sm text-gray-600 flex-1">
                            <li className="flex items-start gap-2">
                                <span className="text-purple-500 mt-0.5">✓</span> Access to 10 free tools
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-purple-500 mt-0.5">✓</span> Basic templates
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-purple-500 mt-0.5">✓</span> Community support
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-purple-500 mt-0.5">✓</span> 1 export per month
                            </li>
                        </ul>
                        <a href="#" className="mt-8 block text-center border border-purple-500 text-purple-600 font-medium text-sm py-3 rounded-full hover:bg-purple-50 transition">
                            Get Started Free
                        </a>
                    </div>

                   
                    <div className="bg-gradient-to-b from-purple-600 to-indigo-600 rounded-2xl p-8 text-left flex flex-col text-white relative shadow-xl scale-105">
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-purple-600 text-xs font-semibold px-4 py-1 rounded-full shadow">
                            Most Popular
                        </span>
                        <h3 className="text-lg font-semibold">Pro</h3>
                        <p className="text-purple-200 text-sm mt-1">Best for professionals</p>
                        <p className="mt-6">
                            <span className="text-4xl font-bold">$29</span>
                            <span className="text-purple-200 text-sm">/Month</span>
                        </p>
                        <ul className="mt-6 space-y-3 text-sm text-purple-100 flex-1">
                            <li className="flex items-start gap-2">
                                <span className="text-white mt-0.5">✓</span> Access to all premium tools
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-white mt-0.5">✓</span> Unlimited templates
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-white mt-0.5">✓</span> Priority support
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-white mt-0.5">✓</span> Unlimited projects
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-white mt-0.5">✓</span> Cloud sync
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-white mt-0.5">✓</span> Advanced analytics
                            </li>
                        </ul>
                        <a href="#" className="mt-8 block text-center bg-white text-purple-600 font-medium text-sm py-3 rounded-full hover:bg-purple-50 transition">
                            Start Pro Trial
                        </a>
                    </div>

                    
                    <div className="bg-white border border-gray-200 rounded-2xl p-8 text-left flex flex-col">
                        <h3 className="text-lg font-semibold text-gray-900">Enterprise</h3>
                        <p className="text-gray-400 text-sm mt-1">For teams and enterprises</p>
                        <p className="mt-6">
                            <span className="text-4xl font-bold text-gray-900">$99</span>
                            <span className="text-gray-400 text-sm">/Month</span>
                        </p>
                        <ul className="mt-6 space-y-3 text-sm text-gray-600 flex-1">
                            <li className="flex items-start gap-2">
                                <span className="text-purple-500 mt-0.5">✓</span> Everything in Pro
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-purple-500 mt-0.5">✓</span> Team collaboration
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-purple-500 mt-0.5">✓</span> Custom integrations
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-purple-500 mt-0.5">✓</span> Dedicated support
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-purple-500 mt-0.5">✓</span> SLA guarantee
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-purple-500 mt-0.5">✓</span> Custom branding
                            </li>
                        </ul>
                        <a href="#" className="mt-8 block text-center border border-purple-500 text-purple-600 font-medium text-sm py-3 rounded-full hover:bg-purple-50 transition">
                            Contact Sales
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
