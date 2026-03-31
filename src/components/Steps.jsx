import userIcon from '../assets/user.png'
import packageIcon from '../assets/package.png'
import rocketIcon from '../assets/rocket.png'

export default function Steps() {
    return (
        <section className="bg-gray-50 py-20 px-6">
            <div className="max-w-5xl mx-auto text-center">
          
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get Started In 3 Steps</h2>
                <p className="text-gray-500 mt-3">Start using premium digital tools in minutes, not hours.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
                  
                    <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition">
                        <div className="w-14 h-14 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-5">
                            <img src={userIcon} alt="Create Account" className="w-7 h-7" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Create Account</h3>
                        <p className="text-gray-500 text-sm">Sign up for free in seconds. No credit card required to get started.</p>
                    </div>

                  
                    <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition">
                        <div className="w-14 h-14 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-5">
                            <img src={packageIcon} alt="Choose Products" className="w-7 h-7" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose Products</h3>
                        <p className="text-gray-500 text-sm">Browse our catalog and select the tools that fit your needs.</p>
                    </div>

                 
                    <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition">
                        <div className="w-14 h-14 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-5">
                            <img src={rocketIcon} alt="Start Creating" className="w-7 h-7" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Start Creating</h3>
                        <p className="text-gray-500 text-sm">Download and start using your assets or tools immediately.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
