import React from 'react';
// import homeST from "../../../../styles/Home.module.css";
const homeST = {}

const ContactInfo = () => {
    return (
        <section>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 inline-block relative pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-teal-400 after:rounded-full">Contact information</h3>
            <div className={'homeST.address_cards grid sm:grid-cols-2 justify-items-center gap-2 gap-y-8'}>
                <div className={'homeST.address_card min-w-64 sm:min-w-72 max-w-80 rounded-md p-3 bg_mute'}>
                    <div className={'homeST.address_card_info flex justify-between my-2'}>
                        <span>Country:</span>
                        <span className='text-typo_mute'>Bangladesh</span>
                    </div>
                    <div className={'homeST.address_card_info flex justify-between my-2'}>
                        <span>City:</span>
                        <span className='text-typo_mute'>Tangail</span>
                    </div>
                    <div className={'homeST.address_card_info flex justify-between my-2'}>
                        <span>State:</span>
                        <span className='text-typo_mute'>Dhaka</span>
                    </div>
                </div>
                <div className={'homeST.address_card min-w-64 sm:min-w-72  max-w-80 rounded-md p-3 bg_mute'}>
                    <div className={'homeST.address_card_info flex justify-between my-2'}>
                        <span>Email:</span>
                        <span className='text-typo_mute'>sabbir987467@gmail.com</span>
                    </div>
                    <div className={'homeST.address_card_info flex justify-between my-2'}>
                        <span>Phone:</span>
                        <span className='text-typo_mute'>+880-1825-987467</span>
                    </div>
                    <div className={'homeST.address_card_info flex justify-between my-2'}>
                        <span>Teams:</span>
                        <span className='text-typo_mute'>sabbir987467@gmail.com</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;