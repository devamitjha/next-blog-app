import React from 'react';
import "./Decoration.scss";

const TitleDecoration = ({title, size}) => (
    <div className={`section-title ${size ? size : ''}`}>
        <svg style={{ display: 'none' }} aria-hidden="true">
            <symbol id="title-decoration" viewBox="0 0 32 18">
            <path
                className="title-d1"
                d="M32 9C29.1733 9 27.7396 7.925 26.3535 6.885C25.0609 5.915 23.8395 5 21.3333 5C18.8272 5 17.6058 5.91625 16.3127 6.885C14.9265 7.925 13.4933 9 10.6661 9C7.83895 9 6.40627 7.925 5.02013 6.885C3.72758 5.915 2.50614 5 0 5V0C2.82667 0 4.25987 1.075 5.64601 2.115C6.93856 3.085 8.16 4 10.6661 4C13.1723 4 14.3937 3.08375 15.6863 2.115C17.0729 1.075 18.5061 0 21.3333 0C24.1605 0 25.5937 1.075 26.9799 2.115C28.2724 3.085 29.4939 4 32.0005 4V9H32Z"
                fill="#FC6668"
            />
            <path
                className="title-d2"
                d="M32 18C29.1733 18 27.7396 16.925 26.3535 15.885C25.0609 14.915 23.8395 14 21.3333 14C18.8272 14 17.6058 14.9163 16.3127 15.885C14.9265 16.925 13.4933 18 10.6661 18C7.83895 18 6.40627 16.925 5.02013 15.885C3.72758 14.915 2.50614 14 0 14V9C2.82667 9 4.25987 10.075 5.64601 11.115C6.93856 12.085 8.16 13 10.6661 13C13.1723 13 14.3937 12.0838 15.6863 11.115C17.0729 10.075 18.5061 9 21.3333 9C24.1605 9 25.5937 10.075 26.9799 11.115C28.2724 12.085 29.4939 13 32.0005 13V18H32Z" fill="#f43676"
            />
            </symbol>
        </svg>
        <svg className="decoration">
            <use xlinkHref="#title-decoration"></use>
        </svg>
        <span>{title}</span>
    </div>
);

export default TitleDecoration;
