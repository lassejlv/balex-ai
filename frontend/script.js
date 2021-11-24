let url =
  "http://localhost:3000/api/v1/resultater?api_key=05a90e6d-e942-4b71-85c9-85fd246d2d68";

const ask = document
  .getElementById("ask")
  .addEventListener("click", function () {
    let url =
      "http://localhost:3000/api/v1/resultater?api_key=05a90e6d-e942-4b71-85c9-85fd246d2d68";

    // fetch data from an api and innerHTML it to a div
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // if there is no data, display alert message
        if (data.length === 0) {
          alert("No data found");
        }

        let result = document.getElementById("result");
        // lav spørgsmålet random
        let random = Math.floor(Math.random() * data.length);

        result.innerHTML = data[random];
      });
  });
