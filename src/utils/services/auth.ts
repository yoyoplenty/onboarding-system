import { getLocalStorage } from "./local-storage";

export const authHeader = () => {
  const user = getLocalStorage("user");

  if (user && user.accessToken) {
    return { Authorization: "Bearer " + user.accessToken };
  } else {
    return {};
  }
};
