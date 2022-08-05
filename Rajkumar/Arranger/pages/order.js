import Navbar from "../components/Navbar/Navbar";
import Login from "../components/Login/Login";
import Footer from "../components/Footer/Footer";

const login = () => {
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/services/${id}`).then((res) => {
      const data = res.data;
      setData(data);
      if (res.status === 200) {
        setUpdated(!updated);
      }
    });
  }, [updated]);
  return (
    <>
      <Head>
        <title>Arranger</title>
      </Head>
      <Navbar />
      <Login />
      <Footer />
    </>
  );
};

export default login;
