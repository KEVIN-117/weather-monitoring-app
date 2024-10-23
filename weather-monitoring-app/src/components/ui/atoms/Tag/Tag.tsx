// Tag.tsx
import React from 'react';
import { ITagProps } from './types/IProps';
import { LuPill } from 'react-icons/lu';
import { Button } from '../Button';

const Tag: React.FC<ITagProps> = ({ icon = <LuPill style={{ color: '#90EE90', fontSize: '25px', paddingLeft: '2px' }} />, color = '#6E6E6E', title, subtitle }) => {
    return (
        <Button className='bg-default-100/50 dark:bg-default-100/50 set-border' style={{ borderRadius:'30px',display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ borderRadius: '30px', color: '#006400' }}>
                {icon}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontSize: '15px' }}>{title}</p>
                <span style={{ fontSize: '10px' }}>{subtitle}</span>
            </div>
        </Button>
    );
}

export default Tag;

/* ejemplo
import Tag from "@/components/ui/atoms/Tag/Tag";
import { LuPill } from 'react-icons/lu';

<Tag
        title="Lisinopril"
          subtitle="Once daily * Take with food"
        icon={<LuPill style={{ color: '#90EE90', fontSize: '35px', paddingLeft: '2px' }} />}
        color="#6E6E6E"
        />
 */
















