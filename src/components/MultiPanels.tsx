import React, { useState } from 'react';
import "./MultiPanels.css";

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
    const [panels, setPanels] = useState<PanelProps[]>([
        { title: 'Panel 1', content: 'This is the content of panel 1', image: 'src/assets/images/panel.jpg' },
        { title: 'Panel 2', content: 'This is the content of panel 2', image: 'src/assets/images/panel.jpg' },
        { title: 'Panel 3', content: 'This is the content of panel 3', image: 'src/assets/images/panel.jpg' },
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


