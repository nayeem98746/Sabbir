'use client';
import { getAtIcon, getEmailIcon, getTIcon, getUserIcon } from '@/components/widget/icons/IconRaw';
import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';
// import homeST from '../../../../styles/Home.module.css';
// import { getAtIcon, getEmailIcon, getTIcon, getUserIcon } from '../../utils/Icons/Icons';
// import LoaderDotEater from '../common/Loaders/LoaderDotEater/LoaderDotEater';


export const ContactForm = () => {
    const [isEmailLoading,setIsEmailLoading] = useState(false);
    const [emailSucceed,setEmailSucceed] = useState(false);
    const [emailErr,setEmailErr] = useState("");
  const form = useRef(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    /*
    if (process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, process.env.NEXT_PUBLIC_PUBLIC_KEY) {
        setIsEmailLoading(true);
        setEmailSucceed(false);
        setEmailErr("");
        emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_PUBLIC_KEY)
          .then((result) => {

              if (result.text?.toLowerCase() === "ok") {
                setEmailSucceed(true);
                form.current.reset();
              }
              setIsEmailLoading(false);
          }, (error) => {
              console.log(error.text);
              setIsEmailLoading(false);
              setEmailErr(error.message);
          });
    }
    */
  };

  return (
    <section id="contact_id">
         <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 inline-block relative pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-teal-400 after:rounded-full">Get in Touch</h3>
         <div className={'homeST.contact_form_wrap bg-mute_linear p-8'}>
            <form ref={form} onSubmit={sendEmail}>
                <label className={'homeST.contact_label flex mb-4'}>
                    <span className={'homeST.contact_icon flex justify-center items-center bg-[#20202a] h-auto w-12'}>{getTIcon(20,20,'gray')}</span>
                    <input
                        className={'homeST.contact_input border-none outline-none h-12 w-full py-1 px-2.5 text-base'}
                        style={{background:"linear-gradient(159deg, #252532 0%, #23232d 100%)"}}
                        type="text"
                        name="from_subject"
                        placeholder='Subject'
                        required
                    />
                </label>
                <label className={'homeST.contact_label flex mb-4'}>
                    <span className={'homeST.contact_icon flex justify-center items-center bg-[#20202a] h-auto w-12'}>{getUserIcon(20,20,'gray')}</span>
                    <input
                     className={'homeST.contact_input border-none outline-none h-12 w-full py-1 px-2.5 text-base'}
                     style={{background:"linear-gradient(159deg, #252532 0%, #23232d 100%)"}}
                    type="text" name="from_name" placeholder='Full Name' required
                    />
                </label>
                <label className={'homeST.contact_label flex mb-4'}>
                    <span className={'homeST.contact_icon flex justify-center items-center bg-[#20202a] h-auto w-12'}>{getAtIcon(20,20,'gray')}</span>
                     <input
                         className={'homeST.contact_input border-none outline-none h-12 w-full py-1 px-2.5 text-base'}
                         style={{background:"linear-gradient(159deg, #252532 0%, #23232d 100%)"}}
                    type="email" name="user_email" placeholder='example@email.com' required />
                </label>
                <label className={'homeST.contact_label flex mb-4'}>
                    <span className={'homeST.contact_icon flex justify-center items-center bg-[#20202a] h-auto w-12'}>{getEmailIcon(20,20,'gray')}</span>
                    <textarea className={`homeST.contact_input homeST.contact_message border-none outline-none h-12 w-full py-1 px-2.5 text-sm  min-h-72 p-2.5 scrollbar`} style={{background:"linear-gradient(159deg, #252532 0%, #23232d 100%)"}} name="message" placeholder='Details message here......' required />
                </label>
                <div style={{minHeight:"22px"}}>
                    {emailSucceed && <p style={{color:"yellowgreen"}}>Message sent successfull!</p>}
                    {emailErr && <p style={{color:"#FF5A5A"}}>{emailErr}s</p>}
                </div>
                {
                    isEmailLoading
                    ? <div style={{paddingLeft:"2rem", marginTop:"40px"}}>
                        {/* <LoaderDotEater></LoaderDotEater> */}
                        loading....
                    </div>
                    : <button className={'homeST.contact_btn h-8 text-base mt-8 px-6 font-bold bg-teal-400 text-black uppercase tracking-wider cursor-pointer rounded-md hover:transform hover:scale-105 transition-all duration-300 ease-in-out'} type='submit'>Send Message</button>
                }

            </form>
         </div>
    </section>
  );
};

export default ContactForm;