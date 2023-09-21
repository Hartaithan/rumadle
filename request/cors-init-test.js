const xhr = new XMLHttpRequest();

const url = "https://6502dc12a0f2c1f3faeafdf7.mockapi.io/test/estimates/1";

const scriptUrl = document.currentScript.src;

const urlParams = new URLSearchParams(scriptUrl.split("?")[1]);

const districtId = urlParams.get("districtId") ?? "estimates-district";
const realtyComplexId =
  urlParams.get("realtyComplexId") ?? "estimates-realty-complex";
const flateId = urlParams.get("flateId") ?? "estimates-flate";

xhr.open("GET", url, true);

xhr.responseType = "json";

xhr.onload = () => {
  if (xhr.status === 200) {
    const data = xhr.response;

    const district = document.querySelector(
      `#${districtId} .estimates-collapsible-content p`
    );
    const complex = document.querySelector(
      `#${realtyComplexId} .estimates-collapsible-content p`
    );
    const flate = document.querySelector(
      `#${flateId} .estimates-collapsible-content p`
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
