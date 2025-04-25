interface Props {
    variation: "purple" | "gradient-blue" | "gradient-pink" | "gradient-blue-and-pink" | "blue";
    children: React.ReactNode;
    className?: string;
}

export default function Card({ variation, children, className }: Props) {
    const cardVariation = {
        blue: "bg-[#172B47]",
        purple: "bg-[#251743]",
        "gradient-blue": "bg-gradient-to-t from-[#172B47] via-[#69A8FF] to-[#AFE1E6]",
        "gradient-pink": "bg-gradient-to-r from-pink-500 to-purple-500",
        "gradient-blue-and-pink": "bg-gradient-to-r from-blue-500 to-pink-500"
    };
    
    return (
        <div className={`${cardVariation[variation]} rounded-[16px] p-[24px] ${className}`}>
            {children}
        </div>
    )
}