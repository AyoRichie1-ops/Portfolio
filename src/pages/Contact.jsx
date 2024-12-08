import React, { useState } from 'react';

const Contact = ({ darkMode }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        fetch("https://formsubmit.co/1f845537690f2cc0d10804408221877d", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (response.ok) {
                    setStatus("Success");
                    setFormData({ name: '', email: '', message: '' });
                } else {
                    setStatus("Failed");
                }
                setIsModalOpen(true);
            })
            .catch((error) => {
                console.error("Error:", error);
                setStatus("Failed");
                setIsModalOpen(true);
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setStatus('');
        setIsSubmitting(false);
    };

    return (
        <div className={`${darkMode ? "bg-black text-white" : "bg-white text-black"} min-h-screen flex items-center justify-center py-10 px-4`}>
            <div className={`container mx-auto max-w-2xl rounded-lg p-6 lg:p-12 ${darkMode ? "shadow-xl shadow-gray-800" : "shadow-lg shadow-gray-300"}`}>
                <h1 className="text-3xl font-bold mb-6 text-center dark:text-gray-200">Contact Me</h1>
                <p className="text-center dark:text-gray-200 mb-8">
                    I’d love to hear from you! Whether you have a question or just want to connect, feel free to send me a message.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border dark:border-gray-700 rounded-md text-gray-900 dark:bg-gray-800 dark:text-gray-100 outline-green-700  placeholder-transparent"
                        />
                        <label
                            htmlFor="name"
                            className={`${darkMode ? "bg-slate-900 text-gray-50" : "bg-white text-black"} absolute left-4 top-1 text-gray-500 dark:text-gray-400 transform -translate-y-4 scale-75 pointer-events-none transition-all duration-200 ease-in-out origin-left px-1`}
                        >
                            Name
                        </label>
                    </div>
                    <div className="relative">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border dark:border-gray-700 rounded-md text-gray-900 dark:bg-gray-800 dark:text-gray-100 outline-green-700 placeholder-transparent"
                        />
                        <label
                            htmlFor="email"
                            className={`${darkMode ? "bg-slate-900 text-gray-50" : "bg-white text-black"} absolute left-4 top-1 text-gray-500 dark:text-gray-400 transform -translate-y-4 scale-75 pointer-events-none transition-all duration-200 ease-in-out origin-left px-1`}
                        >
                            Email
                        </label>
                    </div>
                    <div className="relative">
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            className="w-full px-4 py-2 border dark:border-gray-700 rounded-md text-gray-900 dark:bg-gray-800 dark:text-gray-100 outline-green-700 placeholder-transparent"
                        ></textarea>
                        <label
                            htmlFor="message"
                            className={`${darkMode ? "bg-slate-900 text-gray-50" : "bg-white text-black"} absolute left-4 top-1 text-gray-500 dark:text-gray-400 transform -translate-y-4 scale-75 pointer-events-none transition-all duration-200 ease-in-out origin-left px-1`}
                        >
                            Message
                        </label>
                    </div>
                    <button
                        type="submit"
                        className={`w-full py-3 mt-4 text-white font-semibold rounded-md transition-colors ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-700 hover:bg-green-800'}`}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Please wait..." : "Send message"}
                    </button>
                </form>

                {/* Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 p-4">
                        <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-lg p-6 max-w-md w-full text-center shadow-md">
                            <h2 className="text-2xl font-semibold mb-4">
                                {status === 'Success' ? 'Message Sent' : 'Submission Failed'}
                            </h2>
                            <p className="mb-6">
                                {status === 'Success' ?
                                    'Thank you! Your message has been successfully sent.' :
                                    'Oops! Something went wrong. Please try again later.'}
                            </p>
                            <button
                                onClick={closeModal}
                                className="px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-900"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Contact;
