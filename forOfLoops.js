// For .. Of Loop

const subredditList = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer']

for(let i = 0; i < subredditList.length; i++){
    console.log(`Visit reddit.com/r/${subredditList[i]}`)
}

for(let subreddit of subredditList){
    console.log(`Visit reddit.com/r/${subreddit}`)
}

// For of loops used when index isn't important and only used to iterate through an array


const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for (let i = 0; i < seatingChart.length; i++){
    const row = seatingChart[i];
    for (let j = 0; j < row.length; j++){
        console.log(row[j])
    }
}

for(let row of seatingChart){
    for (let student of row){
        console.log(student);
    }
}

// Using for of to iterate through characters

for(let char of "hello world"){
    console.log(char)
}
