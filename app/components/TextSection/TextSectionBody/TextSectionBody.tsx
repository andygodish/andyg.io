import React from 'react'

export interface TextSectionBodyProps {
    children?: React.ReactNode;
    isFlex?: boolean;
    isLastSection?: boolean;
    textAlign?: string;
    textSize: string;
}

export const TextSectionBody: React.FC<TextSectionBodyProps> = (props): React.ReactElement => {
    const textAlignCondition = props.textAlign ? props.textAlign : null;
    const flexCondition = props.isFlex ? 'flex' : null;
    const marginCondition = props.isLastSection ? 'mb-16' : 'mb-4';

    return (
        <div className={`${marginCondition} 
          font-light 
          ${props.textSize} ${textAlignCondition} dark:text-canonicalAubergine-400 text-darkAubergine
          ${flexCondition}`}>
            {props.children}
        </div>
    );
};