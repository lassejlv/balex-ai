let url =
  "http://localhost:3000/api/v1/resultater?api_key=05a90e6d-e942-4b71-85c9-85fd246d2d68";

// fetch data from an api and innerHTML it to a div
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    let result = document.getElementById("result");
    result.innerHTML = data.map((item) => `<p>${item}</p>`).join("");
  });
