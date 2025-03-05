import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex-row items-center justify-center relative w-full">
      <div className="-mt-10 max-w-screen h-screen">
        <Image
          src={"/blogging.jpg"}
          alt="pic-blogging"
          layout="fill"
          objectFit="cover"
        ></Image>
      </div>
      <div className="w-full absolute top-20 text-sky-500 p-4 md:p-0">
        <h1 className="flex justify-center font-extrabold text-6xl tracking-tight">
          <span className="h-fit md:h-[70px] text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-sky-500 to-blue-500 motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md">
            Welcome to Your&nbsp;
            <span className="underline underline-offset-3 decoration-8 decoration-blue-900">
              Blogging Haven
            </span>
          </span>
        </h1>
        <h2 className="flex justify-center font-bold text-4xl pt-4 motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md">
          Unleashing Your Words, Inspiring the World
        </h2>
      </div>
    </div>
  );
}
