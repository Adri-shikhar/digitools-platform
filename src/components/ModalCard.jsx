import { useState } from 'react';

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

const Tag = ({ tagType, tag }) => {
    if (!tagType) return null;

    const label = tagLabels[tagType] || tag;
    const style = tagStyles[tagType] || 'bg-gray-100 text-gray-500';

    return (
        <span className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full ${style}`}>
            {label}
        </span>
    );
};

const ModalCard = ({ item, carts, setCarts }) => {
    const [isAdded, setIsAdded] = useState(carts.some(cartItem => cartItem.id === item?.id));

    if (!item) return null;
    const { id, tagType, icon, name, description, price, period, features = [], tag } = item;

    const handleAddToCart = () => {
        setIsAdded(true);
        setCarts([...carts, item]);
    };

    return (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col gap-4 relative">

            <Tag tagType={tagType} tag={tag} />

            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-2xl">
                {iconMap[icon] || '🔧'}
            </div>

            <div>
                <h2 className="text-lg font-bold text-gray-900 mb-1">{name}</h2>
                <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
            </div>

            <div className="text-2xl font-bold text-gray-900">
                ${price}
                <span className="text-sm font-normal text-gray-400 ml-1">
                    /{period === 'monthly' ? 'Mo' : period === 'yearly' ? 'Yr' : 'One-Time'}
                </span>
            </div>

            <ul className="flex flex-col gap-2">
                {features.map((feature, i) => (
                    <li key={`${id}-${i}`} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="text-green-500 font-bold">✓</span>
                        {feature}
                    </li>
                ))}
            </ul>

            <button
                type="button"
                aria-label={`Buy ${name}`}
                onClick={() => handleAddToCart(false)}
                className={`mt-auto w-full py-3 rounded-full text-white font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center ${isAdded
                    ? 'bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700'
                    : 'bg-linear-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700'
                    }`}
            >
                {isAdded ? '✓ Added to cart' : 'Buy Now'}
            </button>
        </div>
    );
};

export default ModalCard;