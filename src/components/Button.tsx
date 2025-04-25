interface Props {
    variation: "white" | "gray" | "empty";
    children: React.ReactNode;
    className?: string;
    iconRight?: React.ReactNode;
}

export default function Button({ variation, children, className = '', iconRight }: Props) {

    const buttonVariation = {
        white: "bg-white text-black font-bold",
        gray: "bg-[#808080]/40 text-white font-bold",
        empty: "bg-transparent text-white font-bold"
    }
    
    return (
        <button className={`flex gap-2 items-center w-fit ${buttonVariation[variation]} rounded px-4 py-2 ${className}`}>
            {children}
            {iconRight}
        </button>
    )
}