// //Inhalt von contentful.js
// import * as contentful from 'contentful';
// console.log("test");



// export const client = contentful.createClient({
//     space: spaceId,
//     accessToken: accessToken
// });

// client.getEntries({ content_type: 'Product' })
//     .then((response) => {
//         // Hier hast du Zugriff auf die Daten in response.items
//         console.log(response);
//     })
//     .catch((error) => {
//         console.log(`Error fetching content: ${error.message}`);
//     });

// // Importieren Sie Axios und ggf. das Svelte Store-Paket
// import axios from 'axios';

// // Definieren Sie Ihre Contentful-Endpunkte
// const apiUrl = `https://cdn.contentful.com/spaces/${spaceId}/entries?access_token=${accessToken}`;

// // Erstellen Sie eine Funktion zum Abrufen von Daten
// async function fetchData() {
//     try {
//         const response = await axios.get(apiUrl);
//         // Hier können Sie die Daten verarbeiten oder im Store speichern
//         console.log(response.data);
//     } catch (error) {
//         console.error('Fehler beim Abrufen der Daten von Contentful:', error);
//     }
// }

// // Rufen Sie die fetchData-Funktion auf, wenn Ihre Komponente montiert wird
// onMount(() => {
//     fetchData();
// });