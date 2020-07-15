import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStoarge.getItem("token");
  return axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    }
  });
};
