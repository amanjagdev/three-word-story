const keys = {
  jsonSecret: "$2b$10$hj6ZWnFYmkxR3FDaigl1kOa5T7sNUFwp7MOrt859gf9Mag8o817C6"
}

let req = new XMLHttpRequest();

req.onreadystatechange = () => {
  if (req.readyState == XMLHttpRequest.DONE) {
    console.log(req.responseText);
  }
};

req.open("GET", "https://api.jsonbin.io/b/5e800982862c46101abff5ca", true);
req.setRequestHeader("secret-key", );

req.send();