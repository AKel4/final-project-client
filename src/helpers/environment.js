let APIURL = "";

switch (window.location.hostname) {
  case "localhost" || "127.0.0.1":
    APIURL = "http://localhost:4000";
    break;

  case "clean-client-ak.herokuapp.com":
    APIURL = "https://clean-client-ak.herokuapp.com";
}
export default APIURL;
