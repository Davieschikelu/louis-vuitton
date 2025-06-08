import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10 max-h-screen overflow-y-auto">
     <div className={`bg-[url('/banner.jpg')] bg-fit bg-no-repeat bg-center py-20 flex items-center justify-center`}>
      <div className="text-white text-4xl font-bold">
        <h1>Welcome to Our Store</h1>
        <p className="mt-4">Explore our latest collections</p>
        <button className="mt-6 px-6 py-2 text-2xl bg-amber-600 text-white hover:bg-amber-900 transition duration-300">
          <Link href="/product">
          Shop Now
          </Link>
        </button>
      </div>
     </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-10 py-10">
          <div>
            <Image src="/lui.webp" width={400} height={300} alt="louis"></Image>
            <h1 className="text-2xl text-amber-700 font-semibold mt-3">Learn About Us</h1>
            <span className="text-gray-500 text-md cursor-pointer">learn more....</span>
          </div>
          <div className="col-span-2">
            <Image src="/variety.jpg" width={800} height={400} alt="louis"></Image>
            <h1 className="text-2xl text-amber-700 font-semibold mt-3">Explore varieties of products</h1>
            <span className="text-gray-500 text-md cursor-pointer">learn more....</span>
          </div>
          <div>
            <Image src="/cr7.jpg" width={400} height={300} alt="louis"></Image>
            <h1 className="text-2xl text-amber-700 font-semibold mt-3">Check out our latest products</h1>
            <span className="text-gray-500 text-md cursor-pointer">learn more....</span>
          </div>
      </div>
      <div className={`bg-[url('/visit.jpg')] bg-fit bg-no-repeat bg-center py-20 flex items-center justify-center`}>
      <div className="text-white text-4xl font-bold">
        <h1 className="text-amber-900">Visit our stores</h1>
        <p className="mt-4 text-amber-900">Explore our latest collections</p>
        <button className="mt-6 px-6 py-2 text-2xl bg-amber-600 text-white hover:bg-amber-900 transition duration-300">
          <Link href="/product">
          Shop Now
          </Link>
        </button>
      </div>
      </div>
      <div className="text-center py-10">
        <h1 className="text-3xl font-bold">Join Our Community</h1>
        <p className="mt-4 text-gray-600">Stay updated with our latest news and offers</p>
        <button className="mt-6 px-6 py-2 text-xl bg-amber-600 text-white hover:bg-black hover:text-amber-700 transition duration-300">
          <Link href="/register">
          Sign Up
          </Link>
        </button>
      </div>
    </div>
  );
}
