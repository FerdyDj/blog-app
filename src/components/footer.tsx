import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full h-fit bg-blue-950 text-white p-4">
      <div className="flex-row sm:flex items-center justify-between">
        <span className="pl-7 font-bold text-xl text-sky-300">
          <Link href={"/"} className="flex gap-3">
            <Image
              src={"/blog.svg"}
              alt="pic-logo"
              width={25}
              height={25}
            ></Image>
            THE BLOG
          </Link>
        </span>
        <div className="flex flex-wrap gap-3 items-center py-4 sm:py-0">
            <span className="text-sm">
                Connect to us :
            </span>
          <Link href={"https://www.facebook.com/sharer/sharer.php?u=https://blog-app-inky.vercel.app"}>
            <FaFacebookF className="text-blue-500 h-5 w-5 hover:text-blue-400" />
          </Link>
          <Link href={"https://www.twitter.com/intent/tweet?url=https://blog-app-inky.vercel.app"}>
            <FaTwitter className="text-sky-500 h-5 w-5 hover:text-sky-400" />
          </Link>
          <Link href={"https://www.linkedin.com/sharing/share-offsite/?url=https://blog-app-inky.vercel.app"}>
            <FaLinkedin className="text-blue-500 h-5 w-5 hover:text-blue-400" />
          </Link>
          <Link href={"https://wa.me/?text=https://blog-app-inky.vercel.app"}>
            <FaWhatsapp className="text-green-500 h-5 w-5 hover:text-green-400" />
          </Link>
        </div>
      </div>
      <hr className="my-6 border-1 border-gray-300 md:mx-auto" />
      <div className="flex-row sm:flex justify-end sm:py-4">
        <span className="text-sm">
          &copy; 2025{" "}
          <span className="text-sky-300 font-semibold">THE BLOG</span> All
          Rights Reserved.
        </span>
      </div>
    </div>
  );
}
