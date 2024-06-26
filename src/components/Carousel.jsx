import './carousel.css'
import { useState } from 'react'




const Carausel = (props) => {
    const { children } = props

    

    return (
        <div className='carousel_container'>
            <div className='carousel_wrapper'>
                <button className='left_arrow'>
                    &lt;
                </button>
                <div className='carousel_content_wrapper'>
                    <div className='carousel_content'>
                        {children}

                    </div>
                    <button className='right_arrow'>
                      &gt;
                    </button>

                </div>

            </div>

        </div>
    )
}
export default Carausel