import Card from "@/components/Card";
import VideoPlayer from "@/components/VideoPlayer";
import { Text } from "@/components/Text";
import Button from "@/components/Button";
import { ArrowDown } from "lucide-react";
import { ImageWithDescription } from "@/components/ImageWithDescription";
import FeaturedExperiences from "@/components/FeaturedExperiences";
import Details from "@/components/Details";

export default function Home() {
  return (
    <div className='flex w-full flex-col items-center px-8 py-4'>
      <div className="flex flex-col gap-4 items-center mb-[80px]">
        
        {/* Top Large Card */}
        <Card className="w-full flex rounded-[16px] items-center m-4" variation="purple">
          <VideoPlayer autoPlay loop className="rounded-[12px] h-[681px]" src="/VideoOfPeople.mp4" />
          <div className="flex flex-col gap-4 mx-auto items-center">
            <Text color="cyan" className="text-center" variation="h1">HEY DALLAS, WE&apos;RE HOME</Text>
            <Text color="cyan" variation="h2">Netflix House Dallas is now open</Text>
          </div>
        </Card>

      {/* Rest of the content */}
      <div className="flex flex-col gap-[80px] w-full px-[100px] items-center">
        <div className="flex flex-col gap-8 w-full items-center">
          <Text color="white" className="text-center" variation="h3">
            Netflix House is your home for fandom. Explore experiences that drop you into the story, 
            snack on bites, inspired by your favorite shows, snag a piece of the story to take home, 
            and more.
          </Text>
          <div className="flex gap-4">
            <Button variation="white">Get Tickets Now</Button>
            <Button variation="gray" iconRight={<ArrowDown className="w-4 h-4 font-bold" />}>
              Hours & Location
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <Text variation="h2">Netflix Just Got Real</Text>
          <div className="flex gap-4">
            <ImageWithDescription image="/PeopleLookingUp.jpeg" title="Drop into the story" description="We know you’ran (it’s cool, we’ve also watched Wednesday 37 times). Now, you can step inside the story, with immersive experiences that let you play a part in your favorite Netflix shows." />
            <ImageWithDescription image="/Arcade.jpeg" title="Every visit is a new episode" description="You know how there’s always something new on Netflix? It’s like that here, too – we’ll be updating the experiences, the dishes, and even the merch so there’s something new for you to explore, every time you visit." />
            <ImageWithDescription image="/PeoplePartying.jpeg" title="Play it your way" description="There’s so many different ways to go deeper into the story at Netflix House. Explore immersive experiences, play a round of mini golf, grab a bite, pick up a souvenir – whatever makes your inner fan happy." />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <Text variation="h2">Discover the Featured Experiences</Text>
          <FeaturedExperiences 
            variation="gradient-blue"
            mainImage="/StrangerThings.jpeg" 
            logoImage="/StrangerThingsLogo.png" 
            title="Hawkins has fallen: a catastrophic eartquake has torn the town apart." 
            duration="1 hr" 
            age="All Ages" 
            price="$100"
            reverse
          />
          <FeaturedExperiences 
            variation="gradient-pink"
            mainImage="/SquidGameGuy.jpeg" 
            logoImage="/SquidGameLogo.png" 
            title="Hawkins has fallen: a catastrophic eartquake has torn the town apart." 
            duration="1 hr" 
            age="All Ages" 
            price="$100"
          />
        </div>
        <img src="/Dallas.jpeg" alt="Dallas" className="rounded-[16px]" />
        <Details />
      </div>
      </div>
    </div>
  );
}
