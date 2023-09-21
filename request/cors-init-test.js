const xhr = new XMLHttpRequest();

const url = "https://6502dc12a0f2c1f3faeafdf7.mockapi.io/test/estimates/1";

const scriptUrl = document.currentScript.src;

const urlParams = new URLSearchParams(scriptUrl.split("?")[1]);

const districtId = urlParams.get("districtId") ?? "estimates-district";
const realtyComplexId =
  urlParams.get("realtyComplexId") ?? "estimates-realty-complex";
const flateId = urlParams.get("flateId") ?? "estimates-flate";

const validation = /^[a-zA-Z0-9\-_]+$/;

if (!validation.test(districtId)) {
  throw new Error("Недопустимый идентификатор элемента districtId");
}

if (!validation.test(realtyComplexId)) {
  throw new Error("Недопустимый идентификатор элемента realtyComplexId");
}

if (!validation.test(flateId)) {
  throw new Error("Недопустимый идентификатор элемента flateId");
}

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
  console.error("Произошла ошибка при получении данных");
};

xhr.send();
