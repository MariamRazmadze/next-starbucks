import { getHomepageData } from "@/lib/getData";
import { BoxItem } from "@/components/BoxItem";
import Footer from "@/components/Footer/Footer";

export default async function Home() {
  const homepageData: Promise<BoxItem[]> = getHomepageData();
  const data = await homepageData;
  return (
    <>
      {data.map((item, index) => (
        <BoxItem key={item.id} item={item} isReversed={index % 2 === 0} />
      ))}
      <Footer />
    </>
  );
}
