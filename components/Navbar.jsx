import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <div className="container">
            <nav>
                <Image
                    src="/kitchen-logo.jpg"
                    width={50}
                    height={50}
                    alt="kitchen logo"
                />
                <h1>Kitchen Vibes</h1>
                <ul>
                    <li>
                        <Link href="/"><a>Home</a></Link>
                    </li>
                    <li>
                        <Link href="/guides"><a>Guides</a></Link>
                    </li>
                </ul>
            </nav>
            <div className="banner">
                <Image
                    src="/cooking-banner.jpg"
                    width={980}
                    height={280}
                    alt="banner img"
                />
            </div>
        </div>
    )
}