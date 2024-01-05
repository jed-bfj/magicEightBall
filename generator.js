const randoGen = (num) => {
    return Math.floor(Math.random()*num);
}

const messageDict = {
    questions: ['Will I get married?', 'Does this person love me?', 'Will I be alone forever?', 'Am I going to meat someone soon?'],
    answers: ['No- ', 'Perhaps- ', 'Maychance- ', 'Absolutely- ', 'lmfao no way- '],
    advice:['Focus on yourself king', 'Still got it', 'Dont sweat it boss', 'Run for the hills', 'Stay the course']
}

let eightBallResponse = []

Object.keys(messageDict).forEach(item => {
    eightBallResponse.push(messageDict[item][randoGen(messageDict[item].length)])
})

console.log(eightBallResponse.join(' '))