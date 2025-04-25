import Image from 'next/image'
import Button from './Button'

export default function NavBar() {
    return (
        <nav className="h-[82px] bg-black w-full flex items-center justify-center px-4 relative">
            <div className="relative w-[92px] h-[25px]">
                <Image
                    src="/NetflixLogo.png"
                    alt="Netflix Logo"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
            <div className="absolute right-4">
                <Button variation="white">
                    Get Tickets
                </Button>
            </div>
        </nav>
    )
}