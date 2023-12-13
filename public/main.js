function obtenirInfoPaisPromesa(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          reject(`HTTP error! status: ${response.status}`);
        } else {
          resolve(response.json());
        }
      })
      .catch((error) => {
        reject('Fetch error: ' + error.message);
      });
  });
}

const ferPeticioAmbPromesa = () => {
  const pais = document.getElementById('country').value;
  const url = `https://restcountries.com/v3.1/name/${pais}`;
  obtenirInfoPaisPromesa(url)
    .then((data) => {
      document.querySelector('#resposta').innerText = JSON.stringify(data[0]);
    })
    .catch();
};

// const ferPeticioAmbAsyncAwait = async () => {
//   const pais = document.getElementById('country').value;
//   const url = `https://restcountries.com/v3.1/name/${pais}`;
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     document.querySelector('#resposta').innerText = JSON.stringify(
//       data[0].name.nativeName.spa.common
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };

async function ferPeticioAmbAsync() {
  const country = document.getElementById('country').value;
  const url = `https://restcountries.com/v3.1/name/${country}`;

  try {
    const data = await obtenirInfoPaisAsync(url);
    document.getElementById('resposta').innerText = JSON.stringify(data);
  } catch (error) {
    console.error('Error de petició:', error);
  }
}

async function obtenirInfoPaisAsync(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}
