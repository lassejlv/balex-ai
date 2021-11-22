let url = "http://localhost:3000/api/v1/resultater";

// fetch data from a api and console.log it
fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data));

// fetch data from an api and innerHTML it to a div
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    let result = document.getElementById("result");
    result.innerHTML = data.map((item) => `<p>${item}</p>`).join("");
  });
