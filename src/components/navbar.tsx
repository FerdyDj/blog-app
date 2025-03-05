import Image from "next/image";
import Menu from "./menu";

export default function Navbar() {
  

  return (
    <div>
      <div className="flex justify-between max-w-screen bg-blue-950 h-10 items-center sticky top-0 start-0 z-50">
        <span className="pl-7 font-bold text-xl text-sky-300 flex gap-3">
          <Image
            src={"/blog.svg"}
            alt="pic-logo"
            width={25}
            height={25}
          ></Image>
          THE BLOG
        </span>
        <Menu />
      </div>
    </div>
  );
}
