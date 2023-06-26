import axios from "axios";

const resolveUrl = (url) => `/api/resolver?url=${url}`;
const baseURL = "https://api.versuspay.co/api/v1/";
async function postNewsLetter({ email }) {
  try {
    const url = resolveUrl(`${baseURL}/web/newsletter`);
    // url=/api/resolver?url=api.example.com/newsletter
    const { data } = await axios({
      url,
      method: "post",
      data: { email },
      headers: {
        //   Authorization: `Bearer token`,
      },
    });
    return data;
  } catch (error) {
    console.log(error.response);
  }
}
async function postWaitList({ email }) {
  try {
    const url = resolveUrl(`${baseURL}/web/waitlist`);
    // url=/api/resolver?url=api.example.com/newsletter
    const { data } = await axios({
      url,
      method: "post",
      data: { email },
      headers: {
        //   Authorization: `Bearer token`,
      },
    });
    return data;
  } catch (error) {
    console.log(error.response);
  }
}
async function postContactUs({ email, name, subject, message }) {
  try {
    const url = resolveUrl(`${baseURL}/web/contact`);
    // url=/api/resolver?url=api.example.com/newsletter
    const { data } = await axios({
      url,
      method: "post",
      data: { email, name, subject, message },
      headers: {
        //   Authorization: `Bearer token`,
      },
    });
    return data;
  } catch (error) {
      console.log(error.response);
      return error.response;
  }
}

export { postNewsLetter, postWaitList, postContactUs };
