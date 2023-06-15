import md5 from "md5";

export const getMarvelAPIParameters = () => {
  const publicKey = process.env.REACT_APP_MARVEL_API_PUBLIC_KEY;
  const privateKey = process.env.REACT_APP_MARVEL_API_PRIVATE_KEY;
  const ts = Date.now();

  return {
    ts,
    apikey: publicKey,
    hash: md5(`${ts}${privateKey}${publicKey}`),
  };
};
