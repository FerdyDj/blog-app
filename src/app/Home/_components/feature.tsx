import Image from "next/image";

export default function Feature() {
  return (
    <div className="md:m-0 flex-row p-2 md:p-8 md:flex justify-center bg-white border border-gray-400">
      <div className="w-full md:w-[50%]">
        <h2 className="font-bold text-3xl p-8 hover:underline decoration-blue-500 decoration-4 hover:cursor-pointer w-fit h-fit">
          Pepatah Mengenai Membaca
        </h2>
        <p className="px-8 pb-4">
          "Membaca bukan sekadar tindakan menyerap kata-kata di halaman, tetapi
          sebuah perjalanan untuk pikiran dan jiwa. Dengan setiap lembar yang
          dibalik, kita melangkah ke dalam sepatu orang lain, menjelajahi dunia
          yang dibayangkan dan nyata. Setiap cerita menawarkan cermin bagi
          kehidupan kita sendiri dan jendela untuk pengalaman orang-orang yang
          belum kita temui. Buku lebih dari sekadar cerita—mereka adalah teman
          diam yang mengajari kita, menantang kita, dan mengubah kita. Dalam
          keheningan halamannya, kita menemukan gema paling lantang dari siapa
          kita dan siapa kita bisa menjadi. Bagi mereka yang berbicara tentang
          membaca, ini adalah jalan menuju penemuan tanpa batas—sebuah pengingat
          abadi bahwa semakin kita belajar, semakin kita menyadari betapa banyak
          hal yang masih perlu dijelajahi."
        </p>
      </div>
      <div className="flex h-[400px] w-full md:w-[50%] justify-center md:justify-end relative">
        <Image
          src={"/main.jpg"}
          alt="pic-main"
          width={500}
          height={300}
          className="rounded-lg md:rounded-l-lg object-fit absolute inset-0 w-full h-full"
        ></Image>
      </div>
    </div>
  );
}
