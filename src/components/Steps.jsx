export default function Steps() {
    return (
        <section className="bg-gray-50 py-20 px-6">
            <div className="max-w-5xl mx-auto text-center">

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get Started In 3 Steps</h2>
                <p className="text-gray-500 mt-3">Start using premium digital tools in minutes, not hours.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">

                    <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition relative">
                        <div className="absolute top-4 right-4 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">01</div>
                        <div className="w-14 h-14 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-5">
                            <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 10H9m6 0a6 6 0 11-12 0 6 6 0 0112 0z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Create Account</h3>
                        <p className="text-gray-500 text-sm">Sign up for free in seconds. No credit card required to get started.</p>
                    </div>


                    <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition relative">
                        <div className="absolute top-4 right-4 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">02</div>
                        <div className="w-14 h-14 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-5">
                            <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.25 6.375c0 2.278-1.435 4.172-3.882 5.397M9.75 17.25m0 0a6.75 6.75 0 1 1 .008-.013m0 .013a6.75 6.75 0 0 1 6-3.75m3.218-1.217a23.5 23.5 0 0 1-3.282 3.282m0 0a23.5 23.5 0 0 0-3.282-3.282m0 0c.577-.577.873-1.5.873-2.408a3.75 3.75 0 0 0-7.5 0c0 .908.296 1.831.873 2.408" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose Products</h3>
                        <p className="text-gray-500 text-sm">Browse our catalog and select the tools that fit your needs.</p>
                    </div>


                    <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition relative">
                        <div className="absolute top-4 right-4 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">03</div>
                        <div className="w-14 h-14 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-5">
                            <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12.75 15l6.75-6.75M12.75 15l-6.75-6.75M12.75 15H21m-16.5 0H3" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Start Creating</h3>
                        <p className="text-gray-500 text-sm">Download and start using your assets or tools immediately.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
