import Link from "next/link";

export default function register(){
    return(
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center text-amber-800">Register</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                        <input type="text" className="w-full px-3 py-2 border border-gray-300 outline-none" placeholder="Enter your username" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" className="w-full px-3 py-2 border border-gray-300 outline-none " placeholder="Enter your email" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input type="password" className="w-full px-3 py-2 border border-gray-300  outline-none" placeholder="Enter your password" />
                    </div>
                    <button type="submit" className="w-full bg-amber-700 text-white py-2 hover:bg-black hover:text-amber-700 transition duration-300">Register</button>
                    <Link href="/login" className="block text-center mt-4 text-sm text-gray-600 hover:text-gray-800">
                        Already have an account? Login
                    </Link>
                </form>
            </div>
            
        </div>
    )
}