const xhr = new XMLHttpRequest();

const url = "https://6502dc12a0f2c1f3faeafdf7.mockapi.io/test/estimates/1";

xhr.open("GET", url, true);

xhr.responseType = "json";

xhr.onload = () => {
  if (xhr.status === 200) {
    const data = xhr.response;

    const district = document.querySelector(
      "#estimates-district .estimates-collapsible-content p"
    );
    const complex = document.querySelector(
      "#estimates-realty-complex .estimates-collapsible-content p"
    );
    const flate = document.querySelector(
      "#estimates-flate .estimates-collapsible-content p"
    );

    if (district && data.district) {
      district.textContent = data.district;
    }
    if (complex && data["realty complex"]) {
      complex.textContent = data["realty complex"];
    }
    if (flate && data.flate) {
      flate.textContent = data.flate;
    }
  }
};

xhr.onerror = () => {
  console.error("api request error");
};

xhr.send();
