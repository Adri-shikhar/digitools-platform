import { use } from 'react';
import ModalCard from './ModalCard';



const Modal = ({ dataPromise , carts, setCarts}) => {
    const data = use(dataPromise);

    return (
        <section className="px-6 py-12 bg-gray-50">
            <div className="max-w-6xl mx-auto border-2 border-dashed border-gray-200 rounded-2xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.map((item) => (
                        <ModalCard key={item.id} item={item} carts={carts} setCarts={setCarts} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Modal;