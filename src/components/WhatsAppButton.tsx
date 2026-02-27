import React from 'react';
import ReactPixel from 'react-facebook-pixel';

interface WhatsAppButtonProps {
    children?: React.ReactNode;
    className?: string;
    location: string;
    phoneNumber?: string;
    message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
    children,
    className = "",
    location,
    phoneNumber = "212660237704", // Default phone number
    message = "Hello Accelera, I'm interested in your services!"
}) => {

    const handleClick = () => {
        // Fire custom pixel event
        ReactPixel.trackCustom('WhatsAppClick', {
            button_location: location
        });

        // Open WhatsApp
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <button
            onClick={handleClick}
            className={className}
            aria-label={`Contact us on WhatsApp from ${location}`}
        >
            {children}
        </button>
    );
};

export default WhatsAppButton;
