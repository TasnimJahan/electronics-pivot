import React from 'react';
import './FAQ.css'
// import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";


const FAQ = () => {
   
    const data = {
        title: "FAQ (How it works)",
        rows: [
            {
                title: "How much time need to repair",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
                  ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
                  In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
                  Fusce sed commodo purus, at tempus turpis.`,
            },
            {
                title: "How to pay",
                content:
                    "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
            },
            {
                title: "Why we are the best?",
                content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
            },
            {
                title: "Where should i asked for more information?",
                content: <p>current version is 1.2.1</p>,
            },
        ],
    };
    
    const styles = {
        // bgColor: 'white',
        titleTextColor: "blue",
        rowTitleColor: "blue",
        // rowContentColor: 'grey',
        // arrowColor: "red",
    };
    
    const config = {
        // animate: true,
        // arrowIcon: "V",
        // tabFocus: true
    };

    return (
        <div className=" p-5 faq" >
            <div className="container">
            <h5 className="text-center  text-brand p-3">FAQ</h5>
            <Faq className="p-4"
                data={data}
                styles={styles}
                config={config}
            />
            </div>
        </div>
    );
};

export default FAQ;