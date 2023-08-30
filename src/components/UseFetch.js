import { useState, useEffect } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((result) => {
          console.log(result);
          // pengecekan URL
          if (result.ok) {
            return result.json();
          } else {
            setIsError("Could not fetch from URL!");
          }
        })
        .then((data) => {
          console.log(data); // pengecekan
          setData(data); // data sudah terisi
          setIsLoading(false); // loading ditutup
        })
        .catch((error) => {
          setIsError(error.message + ", server is down!");
        });
    }, 3000); // timeout 3 second
  }, [url]); // [] dependencies: merender data saat url didapatkan

  return { data, isLoading, isError }; // props
};

export default UseFetch;
