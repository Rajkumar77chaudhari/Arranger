import Link from "next/link";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";

export const getStaticProps = async () => {
  const res = await fetch(`http://127.0.0.1:8000/service/`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const user = ({data}) => {
  console.log(data)
  return (
    <>
      <Navbar />
      <div
        style={{ display: "flex", boxSizing: "border-box", flexWrap: "wrap" }}
      >
        {data.slice(0, 5).map((item, index) => {
          return (
            <>
              <Card
                name={item.name}
                key={index}
                type="hall"
                href={`/user/${item.name}`}
                price={item.price}
                address={item.address}
              />
            </>
          );
        })}
        {data.slice(5, 10).map((item, index) => {
          return (
            <Link href={`/user/${item.name}`} style={{ color: "black" }}>
              {item.name}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default user;
