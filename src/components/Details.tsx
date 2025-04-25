import Button from "./Button";
import { Text } from "./Text";

export default function Details() {
    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1">
                <div className="flex flex-col gap-4">
                    <Text variation="h4">Netflix House Details</Text>
                    <Text variation="h2">Hours & Location</Text>
                    <Text variation="h3">Hours</Text>
                    <Text variation="h4" className="font-normal">
                        Monday - Thursday: 10:00 AM - 8:00 PM
                    </Text>
                    <Text variation="h4" className="font-normal">
                        Friday - Saturday: 10:00 AM - 9:00 PM
                    </Text>
                    <Text variation="h4" className="font-normal">
                        Sunday: 11:00 AM - 6:00 PM
                    </Text>
                    <Text variation="h3">Address</Text>
                    <Text variation="p">
                        13550 N Dallas Parkway, <br />
                        [Mall Suite #] <br />
                        Dallas, TX 75240
                    </Text>
                    <Button variation="gray">Open Google Maps</Button>
                </div>
            </div>
            <div className="col-span-1">
                <div className="flex flex-col gap-4">
                    <Text variation="h3">Upper Level Mall Entrance</Text>
                    <Text variation="p">
                      [Details about the exterior mall entrance] Lorem ipsum dolor sit amet, consectetur 
                      adipiscing elit. Curabitur fermentum lacus massa, eget feugiat nibh imperdiet quis.
                    </Text>
                    <Text variation="h3">Lower Level Mall Entrance</Text>
                    <Text variation="p">
                        [Details about the interior mall entrance] Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Curabitur fermentum lacus massa, eget feugiat nibh imperdiet quis.
                    </Text>
                </div>
            </div>
            <div className="col-span-1">
                <div className={`w-full h-[400px] rounded-[16px] overflow-hidden`}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.9999999999995!2d-96.82499999999999!3d32.99999999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDU5JzU5LjkiTiA5NsKwNDknMzAuMCJX!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </div>
    )
}