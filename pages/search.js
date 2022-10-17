import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
const Search = ({ searchResults }) => {
  const router = useRouter();
  const { endDate, startDate, noOfGuests, location } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  return (
    <Layout placeholder={`${location} | ${range} | ${noOfGuests}`}>
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays {range} for {noOfGuests} number of guests
          </p>
          <h1 className="text-3xl font-semibold my-3">Stays in {location}</h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
          {searchResults?.map((item, index) => (
            <InfoCard key={item.img} {...item} index={index} />
          ))}
        </section>
      </main>
    </Layout>
  );
};

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch(`https://www.jsonkeeper.com/b/5NPS`).then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults,
    },
  };
}
