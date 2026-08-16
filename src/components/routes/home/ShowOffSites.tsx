import React from 'react';
import Image from "next/image";
// import homeST from "../../../../styles/Home.module.css";
const homeST = {}
 
const ShowOffSites = () => {
    return (
        <section className={'homeST.show_off_container '}>
            <h3 className={'homeST.section_title my-8 mt-4'}>Short Shows</h3>
            <div className={'homeST.show_img_wrap flex justify-center'} style={{background:"#1e1e28"}}>
                <div className={'homeST.show_img w-[80%] rounded-md overflow-hidden'} style={{boxShadow:"0 0  15px 1px #175fa7"}}>
                    <Image  src={imgUri} width={600} height={300}  layout={"responsive"} alt="Sabbir's websites"></Image>
                </div>
            </div>
        </section>
    );
};

export default ShowOffSites;