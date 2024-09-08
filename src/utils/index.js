export const getAccessToken = () => {
  const storedAccessToken = sessionStorage.getItem("accessToken");

  if (storedAccessToken === null) {
    return null;
  }

  try {
    return JSON.parse(storedAccessToken);
  } catch (e) {
    console.error("Error parsing access token:", e);
    return null;
  }
};
