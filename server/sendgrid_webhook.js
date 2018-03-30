var localtunnel = require("localtunnel");
localtunnel(
  5000,
  {
    subdomain: "testingtmemailappdevthroughsendgrid"
  },
  function(err, tunnel) {
    console.log("LT running");
  }
);
