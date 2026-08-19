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
                    setTimeout(() => {
                        setEmailSucceed(false);
                    }, 5000);
                }
                setIsEmailLoading(false);
            }, (error) => {
                console.error("EmailJS Error:", error);
                setIsEmailLoading(false);
                setEmailErr(error.text || "Failed to send message. Please try again.");
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

            <div className="relative bg-[#0f0f16]/80 backdrop-blur-xl border border-white/5 p-6 md:p-10 rounded-2xl shadow-2xl overflow-hidden">
                {/* soft ambient glow accents */}
                <div className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl" />
                <div className="pointer-events-none absolute -bottom-24 -left-24 w-64 h-64 bg-teal-400/5 rounded-full blur-3xl" />

                <form ref={form} onSubmit={sendEmail} className="relative space-y-5">
                    <div className="grid md:grid-cols-2 gap-2">
                        {/* Subject Field */}
                        <FloatingField
                            icon={getTIcon(18, 18, 'currentColor')}
                            type="text"
                            name="from_subject"
                            label="Subject"
                        />

                        {/* Full Name Field */}
                        <FloatingField
                            icon={getUserIcon(18, 18, 'currentColor')}
                            type="text"
                            name="from_name"
                            label="Full Name"
                        />
                    </div>

                    {/* Email Field */}
                    <FloatingField
                        icon={getAtIcon(18, 18, 'currentColor')}
                        type="email"
                        name="user_email"
                        label="Email Address"
                    />

                    {/* Message Field */}
                    <div className="group relative">
                        <span className="absolute left-4 top-4 text-gray-500 group-focus-within:text-teal-400 transition-colors duration-200">
                            {getEmailIcon(18, 18, 'currentColor')}
                        </span>
                        <textarea
                            id="message"
                            name="message"
                            required
                            placeholder=" "
                            className="peer w-full min-h-[160px] md:min-h-[190px] resize-y rounded-xl bg-white/[0.03] border border-white/10 pl-12 pr-4 pt-4 pb-2 text-sm text-white outline-none transition-all duration-200 placeholder-transparent focus:border-teal-400/60 focus:bg-white/[0.05] focus:ring-2 focus:ring-teal-400/10 scrollbar-thin scrollbar-thumb-teal-400/40 scrollbar-track-transparent"
                        />
                        <label
                            htmlFor="message"
                            className="pointer-events-none absolute left-12 top-4 text-sm text-gray-500 transition-all duration-200
                                peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-teal-400 peer-focus:bg-[#0f0f16] peer-focus:px-1.5
                                peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-[#0f0f16] peer-[:not(:placeholder-shown)]:px-1.5 peer-[:not(:placeholder-shown)]:text-gray-400"
                        >
                            Write your message here...
                        </label>
                    </div>

                    {/* Status Messages */}
                    <div className="min-h-[24px]">
                        {emailSucceed && (
                            <p className="flex items-center gap-2 text-sm text-emerald-400 font-medium animate-in fade-in slide-in-from-top-1 duration-300">
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                Message sent successfully!
                            </p>
                        )}
                        {emailErr && (
                            <p className="flex items-center gap-2 text-sm text-red-400 font-medium animate-in fade-in slide-in-from-top-1 duration-300">
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-400" />
                                {emailErr}
                            </p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                        {isEmailLoading ? (
                            <div className="flex items-center gap-3 px-2">
                                <div className="flex space-x-1">
                                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce"></div>
                                </div>
                                <span className="text-gray-400 text-sm">Sending message...</span>
                            </div>
                        ) : (
                            <button
                                className="group relative px-8 py-3 bg-teal-400 text-black font-bold text-sm uppercase tracking-wider rounded-lg overflow-hidden transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-lg hover:shadow-teal-400/30 active:scale-[0.98]"
                                type="submit"
                            >
                                <span className="relative z-10">Send Message</span>
                                <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </section>
    );
};

 const FloatingField = ({
    icon,
    type,
    name,
    label,
}: {
    icon: React.ReactNode;
    type: string;
    name: string;
    label: string;
}) => {
    return (
        <div className="group relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-teal-400 transition-colors duration-200">
                {icon}
            </span>
            <input
                id={name}
                type={type}
                name={name}
                required
                placeholder=" "
                className="peer w-full h-14 rounded-xl bg-white/[0.03] border border-white/10 pl-12 pr-4 text-sm text-white outline-none transition-all duration-200 placeholder-transparent focus:border-teal-400/60 focus:bg-white/[0.05] focus:ring-2 focus:ring-teal-400/10"
            />
            <label
                htmlFor={name}
                className="pointer-events-none absolute left-12 top-1/2 -translate-y-1/2 text-sm text-gray-500 transition-all duration-200
                    peer-focus:-top-0 peer-focus:left-3 peer-focus:text-xs peer-focus:text-teal-400 peer-focus:bg-[#0f0f16] peer-focus:px-1.5
                    peer-[:not(:placeholder-shown)]:-top-0 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-[#0f0f16] peer-[:not(:placeholder-shown)]:px-1.5 peer-[:not(:placeholder-shown)]:text-gray-400"
            >
                {label}
            </label>
        </div>
    );
};

export default ContactForm;