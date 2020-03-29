# three-word-story
The idea is to build a story that everyone collaborates to and it's based on the popular internet forum game
[Three Word Story](https://colorfolk.fandom.com/wiki/Three_Word_Story)

Here jsonbin.io's API is used

## Setup
Just replace the `<YOUR_SECRET_KEY_HERE> and <YOUR_BIN_API_ID_HERE>` fiels in the javascript code
Then just use any backend for the static website and you are good to go.

## Note 
You can get these keys from [here](https://jsonbin.io)

Moreover the json has to be formatted in the following way : 
```javascript
{
    "type" : "story",
    "content" : "<STORY_WILL_BE_PLOTTED_HERE>"
}
```