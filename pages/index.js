import Head from "next/head";
import Banner from "../components/Banner";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";
import LargeCard from "../components/LargeCard";
import Layout from "../components/Layout";
export default function Home({ exploreData, cardsData }) {
  return (
    <>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Banner />
        <main className="max-w-7xl mx-auto px-8 sm:px-16">
          <section className="pt-6">
            <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {exploreData?.map(({ img, distance, location }) => (
                <SmallCard
                  key={img}
                  img={img}
                  distance={distance}
                  location={location}
                />
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
            <div className="flex space-x-3 overflow-scroll snap-mandatory snap-x p-3 -ml-3 overflow-y-hidden scrollbar-hide">
              {cardsData?.map(({ img, title }) => (
                <MediumCard img={img} title={title} key={img} />
              ))}
            </div>
          </section>
          <LargeCard
            img="https://links.papareact.com/4cj"
            title="The Greatest Outdoors"
            description="Wishlists created by Airbnb"
            buttonText="Get Inspired"
          />
        </main>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  );
  const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
    (res) => res.json()
  );
  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
