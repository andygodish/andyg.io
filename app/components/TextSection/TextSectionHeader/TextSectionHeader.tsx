export interface TextSectionHeaderProps {
    children?: React.ReactNode;
    textAlign?: string;
    textSize: string;
}

export const TextSectionHeader: React.FC<TextSectionHeaderProps> = (props): React.ReactElement => {
    const textAlignCondition = props.textAlign ? props.textAlign : null;
    return (
        <div className={`mb-4 
          font-bold 
          text-ubuntuOrange-700 ${props.textSize} ${textAlignCondition}`}>
            {props.children}
        </div>
    );
};