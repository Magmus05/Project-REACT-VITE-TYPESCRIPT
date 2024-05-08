import React from 'react'
import './Preloader.scss'

export const Preloader: React.FC = () => {
    return (
        <div className="preloader">
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};
