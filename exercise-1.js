// Communicating on the web
// Instagram would be pretty terrible if you have to manually copy your photos to your friend's phone when you wanted to share them. 
//Modern applications need to be able to communicate information between devices over the internet.

// Gmail doesn't just store your emails in variables on your computer, it stores them on computers in their data centers
// You don't lose your slack messages if you drop your computer in a lake, those messages exist on Slack's servers
// How does web communication work?
// When two computers communicate with each other, they need to use the same rules. An English speaker can't communicate verbally 
//with a Japanese speaker, similarly, two computers need to speak the same language to communicate.

// This "language" that computers use is called a protocol. The most popular protocol for web communication is HTTP, 
//which stands for Hypertext Transfer Protocol.


const apiKey = generateKey()
const items = await getItemData()

logItems(items);

// don't touch below this line

async function getItemData() {
  const response = await fetch('https://api.boot.dev/v1/courses_rest_api/learn-http/items', {
    method: 'GET',
    mode: 'cors',
    headers: {
      'X-API-Key': apiKey,
      'Content-Type': 'application/json'
    }
  })
  return response.json()
}

function generateKey() {
  const characters = 'ABCDEF0123456789'
  let result = ''
  for (let i = 0; i < 16; i++){
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

function logItems(items) {
  for (const item of items) {
    console.log(item.name)
  } 
}


//Outputs some items
