// competion = [
//     ["HTML", "C#"],
//     ["C#", "Python"],
//     ["Python", "HTML"]
//   ]

//  results =  [0, 0, 1]

// competion=[HomeTeam,AwayTeam] results[i] = 0 => awayTeam. results[i] = 1 => HomeTeam

function tournamentWinner(competitions, results) {
let obj = {};

for(let i =0;i<competitions.length;i++){
    if(results[i]=== 0){
        obj[competitions[i][1]] === undefined? obj[competitions[i][1]]=3:obj[competitions[i][1]]=obj[competitions[i][1]]+3
    }else{
        obj[competitions[i][0]] === undefined? obj[competitions[i][0]]=3:obj[competitions[i][0]]=obj[competitions[i][0]]+3
    }
}

let max = -Infinity;
let winner= ''
for(let win in obj ){
    if(obj[win]>= max){
        max = obj[win];
        winner= win
    }
}

console.log( winner)
}

tournamentWinner([
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
  ], [0,0,1]
  )