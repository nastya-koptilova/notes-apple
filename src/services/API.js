import axios from "axios";

const BASE_URL = "https://quintadb.com.ua/";
const KEY = "ddU0rgW6PcTQJdJ8koWOmC";
const APP_ID = "dcUL_dP8nbW4eDjCkGW49e";
const ENTITY_ID = "a2dSo6wmjai6NdLZBdGmo5";

// All
// https://quintadb.com.ua/apps/dcUL_dP8nbW4eDjCkGW49e/dtypes/entity/a2dSo6wmjai6NdLZBdGmo5.json?rest_api_key=ddU0rgW6PcTQJdJ8koWOmC&amp;view=
// One
// https://quintadb.com.ua/apps/dcUL_dP8nbW4eDjCkGW49e/dtypes/ddL2JdRNbnW4jODCogFmkF.json?rest_api_key=ddU0rgW6PcTQJdJ8koWOmC
// Edit one
// https://quintadb.com.ua/apps/dcUL_dP8nbW4eDjCkGW49e/dtypes/ddL2JdRNbnW4jODCogFmkF.json?rest_api_key=ddU0rgW6PcTQJdJ8koWOmC
// Delete one
// https://quintadb.com.ua/apps.json?rest_api_key=ddU0rgW6PcTQJdJ8koWOmC
// Add one by name
// https://quintadb.com.ua/apps/dcUL_dP8nbW4eDjCkGW49e/dtypes.json?rest_api_key=ddU0rgW6PcTQJdJ8koWOmC
// Search by name
// https://quintadb.com.ua/search/dcUL_dP8nbW4eDjCkGW49e.json?rest_api_key=ddU0rgW6PcTQJdJ8koWOmC&amp;entity_id=a2dSo6wmjai6NdLZBdGmo5&amp;view=

export async function getNotes() {
  const { data } = await axios.get(
    `${BASE_URL}apps/${APP_ID}/dtypes/entity/${ENTITY_ID}.json?rest_api_key=${KEY};view=`
  );
  return data;
}

export async function getOneNote(id) {
  const { data } = await axios.get(
    `${BASE_URL}apps/${APP_ID}/dtypes/${id}.json?rest_api_key=${KEY};view=`
  );
  return data;
}

export async function addNote(note) {
  const { data } = await axios.post(`${BASE_URL}apps/${APP_ID}/dtypes.json`, {
    rest_api_key: KEY,
    values: {
      entity_id: ENTITY_ID,
      id: note.id,
      bIW6hdUSjpf4oia07dRMHy: note.title,
    },
  });
  return data;
}

export async function deleteNote(id) {
  const { data } = await axios.delete(
    `${BASE_URL}apps/${APP_ID}/dtypes/${id}.json?rest_api_key=${KEY}`
  );
  return data;
}

export async function editNote(newData) {
  const { data } = await axios.put(
    `${BASE_URL}apps/${APP_ID}/dtypes/${newData.id}.json`,
    {
      rest_api_key: KEY,
      values: {
        bIW6hdUSjpf4oia07dRMHy: newData.title,
        cVWQ5XAeDfW6pdPM4EqbTo: newData.data,
        ddNmkgq8jhzioSlCkmsSod: newData.text,
      },
    }
  );
  return data;
}

// export async function searchNotes(query) {
//   const { data } = await axios.post(`${BASE_URL}search/${APP_ID}.json`, {
//     rest_api_key: KEY,
//     entity_id: ENTITY_ID,
//     search: [[{ a: "ALL", b: query, o: "is" }]],
//   });
//   return data;
// }
