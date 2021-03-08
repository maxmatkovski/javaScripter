// For .. Of Loop

const subredditList = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer']

for(let i = 0; i < subredditList.length; i++){
    console.log(`Visit reddit.com/r/${subredditList[i]}`)
}

for(let subreddit of subredditList){
    console.log(`Visit reddit.com/r/${subreddit}`)
}

// For of loops used when index isn't important and only used to iterate through an array
