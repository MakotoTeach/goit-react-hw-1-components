const request = require("request-promise");
require("dotenv").config();

const darkSkyKey = process.env.DARSKY_SECRET_KEY;

module.exports = async (latitude, longitude) => {
  const darkSkyBaseUrl = `https://api.darksky.net/forecast/${darkSkyKey}/${latitude},${longitude}`;

//   /weather?lat=50.4851493&lan=30.4721233 ---- request

  try {
    const res = await request(darkSkyBaseUrl, {json: true});
    console.log("res :", res);
    return res;
  } catch (error) {
    throw new error();
  }
};
