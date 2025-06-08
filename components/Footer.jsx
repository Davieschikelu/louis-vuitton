import Link from "next/link";

export default function Footer(){
    return(
        <footer className="w-full p-4 bg-amber-900">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-10 py-10">
           <div>
            <Link href="/" className="text-white text-md font-semibold">Louis Vuitton</Link>
            <p className="text-gray-400 text-[14px] cursor-pointer hover:text-amber-500">Luxury fashion brand known for its iconic monogram and high-quality products.</p>
            <p className="text-gray-400 text-[14px]">Contact: +1 800 123 4567</p>
            <p className="text-gray-400 text-[14px]">Email: louisvuittonstore@store.brand.louis.com</p>
            <p className="text-gray-400 text-[14px]">Address: 123 Fashion St, Paris, France</p>
           </div>
           <div>
            <h1 className="text-white text-md font-semibold">About</h1>
            <ul className="text-gray-400 text-[14px]">
                <li className="py-1">Our Story</li>
                <li className="py-1">Careers</li>
                <li className="py-1">Press</li>
                <li className="py-1">Sustainability</li>
                <li className="py-1">Terms & Conditions</li>
                <li className="py-1">Accessibility</li>
                <li className="py-1">Site Map</li>
                <li className="py-1">Gift Cards</li>
            </ul>
           </div>
              <div>
                <h1 className="text-white text-md font-semibold">Customer Service</h1>
                <ul className="text-gray-400 text-[14px]">
                 <li className="py-1">Contact Us</li>
                 <li className="py-1">Shipping & Returns</li>
                 <li className="py-1">FAQs</li>
                 <li className="py-1">Privacy Policy</li>
                    <li className="py-1">Order Tracking</li>
                    <li className="py-1">Size Guide</li>
                    <li className="py-1">Payment Options</li>
                    <li className="py-1">Returns Policy</li>
                </ul>
              </div>
              <div>
                <h1 className="text-white text-md font-semibold">Social Media</h1>
                <ul className="text-gray-400 text-[14px] flex items-center gap-2">
                    <li className="py-1">Instagram</li>
                    <li className="py-1">Facebook</li>
                    <li className="py-1">Twitter</li>
                    <li className="py-1">YouTube</li>
                </ul>
                <div className="flex flex-col gap-2 mt-4">
                    <input type="text" placeholder="Enter Name.." className="border-b px-3 py-2 border-amber-500 outline-none text-white"/>
                    <input type="email" placeholder="example name@gmail.com" className="border-b px-3 py-2 border-amber-500 outline-none text-white mb-2"/>
                    <textarea name="" id="" className="border px-3 py-2 border-amber-500 outline-none text-white mb-2"></textarea>
                    <button className="px-3 py-2 bg-amber-600 text-white transition delay ease-in-out hover:bg-black hover:text-amber-600">Submit</button>
                </div>
              </div>
         </div>
         <div className="border-t border-white p-2">
            <h1 className="text-amber-500 text-sm text-center">&copy;2025 Louis Vuitton. All rights reserved.</h1>
         </div>
        </footer>
    )
}