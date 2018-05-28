const  DB_URI = "mongodb://yolly:indeche13@ds119490.mlab.com:19490/miniproject";
const TEST_DB_URI = "mongodb://yolly:indeche13@ds213259.mlab.com:13259/local_library";

//default timeout for Mocha async tests
const MOCHA_TEST_TIMEOUT = 5000;


module.exports = {
  DB_URI,
  TEST_DB_URI,
  MOCHA_TEST_TIMEOUT
}
