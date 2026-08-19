'use client';
import { getAtIcon, getEmailIcon, getTIcon, getUserIcon } from '@/components/widget/icons/IconRaw';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
    const [isEmailLoading, setIsEmailLoading] = useState(false);
    const [emailSucceed, setEmailSucceed] = useState(false);
    const [emailErr, setEmailErr] = useState("");
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // Check if environment variables are set
        const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            setEmailErr("Email service is not configured properly. Please check environment variables.");
            return;
        }

        if (form.current) {
            setIsEmailLoading(true);
            setEmailSucceed(false);
            setEmailErr("");

            emailjs.sendForm(
                serviceId, 
                templateId, 
                form.current, 
                publicKey
            )
            .then((result) => {
                if (result.text?.toLowerCase() === "ok" || result.status === 200) {
                    setEmailSucceed(true);
                    if (form.current) {
                        form.current.reset();
                    }
                    // Auto-hide success message after 5 seconds
                    setTimeout(() => {
                        setEmailSucceed(false);
                    }, 5000);
                }
                setIsEmailLoading(false);
            }, (error) => {
                console.error("EmailJS Error:", error);
                setIsEmailLoading(false);
                setEmailErr(error.text || "Failed to send message. Please try again.");
                // Auto-hide error message after 5 seconds
                setTimeout(() => {
                    setEmailErr("");
                }, 5000);
            });
        }
    };

    return (
        <section id="contact_id">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 inline-block relative pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-teal-400 after:rounded-full">
                Get in Touch
            </h3>
            
            <div className="bg-gradient-to-br from-[#1a1a26] to-[#0d0d14] p-6 md:p-8 rounded-lg shadow-xl">
                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                    {/* Subject Field */}
                    <div className="flex rounded-md overflow-hidden shadow-md">
                        <span className="flex justify-center items-center bg-[#20202a] w-12 min-h-[48px]">
                            {getTIcon(20, 20, '#94a3b8')}
                        </span>
                        <input
                            className="flex-1 outline-none h-12 px-4 text-white text-base placeholder:text-gray-400"
                            style={{ background: "linear-gradient(159deg, #252532 0%, #23232d 100%)" }}
                            type="text"
                            name="from_subject"
                            placeholder="Subject"
                            required
                        />
                    </div>

                    {/* Full Name Field */}
                    <div className="flex rounded-md overflow-hidden shadow-md">
                        <span className="flex justify-center items-center bg-[#20202a] w-12 min-h-[48px]">
                            {getUserIcon(20, 20, '#94a3b8')}
                        </span>
                        <input
                            className="flex-1 outline-none h-12 px-4 text-white text-base placeholder:text-gray-400"
                            style={{ background: "linear-gradient(159deg, #252532 0%, #23232d 100%)" }}
                            type="text"
                            name="from_name"
                            placeholder="Full Name"
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div className="flex rounded-md overflow-hidden shadow-md">
                        <span className="flex justify-center items-center bg-[#20202a] w-12 min-h-[48px]">
                            {getAtIcon(20, 20, '#94a3b8')}
                        </span>
                        <input
                            className="flex-1 outline-none h-12 px-4 text-white text-base placeholder:text-gray-400"
                            style={{ background: "linear-gradient(159deg, #252532 0%, #23232d 100%)" }}
                            type="email"
                            name="user_email"
                            placeholder="example@email.com"
                            required
                        />
                    </div>

                    {/* Message Field */}
                    <div className="flex rounded-md overflow-hidden shadow-md">
                        <span className="flex justify-start items-start pt-4 bg-[#20202a] w-12 min-h-[48px]">
                            {getEmailIcon(20, 20, '#94a3b8')}
                        </span>
                        <textarea
                            className="flex-1 outline-none w-full px-4 py-3 text-white text-sm placeholder:text-gray-400 min-h-[180px] md:min-h-[200px] resize-y scrollbar-thin scrollbar-thumb-teal-400 scrollbar-track-gray-700"
                            style={{ background: "linear-gradient(159deg, #252532 0%, #23232d 100%)" }}
                            name="message"
                            placeholder="Write your message here..."
                            required
                        />
                    </div>

                    {/* Status Messages */}
                    <div className="min-h-[22px]">
                        {emailSucceed && (
                            <p className="text-green-400 font-medium animate-pulse">
                                ✅ Message sent successfully!
                            </p>
                        )}
                        {emailErr && (
                            <p className="text-red-400 font-medium">
                                ❌ {emailErr}
                            </p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div className="mt-6">
                        {isEmailLoading ? (
                            <div className="flex items-center space-x-3 px-2">
                                <div className="flex space-x-1">
                                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce"></div>
                                </div>
                                <span className="text-gray-400 text-sm">Sending message...</span>
                            </div>
                        ) : (
                            <button 
                                className="px-8 py-2.5 bg-teal-400 text-black font-bold uppercase tracking-wider rounded-md hover:bg-teal-300 hover:scale-105 transition-all duration-300 ease-in-out shadow-lg hover:shadow-teal-400/25"
                                type="submit"
                            >
                                Send Message
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;