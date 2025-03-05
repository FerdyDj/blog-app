import Card from "@/components/card";
import { IBlog } from "@/components/type";
import Wrapper from "@/components/wrapper";
import HomePage from "./Home/page";
import Footer from "@/components/footer";
import Subscribe from "./Home/_components/subscribe";

export default async function Home() {
  const res = await fetch(
    "https://dynamicchannel-us.backendless.app/api/data/Blogs?loadRelations=author"
  );
  console.log(res);
  
  const data: IBlog[] = await res.json();
  return (
    <div className="max-sm:w-full">
      <HomePage />
      <h2 className="flex justify-center items-center text-5xl font-bold h-24">Popular Article</h2>
      <Wrapper>
        <div className="grid w-full p-4 grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2">
          {data.map((item, idx) => {
            return (
              <div key={idx}>
                <Card
                  category={item.category}
                  title={item.title}
                  thumbnail={item.thumbnail}
                  name={item.author.name}
                  email={item.author.email}
                  objectId={item.objectId}
                />
              </div>
            );
          })}
        </div>
      </Wrapper>
      <Subscribe />
      <Footer />
    </div>
  );
}