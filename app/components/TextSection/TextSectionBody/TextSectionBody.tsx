import React from 'react'

export interface TextSectionBodyProps {
    children?: React.ReactNode;
    isFlex?: boolean;
    isLastSection?: boolean;
    textSize: string;
}

export const TextSectionBody: React.FC<TextSectionBodyProps> = (props): React.ReactElement => {
    const flexCondition = props.isFlex ? 'flex' : null;
    const marginCondition = props.isLastSection ? 'mb-16' : 'mb-4';

    return (
        <div className={`${marginCondition} 
          font-light 
          ${props.textSize} dark:text-canonicalAubergine-400 text-darkAubergine 
          ${flexCondition}`}>
            {props.children}
        </div>
    );
};