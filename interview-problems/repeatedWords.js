// given a string, return repeated words & number of times repeated

// ex: "This dog is the best dog and he is a good boy" //-> { dog: 2, is: 2}

// questions: what about punctuation? 
// are there any capital letters 
// Should the returned object contain the word(s) in their original state? 
// what if there's multiple sentences? 

let sentence = "Hello we have some repeated repeated words"

function repeatedWords(str) {
    let sentenceArray = sentence.toLowerCase().split(" ")

    let words = {}
    
    for (let i = 0; i < sentenceArray.length; i++) {
        // check if the words hash has sentenceArray[i]
        words[sentenceArray[i]] ? words[sentenceArray[i]] ++ : words[sentenceArray[i]] = 1
        // if not, initialize to 1
        // if so, add 1 to the value
    }
    
    for (let i = 0; i < Object.values(words).length; i++) {
        Object.values(words) > 1 ? console.log(words[i])
    }
    // return words hash only if value is greater than 1
}

repeatedWords(sentence)