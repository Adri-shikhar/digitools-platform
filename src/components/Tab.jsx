import React from 'react';

const Tab = ({ setActiveTab }) => {
    return (
        <div>
            <div className="flex justify-center py-6 bg-white bor">
        <div className="flex gap-2 border border-gray-200 rounded-full p-1">
          <input
            type="radio"
            name="my_tabs_1"
            className="tab px-6 py-2 rounded-full font-semibold text-sm checked:bg-purple-600 checked:text-white text-gray-700"
            aria-label="Products"
            defaultChecked
            onClick={() => setActiveTab('products')}
          />
          <input
            type="radio"
            name="my_tabs_1"
            className="tab px-6 py-2 rounded-full font-semibold text-sm checked:bg-purple-600 checked:text-white text-gray-700"
            aria-label="Cart"
            onClick={() => setActiveTab('cart')}
          />
        </div>
      </div>
        </div>
    );
};

export default Tab;