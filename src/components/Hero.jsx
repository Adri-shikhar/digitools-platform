import bannerImg from '../assets/banner.png'
import playIcon from '../assets/Play.png'

export default function Hero() {
    return (
        <section className='bg-white'>
            
            <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
                
                <div className="flex-1 space-y-6">
                  
                    <span className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 text-sm font-medium px-4 py-1.5 rounded-full border border-purple-200">
                        <span>✦</span> New: AI-Powered Tools Available
                    </span>

                 
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 ">
                        Supercharge Your<br />Digital Workflow
                    </h1>

                 
                    <p className="text-gray-500 text-base leading-relaxed max-w-md">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.<br />
                        Explore Products
                    </p>

                  
                    <div className="flex items-center gap-4 pt-2">
                        <a href="#products" className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-6 py-3 rounded-full transition">
                            Explore Products
                        </a>
                        <a href="#demo" className="inline-flex items-center gap-2 border border-purple-300 text-purple-600 text-sm font-medium px-6 py-3 rounded-full hover:bg-purple-50 transition">
                            <img src={playIcon} alt="Play" className="w-4 h-4" />
                            Watch Demo
                        </a>
                    </div>
                </div>

               
                <div className="flex-1 flex justify-center">
                    <img src={bannerImg} alt="Digital Workflow" className="w-full max-w-md rounded-xl object-cover" />
                </div>
            </div>

         
            <div className="bg-gradient-to-r from-purple-600 to-indigo-500 py-10">
                <div className="max-w-4xl mx-auto flex justify-around items-center text-white text-center">
              
                    <div>
                        <p className="text-4xl font-bold">50K+</p>
                        <p className="text-sm mt-1 text-purple-100">Active Users</p>
                    </div>

                    <div className="w-px h-12 bg-white/30"></div>

                
                    <div>
                        <p className="text-4xl font-bold">200+</p>
                        <p className="text-sm mt-1 text-purple-100">Premium Tools</p>
                    </div>

                    <div className="w-px h-12 bg-white/30"></div>

                   
                    <div>
                        <p className="text-4xl font-bold">4.9</p>
                        <p className="text-sm mt-1 text-purple-100">Rating</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
