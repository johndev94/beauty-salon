import React, { useState } from 'react';
import "./MultiPanels.css";
import cos1 from "../assets/images/cos1.jpg";
import cos2 from "../assets/images/cos2.jpg";
import cos3 from "../assets/images/cos3.jpg";

interface PanelProps {
    image: string;
    title: string;
    content?: string;
}

const Panel: React.FC<PanelProps> = ({ image, title, content }) => {
    return (
        <div className="panel">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
};

const MultiPanels: React.FC = () => {
    const [panels] = useState<PanelProps[]>([
        { title: 'Facial Treatments', content: '', image: cos1 },
        { title: 'Injectables & Enhancements', content: '', image: cos3 },
        { title: 'Skin Health & Rejuvenation', content: '', image: cos2 },
    ]);

    return (
        <div className="multi-panels">
            {panels.map((panel, index) => (
                <Panel key={index} title={panel.title} content={panel.content} image={panel.image} />
            ))}
        </div>
    );
};

export default MultiPanels;


