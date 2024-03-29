import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});

/**
 *
 * Gets SAVED file headers for the template
 */

// export const getfiles = async () => {
//   const res = await api.get("/");
//   return res;
// };

// export const getItem = async (item) => {
//   const res = await api.get(`:${item.id}`, item);
//   return res;
// };

/**
 * adds files to server for further processing
 *
 */
export const addFiles = async (fileListArr) => {
  // append files to formData to send to API
  const formData = new FormData();
  for (let i = 0; i < fileListArr.length; i++) {
    // add each file to our formData object
    console.log("files[i]:", fileListArr[i]);
    formData.append("userFiles", fileListArr[i]);
  }
  console.log("formData:", formData);

  // Post formData to API
  const res = await api.post("/files", formData, {
    onUploadProgress: (event) => {
      console.log("event.progress*100:", event.progress * 100);
    },
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};

// multipart/form-data
// application/x-www-form-urlencoded

// export const updatefiles = async (item) => {
//   const res = await api.patch(`/;${item.id}`, item);
//   return res;
// };

// export const archivefiles = async (item) => {
//   const res = await api.patch(`:${item.id}`, item);
//   // what would we need to do to indicate to the server that this item is to be archived?
//   // also... how does ones archive on the DB?
//   return res;
// };
// export const deletefiles = async (id) => {
//   const res = await api.delete(`:${id}`, id);
//   return res;
// };
