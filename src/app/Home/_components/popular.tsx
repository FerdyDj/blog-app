import Image from "next/image";

export default function Popular() {
  return (
    <div>
      <div className="flex-row px-2 py-8 md:px-8 md:pt-18 md:pb-8">
        <h2 className="flex justify-center text-5xl font-bold">Game On !</h2>
        <h3 className="flex justify-center text-3xl pt-8 font-semibold">
          "Daily updates and analysis from the world of sports."
        </h3>
      </div>
      <div className="grid grid-rows-1 p-2 md:p-8 md:grid-cols-3 mt-4 bg-white gap-3 pb-2 rounded-lg">
        <div className="flex-row">
          <div className="relative h-[300px] md:h-[200px] overflow-hidden rounded-lg">
            <Image
              src={"/tennis.jpg"}
              alt="pic-tennis"
              width={500}
              height={300}
              className="rounded-lg object-fit absolute inset-0 w-full h-full hover:scale-105 ease-in duration-300"
            ></Image>
          </div>
          <h3 className="font-bold text-sm px-2 py-4 hover:underline decoration-blue-500 decoration-2 hover:cursor-pointer w-fit">
            Tennis is the sport
          </h3>
          <p className="px-2 mb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum,
            inventore necessitatibus veniam atque vel libero. Voluptas
            voluptates voluptatibus aut, numquam nam deserunt eos. Fugiat,
            dolor.
          </p>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-emerald-400 to-blue-600 group-hover:from-emerald-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-sky-200 dark:focus:ring-sky-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Read More
            </span>
          </button>
        </div>
        <div className="flex-row">
          <div className="relative h-[300px] md:h-[200px] overflow-hidden rounded-lg">
            <Image
              src={"/yoga.jpg"}
              alt="pic-yoga"
              width={500}
              height={300}
              className="rounded-lg object-fit absolute inset-0 w-full h-full hover:scale-105 ease-in duration-300"
            ></Image>
          </div>
          <h3 className="font-bold text-sm px-2 py-4 hover:underline decoration-blue-500 decoration-2 hover:cursor-pointer w-fit">
            Do Yoga for your health
          </h3>
          <p className="px-2 mb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum,
            inventore necessitatibus veniam atque vel libero. Voluptas
            voluptates voluptatibus aut, numquam nam deserunt eos. Fugiat,
            dolor.
          </p>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-emerald-400 to-blue-600 group-hover:from-emerald-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-sky-200 dark:focus:ring-sky-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Read More
            </span>
          </button>
        </div>
        <div className="flex-row">
          <div className="relative h-[300px] md:h-[200px] overflow-hidden rounded-lg">
            <Image
              src={"/stocks.jpg"}
              alt="pic-stocks"
              width={500}
              height={250}
              className="rounded-lg object-fit absolute inset-0 w-full h-full hover:scale-105 ease-in duration-300"
            ></Image>
          </div>
          <h3 className="font-bold text-sm px-2 py-4 hover:underline decoration-blue-500 decoration-2 hover:cursor-pointer w-fit">
            Investing in Stocks
          </h3>
          <p className="px-2 mb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum,
            inventore necessitatibus veniam atque vel libero. Voluptas
            voluptates voluptatibus aut, numquam nam deserunt eos. Fugiat,
            dolor.
          </p>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-emerald-400 to-blue-600 group-hover:from-emerald-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-sky-200 dark:focus:ring-sky-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Read More
            </span>
          </button>
        </div>
      </div>
      <div className="flex-row px-2 py-8 md:px-8 md:py-18 md:pb-8">
        <h2 className="flex justify-center text-5xl font-bold">
          Live Well, Feel Great
        </h2>
        <h3 className="flex justify-center text-3xl pt-8 font-semibold">
          "Tips and tricks for maintaining a healthy lifestyle."
        </h3>
      </div>
      <div className="grid grid-rows-1 p-2 md:p-8 md:grid-cols-3 mt-4 bg-white gap-3 pb-2 rounded-lg">
        <div className="flex-row">
          <div className="relative h-[300px] md:h-[200px] overflow-hidden rounded-lg">
            <Image
              src={"/tennis.jpg"}
              alt="pic-tennis"
              width={500}
              height={300}
              className="rounded-lg object-fit absolute inset-0 w-full h-full hover:scale-105 ease-in duration-300"
            ></Image>
          </div>
          <h3 className="font-bold text-sm px-2 py-4 hover:underline decoration-blue-500 decoration-2 hover:cursor-pointer w-fit">
            Tennis is the sport
          </h3>
          <p className="px-2 mb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum,
            inventore necessitatibus veniam atque vel libero. Voluptas
            voluptates voluptatibus aut, numquam nam deserunt eos. Fugiat,
            dolor.
          </p>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-emerald-400 to-blue-600 group-hover:from-emerald-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-sky-200 dark:focus:ring-sky-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Read More
            </span>
          </button>
        </div>
        <div className="flex-row">
          <div className="relative h-[300px] md:h-[200px] overflow-hidden rounded-lg">
            <Image
              src={"/yoga.jpg"}
              alt="pic-yoga"
              width={500}
              height={300}
              className="rounded-lg object-fit absolute inset-0 w-full h-full hover:scale-105 ease-in duration-300"
            ></Image>
          </div>
          <h3 className="font-bold text-sm px-2 py-4 hover:underline decoration-blue-500 decoration-2 hover:cursor-pointer w-fit">
            Do Yoga for your health
          </h3>
          <p className="px-2 mb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum,
            inventore necessitatibus veniam atque vel libero. Voluptas
            voluptates voluptatibus aut, numquam nam deserunt eos. Fugiat,
            dolor.
          </p>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-emerald-400 to-blue-600 group-hover:from-emerald-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-sky-200 dark:focus:ring-sky-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Read More
            </span>
          </button>
        </div>
        <div className="flex-row">
          <div className="relative h-[300px] md:h-[200px] overflow-hidden rounded-lg">
            <Image
              src={"/stocks.jpg"}
              alt="pic-stocks"
              width={500}
              height={250}
              className="rounded-lg object-fit absolute inset-0 w-full h-full hover:scale-105 ease-in duration-300"
            ></Image>
          </div>
          <h3 className="font-bold text-sm px-2 py-4 hover:underline decoration-blue-500 decoration-2 hover:cursor-pointer w-fit">
            Investing in Stocks
          </h3>
          <p className="px-2 mb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum,
            inventore necessitatibus veniam atque vel libero. Voluptas
            voluptates voluptatibus aut, numquam nam deserunt eos. Fugiat,
            dolor.
          </p>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-emerald-400 to-blue-600 group-hover:from-emerald-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-sky-200 dark:focus:ring-sky-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Read More
            </span>
          </button>
        </div>
      </div>
      <div className="flex-row px-2 py-8 md:px-8 md:py-18 md:pb-8">
        <h2 className="flex justify-center text-5xl font-bold">
          Breaking News & Updates
        </h2>
        <h3 className="flex justify-center text-3xl pt-8 font-semibold">
          "Stay ahead with the latest headlines and stories."
        </h3>
      </div>
      <div className="grid grid-rows-1 p-2 md:p-8 md:grid-cols-3 mt-4 bg-white gap-3 pb-2 rounded-lg">
        <div className="flex-row">
          <div className="relative h-[300px] md:h-[200px] overflow-hidden rounded-lg">
            <Image
              src={"/tennis.jpg"}
              alt="pic-tennis"
              width={500}
              height={300}
              className="rounded-lg object-fit absolute inset-0 w-full h-full hover:scale-105 ease-in duration-300"
            ></Image>
          </div>
          <h3 className="font-bold text-sm px-2 py-4 hover:underline decoration-blue-500 decoration-2 hover:cursor-pointer w-fit">
            Tennis is the sport
          </h3>
          <p className="px-2 mb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum,
            inventore necessitatibus veniam atque vel libero. Voluptas
            voluptates voluptatibus aut, numquam nam deserunt eos. Fugiat,
            dolor.
          </p>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-emerald-400 to-blue-600 group-hover:from-emerald-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-sky-200 dark:focus:ring-sky-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Read More
            </span>
          </button>
        </div>
        <div className="flex-row">
          <div className="relative h-[300px] md:h-[200px] overflow-hidden rounded-lg">
            <Image
              src={"/yoga.jpg"}
              alt="pic-yoga"
              width={500}
              height={300}
              className="rounded-lg object-fit absolute inset-0 w-full h-full hover:scale-105 ease-in duration-300"
            ></Image>
          </div>
          <h3 className="font-bold text-sm px-2 py-4 hover:underline decoration-blue-500 decoration-2 hover:cursor-pointer w-fit">
            Do Yoga for your health
          </h3>
          <p className="px-2 mb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum,
            inventore necessitatibus veniam atque vel libero. Voluptas
            voluptates voluptatibus aut, numquam nam deserunt eos. Fugiat,
            dolor.
          </p>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-emerald-400 to-blue-600 group-hover:from-emerald-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-sky-200 dark:focus:ring-sky-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Read More
            </span>
          </button>
        </div>
        <div className="flex-row">
          <div className="relative h-[300px] md:h-[200px] overflow-hidden rounded-lg">
            <Image
              src={"/stocks.jpg"}
              alt="pic-stocks"
              width={500}
              height={250}
              className="rounded-lg object-fit absolute inset-0 w-full h-full hover:scale-105 ease-in duration-300"
            ></Image>
          </div>
          <h3 className="font-bold text-sm px-2 py-4 hover:underline decoration-blue-500 decoration-2 hover:cursor-pointer w-fit">
            Investing in Stocks
          </h3>
          <p className="px-2 mb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum,
            inventore necessitatibus veniam atque vel libero. Voluptas
            voluptates voluptatibus aut, numquam nam deserunt eos. Fugiat,
            dolor.
          </p>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-emerald-400 to-blue-600 group-hover:from-emerald-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-sky-200 dark:focus:ring-sky-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Read More
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
