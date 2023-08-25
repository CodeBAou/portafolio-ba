import React from 'react';
import stylelayout from './layoutSection.module.css';

const LayoutSection = (props) => {
    return(
        <section className={stylelayout.content}>
            <div className={stylelayout.secondContent}>
                {props.children}
            </div>
        </section>
    )
}

export default LayoutSection;