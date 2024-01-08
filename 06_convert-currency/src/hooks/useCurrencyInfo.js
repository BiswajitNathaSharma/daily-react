import { data } from "autoprefixer";
import { useState,useEffect } from "react";

function useCurrencyInfo(currency){
    useEffect(() => {
        const [data, setData] = useState({})
        let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        fetch(url)
        .then((resp)= resp.json)
        .then((resp) => setData(resp[currency]))
        console.log(data)
    }, [currency])
    return data
}
export default useCurrencyInfo;