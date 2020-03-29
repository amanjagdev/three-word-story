const keys = {
  jsonSecret: "<YOUR_SECRET_KEY_HERE>",
  binApi: "<YOUR_BIN_API_ID_HERE>"
}

let story;
let storyHtml = document.querySelector("#story-here");
let inputStory;

//Requesting to the jsonbin
let req = new XMLHttpRequest();

req.open("GET", keys.binApi, true);
req.setRequestHeader("secret-key",keys.jsonSecret);
req.send();

req.onreadystatechange = () => {
  if (req.readyState == XMLHttpRequest.DONE) {
    story = JSON.parse(req.responseText);
    console.log(story.content);
    storyHtml.innerHTML= story.content
  }
};

const updateStory = () => {
  inputStory = document.querySelector("#input-story").value;
  inputStory = story.content +" "+ inputStory;

  const reqToBeSend = {
    "type" : "story",
    "content" : inputStory
  }
  console.log(reqToBeSend)
  let req2 = new XMLHttpRequest();

  req2.onreadystatechange = () => {
    if (req2.readyState == XMLHttpRequest.DONE) {
      console.log(req2.responseText);
    }
  };

  req2.open("PUT", keys.binApi, true);
  req2.setRequestHeader("Content-Type", "application/json");
  req2.setRequestHeader("versioning", false);
  req2.setRequestHeader("secret-key",keys.jsonSecret);
  req2.send(JSON.stringify(reqToBeSend));
}