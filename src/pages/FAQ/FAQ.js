import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FAQ = () => {
    const faqData = useLoaderData();
    return (
        <div>
            {
                faqData.map(faq => <div key={faq.id}>
                    <div className='w-[500px] mx-auto'>
                        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-2">
                            <div className="collapse-title text-xl font-medium">
                                {faq.question}
                            </div>
                            <div className="collapse-content">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default FAQ;