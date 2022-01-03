import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import AuthContext from "../stores/authContext";

export default function Navbar() {

    const { user, login, logout } = useContext(AuthContext)
    console.log(user)
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
                    {!user && <li onClick={login} className="btn">
                        Login/signup
                    </li>}
                    {user && <li>
                        {user.email}
                    </li>}

                    {user && <li onClick={logout} className="btn">
                        Logout
                    </li>}


                </ul>
            </nav>
            <div className="banner">
                <Image
                    src="/banner-cooking.jpg"
                    width={980}
                    height={280}
                    alt="banner img"
                />
            </div>
        </div>
    )
}