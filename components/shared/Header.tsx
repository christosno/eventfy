import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const Header = () => {
    return (
        <header className="w-full flex items-center border-b ">
            <div className="wrapper flex items-center justify-between ">
                <Link href="/" className="w-36">
                    <Image src="/assets/images/logo.svg" width={128} height={38} alt="Eventfy logo" />
                </Link>
            </div>

            <div className="flex w-32 justify-end gap-3 px-4">
                <SignedIn>
                    <UserButton afterSignOutUrl="/" />
                </SignedIn>
                <SignedOut>
                    <Button asChild className="rounded-full" size="lg">
                        <Link href="/sign-in">Login</Link>
                    </Button>
                </SignedOut>
            </div>
        </header>
    )
};

export default Header;