import Link from "next/link";
import { CiUser } from "react-icons/ci";

export default function NavBar(){
    return(
        <nav className="w-full p-4 justify-between flex items-center shadow">
           <Link href="/" className="text-amber-700 font-semibold text-2xl">Louis Vuitton</Link>

           <ul className="flex items-center gap-4">
            <Link href="/" className="text-md transition-all delay ease-in-out hover:text-amber-600">Home</Link>
            <Link href="/product" className="text-md transition-all delay ease-in-out hover:text-amber-600">Store</Link>
            <Link href="/login" className="text-md transition-all delay ease-in-out hover:text-amber-600 font-bold"><CiUser size={20} /></Link>
           </ul>
        </nav>
    )
}