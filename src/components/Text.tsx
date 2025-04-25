interface Props {
    children: React.ReactNode;
    className?: string;
    variation: "h1" | "h2" | "h3" | "h4" | "p";
    color?: "cyan" | "white"
    iconLeft?: React.ReactNode;
}

export function Text({ children, variation, color = "white", className, iconLeft }: Props) {
    const textVariation = {
        h1: "text-8xl font-bold",
        h2: "text-3xl font-bold",
        h3: "text-2xl font-bold",
        h4: "text-xl font-bold",
        p: "text-base",
    }

    const textColor = {
        cyan: "text-[#AFE1E6]",
        white: "text-[#FFFFFF]",
    }

    const textClass = `flex items-center gap-2 ${textVariation[variation]} ${textColor[color]} ${className}`

    switch (variation) {
        case "h1":
            return (
                <h1 className={textClass}>
                    {iconLeft}
                    {children}
                </h1>
            )
        case "h2":
            return (
                <h2 className={textClass}>
                    {iconLeft}
                    {children}
                </h2>
            )   
        case "h3":
            return (
                <h3 className={textClass}>
                    {iconLeft}
                    {children}
                </h3>
            )   
        case "h4":
            return (
                <h4 className={textClass}>
                    {iconLeft}
                    {children}
                </h4>
            )
        case "p":
            return (
                <p className={textClass}>
                    {iconLeft}
                    {children}
                </p>
            )
            
    }
}