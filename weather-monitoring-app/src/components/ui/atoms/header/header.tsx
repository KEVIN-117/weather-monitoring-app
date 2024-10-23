import React from 'react';
import { Title } from '../title/Title';
import { IProps } from './types/IProps';


function Header({ description, title, size }: IProps) {


    return (
        <>
            <div className='set-border bg-default-100/50 dark:bg-default-100/50 rounded-3xl py-5 px-5 my-4'>
                <Title
                    classname='custom-title-classs'
                    content={title}
                    size={size}
                />
                <h1 >
                    {description}
                </h1>
            </div>
        </>
    );
}

{/* <Header description="this is a description" size="small" title="This is a title"/> */}
export default Header;
