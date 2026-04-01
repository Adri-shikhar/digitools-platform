import React from 'react';
import { toast } from 'react-toastify';

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

const Cart = ({ carts, setCarts }) => {
    const handleRemove = (id) => {
        const updatedCart = carts.filter(item => item.id !== id);
        setCarts(updatedCart);
        toast.info('Item removed from cart');
    };

    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

    const handleCheckout = () => {
        setCarts([]);
        toast.success('Checkout successful! Cart is now empty.', {
            position: 'top-center',
          
        });
    }

    return (
        <div className="px-6 py-12 bg-white">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Cart</h2>

                {carts.length === 0 ? (
                    <p className="text-gray-500 text-center py-10">Your cart is empty</p>
                ) : (
                    <>
                        <div className="space-y-4 mb-6">
                            {carts.map((item) => (
                                <div key={item.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-xl">
                                            {iconMap[item.icon] || '🔧'}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">{item.name}</p>
                                            <p className="text-sm text-gray-500">${item.price}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleRemove(item.id)}
                                        className="text-red-500 hover:text-red-700 font-semibold text-sm"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="border-t border-gray-200 pt-4">
                            <div className="flex justify-between items-center mb-6">
                                <p className="text-gray-600">Total:</p>
                                <p className="text-2xl font-bold text-gray-900">${totalPrice}</p>
                            </div>
                            <button
                                onClick={handleCheckout}
                                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-full transition"
                            >
                                Proceed To Checkout
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;