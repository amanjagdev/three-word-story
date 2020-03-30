const keys = {
  jsonSecret: "<YOUR_SECRET_KEY_HERE>",
  binApi: "<YOUR_BIN_API_ID_HERE>"
};

//Variables
let story;
let storyHtml = document.querySelector("#story-here");
let inputStory;
let inputStoryOne;
let inputStoryTwo;
let inputStoryThree;

//Requesting to the jsonbin
let req = new XMLHttpRequest();

req.open("GET", keys.binApi, true);
req.setRequestHeader("secret-key", keys.jsonSecret);
req.send();

req.onreadystatechange = () => {
  if (req.readyState == XMLHttpRequest.DONE) {
    story = JSON.parse(req.responseText);
    storyHtml.innerHTML = story.content;
  }
};

//Update Story : onbuttonclick
const updateStory = () => {
  inputStoryOne = document.querySelector("#input-story-one").value;
  inputStoryTwo = document.querySelector("#input-story-two").value;
  inputStoryThree = document.querySelector("#input-story-three").value;
  inputStory =
    story.content +
    " " +
    inputStoryOne +
    " " +
    inputStoryTwo +
    " " +
    inputStoryThree;

  const reqToBeSend = {
    type: "story",
    content: inputStory
  };

  //POST request to update data
  let req2 = new XMLHttpRequest();
  req2.onreadystatechange = () => {
    if (req2.readyState == XMLHttpRequest.DONE) {
      console.log(req2.responseText);
    }
  };
  req2.open("PUT", keys.binApi, true);
  req2.setRequestHeader("Content-Type", "application/json");
  req2.setRequestHeader("versioning", false);
  req2.setRequestHeader("secret-key", keys.jsonSecret);
  req2.send(JSON.stringify(reqToBeSend));

  //Updating Live content
  story.content = inputStory;
  storyHtml.innerHTML = story.content;
};


//For Reseting the story
const resetStory = () => {
  const reqToBeSendForReset = {
    type: "story",
    content: "Story : "
  };
  //POST request to update data
  let reqReset = new XMLHttpRequest();
  reqReset.open("PUT", keys.binApi, true);
  reqReset.setRequestHeader("Content-Type", "application/json");
  reqReset.setRequestHeader("versioning", false);
  reqReset.setRequestHeader("secret-key", keys.jsonSecret);
  reqReset.send(JSON.stringify(reqToBeSendForReset));

  story.content = "Story : ";
  storyHtml.innerHTML = story.content;
};
