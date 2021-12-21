import React from 'react'
import css from './Contact.module.css'

export default function Contact() {
    return (
        <div className={css.contact__wrapper} id='Contact'>
            <address className={css.address}>
                <p className={css.address__text}>
                    Address: 123 Main Street, Anytown, CA 12345
                </p>
                <p className={css.address__text}>
                    Phone: (123) 456-7890
                </p>
                <p className={css.address__text}>
                    Email: <a href='mailto:foxxx2game@gmal.com'> foxxx2game@gmail.com</a>
                </p>
                
            </address>
        </div>
    )
}
