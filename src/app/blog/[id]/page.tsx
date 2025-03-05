import { IBlog } from "@/components/type";
import Image from "next/image";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Footer from "@/components/footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const res = await fetch(
    `https://dynamicchannel-us.backendless.app/api/data/Blogs/${id}?loadRelations=author`
  );
  const data: IBlog = await res.json();

  return {
    title: data.title,
    openGraph: {
      images: [data.thumbnail],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const res = await fetch(
    `https://dynamicchannel-us.backendless.app/api/data/Blogs/${id}?loadRelations=author`
  );
  const data: IBlog = await res.json();
  return (
    <div>
      <div className="flex-row md:flex min-h-screen mt-4 md:-mt-10">
        <div className="w-full md:w-[30%] pl-4 md:pl-20 pt-4 md:pt-20">
          <Link href="/">
            <button className="hover:text-blue-500 flex justify-center items-center gap-2 cursor-pointer mb-4">
              <IoMdArrowRoundBack />
              Kembali
            </button>
          </Link>
          <span className="text-sm font-bold">Bagikan</span>
          <div className="flex items-center mt-2 gap-3 mb-4">
            <Link
              href={`https://www.facebook.com/sharer/sharer.php?u=https://blog-app-inky.vercel.app/blog/blog/${data.objectId}`}
            >
              <FaFacebook className="w-8 h-8 text-blue-500 hover:text-blue-400 hover:cursor-pointer" />
            </Link>
            <Link
              href={`https://www.twitter.com/intent/tweet?url=https://blog-app-inky.vercel.app/blog/blog/${data.objectId}`}
            >
              <FaTwitter className="w-8 h-8 text-sky-500 hover:text-sky-400 hover:cursor-pointer" />
            </Link>
            <Link
              href={`https://www.linkedin.com/sharing/share-offsite/?url=https://blog-app-inky.vercel.app/blog/blog/${data.objectId}`}
            >
              <FaLinkedin className="w-8 h-8 text-blue-500 hover:text-blue-400 hover:cursor-pointer" />
            </Link>
            <Link
              href={`https://wa.me/?text=https://blog-app-inky.vercel.app/blog/blog/${data.objectId}`}
            >
              <FaWhatsapp className="w-8 h-8 text-green-500 hover:text-green-400 hover:cursor-pointer" />
            </Link>
          </div>
        </div>
        <div className=" flex-row gap-3 min-h-screen w-[full] md:w-[70%] pt-4 md:pt-20 pl-4 md:pl-10 bg-neutral-100">
          <span className="text-green-400 font-bold text-xl">
            {data.category}
          </span>
          <h1 className="text-3xl font-bold my-2 w-[85%]">{data.title}</h1>
          <div className="font-semibold text-sm my-4">{data.author.name}</div>
          <div className="w-[90%]">
            <Image
              src={data.thumbnail}
              alt={data.title}
              width={700}
              height={500}
              className="rounded-lg object-cover"
            ></Image>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: data.content }}
            className="my-4 w-[85%]"
          ></div>
          <hr className="mb-8 mt-2 mr-4 border-2 w-[90%]" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
