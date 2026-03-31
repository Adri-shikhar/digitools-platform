import { use } from 'react';

const iconMap = {
    FaFileAlt: '📄',
    FaEnvelopeOpenText: '✉️',
    FaGlobe: '🌐',
    FaLinkedin: '💼',
    FaUserTie: '👔',
    FaTasks: '✅',
    FaFileSignature: '📝',
    FaUserCircle: '👤',
};

const tagStyles = {
    popular: 'bg-purple-100 text-purple-600',
    new: 'bg-green-100 text-green-600',
    'best seller': 'bg-orange-100 text-orange-500',
};

const tagLabels = {
    popular: 'Popular',
    new: 'New',
    'best seller': 'Best Seller',
};

const Modal = ({ dataPromise }) => {
    const data = use(dataPromise);

    return (
        <section className="px-6 py-12 bg-gray-50">
            <div className="max-w-6xl mx-auto border-2 border-dashed border-gray-200 rounded-2xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.map((item) => (
                        <div key={item.id} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col gap-4 relative">

                            {item.tagType && (
                                <span className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full ${tagStyles[item.tagType] || 'bg-gray-100 text-gray-500'}`}>
                                    {tagLabels[item.tagType] || item.tag}
                                </span>
                            )}

                            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-2xl">
                                {iconMap[item.icon] || '🔧'}
                            </div>

                            <div>
                                <h2 className="text-lg font-bold text-gray-900 mb-1">{item.name}</h2>
                                <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                            </div>

                            <div className="text-2xl font-bold text-gray-900">
                                ${item.price}
                                <span className="text-sm font-normal text-gray-400 ml-1">
                                    /{item.period === 'monthly' ? 'Mo' : item.period === 'yearly' ? 'Yr' : 'One-Time'}
                                </span>
                            </div>

                            <ul className="flex flex-col gap-2">
                                {item.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                        <span className="text-green-500 font-bold">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                type="button"
                                aria-label={`Buy ${item.name}`}
                                className="mt-auto w-full py-3 rounded-full text-white font-semibold text-sm bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center"
                            >
                                Buy Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Modal;