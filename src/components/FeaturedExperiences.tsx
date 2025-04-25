import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { User } from "lucide-react";
import { Clock } from "lucide-react";
import Card from "./Card";
import Button from "./Button";
import { Text } from "./Text";

interface Props {
    mainImage: string;
    logoImage: string;
    title: string;
    price: string;
    duration: string;
    age: string;
    variation: "gradient-blue" | "gradient-pink";
    reverse?: boolean;
}

export default function FeaturedExperiences({ mainImage, logoImage, title, duration, age, variation, reverse }: Props) {
    return (
        <Card variation={variation} className={`grid grid-cols-3 gap-[24px] ${reverse ? "flex-row-reverse" : ""}`}>
          <div className={`relative col-span-2 h-[565px] ${reverse ? "order-2" : ""}`}>
            <Image src={mainImage} alt="Stranger Things" fill className="rounded-[16px] object-cover" />
          </div>
          <Card variation={variation === "gradient-blue" ? "blue" : "purple"} className={`flex flex-col gap-2 ${reverse ? "order-1" : ""}`}>
            <div className="relative w-full h-[100px] mt-auto mb-16">
              <Image src={logoImage} alt="Stranger Things Logo" fill className="rounded-[16px] object-cover" />
            </div>
            <Text variation="h4">{title}</Text>
            <Text iconLeft={<Clock className="w-4 h-4 font-bold" />} variation="p">{duration}</Text>
            <Text iconLeft={<User className="w-4 h-4 font-bold" />} variation="p">{age}</Text>
            <div className="flex gap-2">
              <Button variation="white">Buy Tickets</Button>
              <Button variation="empty" iconRight={<ArrowRight className="w-4 h-4 font-bold" />}>
                More Details
              </Button>
            </div>
          </Card>
        </Card>
    )
}