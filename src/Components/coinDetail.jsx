import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const API_KEY = import.meta.env.VITE_APP_API_KEY;


export default function CoinDetail() {

  const params = useParams(); 

  const [fullDetails, setFullDetails] = useState(null);

  useEffect(() => {
    const getCoinDetails = async () => {
      const coinDetails = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=' + params.symbol + '&tsyms=USD&api_key=' + API_KEY);

      const coinDecsription = await fetch('https://min-api.cryptocompare.com/data/all/coinlist?fsym=' + params.symbol + '&api_key=' + API_KEY);

      const coinDetailsJSON = await coinDetails.json();
      const coinDescriptionJSON = await coinDecsription.json();

      console.log(coinDetailsJSON);
      console.log(coinDescriptionJSON);
      setFullDetails({"numbers": coinDetailsJSON.DISPLAY, "textData": coinDescriptionJSON.Data});
    };

    getCoinDetails().catch(console.error);
  }, [params.symbol]);

  return (
    <>
      {
        fullDetails && (
          <div>
            <h1>{fullDetails.textData[params.symbol].FullName}</h1>
            <img
              className="images"
              src={`https://www.cryptocompare.com${
                fullDetails.numbers[params.symbol].USD.IMAGEURL
              }`}
              alt={`Small icon for ${params.symbol} crypto coin`}
            />
            <div> {fullDetails.textData[params.symbol].Description}</div>
            <br></br>
            <div>
              This coin was built with the algorithm{" "}
              {fullDetails.textData[params.symbol].Algorithm}{" "}
            </div>
          </div>
        )
      }
    </>
  );
};