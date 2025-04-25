import { Text } from "./Text";
import Image from "next/image";

interface Props {
    image: string;
    title: string;
    description: string;
    alt?: string;
}

export function ImageWithDescription({ image, title, description, alt = "image" }: Props) {
    return (
        <div className="flex flex-col items-start gap-4">
            <div className="relative w-full h-[400px]">
                <Image src={image} alt={alt} fill className="rounded-[16px] object-cover" />
            </div>
            <Text variation="h3">{title}</Text>
            <Text variation="p">{description}</Text>
        </div>
    )
}