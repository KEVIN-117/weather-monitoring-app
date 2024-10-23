// Tag.tsx
import React from 'react';
import { ITagProps } from './types/IProps';
import { LuPill } from 'react-icons/lu';

const Tag: React.FC<ITagProps> = ({ icon = <LuPill style={{ color: '#90EE90', fontSize: '25px', paddingLeft: '2px' }} />, color = '#6E6E6E', title, subtitle }) => {
    return (
        <button style={{ padding: '0.2em', backgroundColor: color, borderRadius: '15px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ borderRadius: '10px', color: '#006400' }}>
                    {icon}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <p style={{ fontSize: '15px' }}>{title}</p>
                    <span style={{ fontSize: '10px' }}>{subtitle}</span>
                </div>
            </div>
        </button>
    );
}

export default Tag;

















