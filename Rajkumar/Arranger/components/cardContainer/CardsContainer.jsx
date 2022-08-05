import React, { useState, useEffect } from "react";
import style from "../cardContainer/CardsContainer.module.scss";
import Card from "../Card/Card";
import cData from "../cardContainer/cardData.js";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";

const CardsContainer = () => {

  const makePayment = async () => {
    console.log("here...");
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    // Make API call to the serverless API
    const data = await fetch("/api/razorpay", { method: "POST" }).then((t) =>
      t.json()
    );
    console.log(data);
    var options = {
      key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      name: "Manu Arora Pvt Ltd",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thankyou for your test donation",
      image: "https://manuarora.in/logo.png",
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "Manu Arora",
        email: "manuarorawork@gmail.com",
        contact: "9999999999",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      // document.body.appendChild(script);

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };


  const [inputText, setInputText] = useState("");
  const [images, setImages] = useState(null);
  const [updated, setUpdated] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/services/`).then((res) => {
      const data = res.data;
      setData(data);
      if (res.status === 200) {
        setUpdated(!updated);
      }
    });
  }, [updated]);

  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const showCards = (item, index) => {
    return (
      <Card
        name={item.name}
        price={item.price}
        address={item.address}
        type={item.catagory}
        key={item.id}
        href="/order"
        input={inputText}
        src={`http://localhost:8000${item.image}`}
        onclick={makePayment}
      />
    );
  };

  const filteredData = data.filter((item) => {
    if (inputText === "") {
      return item;
    } else {
      return item.name?.toLowerCase().includes(inputText);
    }
  });

  return (
    <div id={style.cards_container}>
      <div className={style.search_container}>
        <div className={style.searchBox}>
          <div className={style.searchBar}>
            <div id={style.searchInput}>
              <input
                type="search"
                name={style.searchText}
                id={style.searchText}
                placeholder="Search services"
                onChange={inputHandler}
              />
              <SearchIcon style={{ fontSize: "2rem" }} />
            </div>
            <select
              name={style.service_selector}
              id={style.service_selector}
              className={style.selector_box}
            >
              <option value="1">Services</option>
              <option value="2">Hall</option>
              <option value="3">Catrace</option>
              <option value="4">Decorator</option>
              <option value="5">Photographer</option>
              <option value="6">DJ</option>
            </select>
            <select
              name={style.location_selector}
              id={style.location_selector}
              className={style.selector_box}
            >
              <option value="1">Your Location</option>
              <option value="2">Mumbai</option>
              <option value="3">Chennai</option>
              <option value="4">Punjab</option>
              <option value="5">Goa</option>
              <option value="5">Delhi</option>
            </select>
            <input type="date" id={style.date} name={style.bookingDate} />
          </div>
        </div>
      </div>
      <div className={style.cards_wrapper}>{filteredData.map(showCards)}</div>
    </div>
  );
};

export default CardsContainer;
