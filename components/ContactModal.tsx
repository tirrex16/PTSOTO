import React, { useState } from 'react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    const [name, setName] = useState('');
    const [especially, setEspecially] = useState('');
    const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [description, setDescription] = useState('');
    const phoneNumber = '6281291720715';

    if (!isOpen) return null;

    const handleSend = () => {
        let fullMessage = `*New Inquiry*\n\n*Name:* ${name}\n*Purpose:* ${especially}`;

        if (especially === 'Order') {
            if (selectedProducts.length > 0) {
                fullMessage += `\n*Products:* ${selectedProducts.join(', ')}`;
            }
            if (selectedServices.length > 0) {
                fullMessage += `\n*Services:* ${selectedServices.join(', ')}`;
            }
        }

        fullMessage += `\n*Description:* ${description}`;

        const encodedMessage = encodeURIComponent(fullMessage);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
        onClose();
        // Reset form
        setName('');
        setEspecially('');
        setSelectedProducts([]);
        setSelectedServices([]);
        setDescription('');
    };

    const isFormValid = () => {
        if (!name || !especially || !description) return false;
        if (especially === 'Order') {
            if (selectedProducts.length === 0 && selectedServices.length === 0) return false;
        }
        return true;
    };

    const toggleProduct = (value: string) => {
        setSelectedProducts(prev =>
            prev.includes(value)
                ? prev.filter(item => item !== value)
                : [...prev, value]
        );
    };

    const toggleService = (value: string) => {
        setSelectedServices(prev =>
            prev.includes(value)
                ? prev.filter(item => item !== value)
                : [...prev, value]
        );
    };

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-lg p-8 transform transition-all animate-in fade-in zoom-in duration-300 max-h-[90vh] overflow-y-auto">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-400"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Header */}
                <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">Contact Us</h3>
                    <p className="text-gray-500 text-sm">
                        Please fill in the details below to start a chat with us.
                    </p>
                </div>

                {/* Form Fields */}
                <div className="space-y-6">
                    {/* Name */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Type here"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-gray-400 text-gray-700"
                        />
                    </div>

                    {/* Especially Dropdown */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Contact Purpose</label>
                        <div className="relative">
                            <select
                                value={especially}
                                onChange={(e) => {
                                    setEspecially(e.target.value);
                                    if (e.target.value !== 'Order') {
                                        setSelectedProducts([]);
                                        setSelectedServices([]);
                                    }
                                }}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-700 appearance-none bg-white cursor-pointer"
                            >
                                <option value="" disabled>Select Purpose</option>
                                <option value="Order">Order</option>
                                <option value="General Inquiry">General</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Conditional Order Selection Flow (Checkboxes) */}
                    {especially === 'Order' && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-top-2 duration-300 bg-gray-50 p-6 rounded-xl border border-gray-100">

                            {/* Products */}
                            <div className="space-y-3">
                                <label className="text-sm font-semibold text-gray-700 block">Products</label>
                                <div className="space-y-2">
                                    {['High Speed Diesel B40', 'Marine Fuel Oil'].map((product) => (
                                        <label key={product} className="flex items-center space-x-3 cursor-pointer group">
                                            <div className="relative flex items-center">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedProducts.includes(product)}
                                                    onChange={() => toggleProduct(product)}
                                                    className="peer h-5 w-5 cursor-pointer rounded-md border-gray-300 border-2 text-blue-600 focus:ring-blue-500 focus:ring-offset-0 transition-all checked:border-blue-600"
                                                />
                                                <svg
                                                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none opacity-0 peer-checked:opacity-100 text-white transition-opacity"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={3}
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-600 group-hover:text-gray-900 transition-colors select-none">{product}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Services */}
                            <div className="space-y-3">
                                <label className="text-sm font-semibold text-gray-700 block">Services</label>
                                <div className="space-y-2">
                                    {['Port to Ship', 'Ship to Ship'].map((service) => (
                                        <label key={service} className="flex items-center space-x-3 cursor-pointer group">
                                            <div className="relative flex items-center">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedServices.includes(service)}
                                                    onChange={() => toggleService(service)}
                                                    className="peer h-5 w-5 cursor-pointer rounded-md border-gray-300 border-2 text-blue-600 focus:ring-blue-500 focus:ring-offset-0 transition-all checked:border-blue-600"
                                                />
                                                <svg
                                                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none opacity-0 peer-checked:opacity-100 text-white transition-opacity"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={3}
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-600 group-hover:text-gray-900 transition-colors select-none">{service}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Descriptions */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Descriptions</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Type here"
                            className="w-full h-32 px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none placeholder-gray-400 text-gray-700"
                        />
                        <div className="flex justify-end">
                            <span className="text-xs text-gray-400">{400 - description.length} characters left</span>
                        </div>
                    </div>
                </div>

                {/* Footer Buttons */}
                <div className="mt-8 flex gap-4">
                    <button
                        onClick={onClose}
                        className="flex-1 py-3 px-4 rounded-xl font-semibold text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSend}
                        disabled={!isFormValid()}
                        className={`flex-1 py-3 px-4 rounded-xl font-semibold text-white transition-all shadow-md hover:shadow-lg
                            ${!isFormValid()
                                ? 'bg-blue-300 cursor-not-allowed'
                                : 'bg-blue-600 hover:bg-blue-700'
                            }`}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;
