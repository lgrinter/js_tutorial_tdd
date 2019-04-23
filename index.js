module.exports = Phrase;

// Adds 'reverse' to all strings
String.prototype.reverse = function() {
    return Array.from(this).reverse().join("");
}

//Deinfes a Phrase object
function Phrase(content) {
    this.content = content;

    //Returns content processed for palindrome testing.
    this.processedContent = function processedContent() {
        return this.letters().toLowerCase();
    }

    //Returns the letters in the content
    // eg new Phrase("Hello, world!").letters() === "Helloworld"
    this.letters = function letters() {
         return (this.content.match(/[a-z]/gi) || []).join("");
    }

    //Returns true if the phrase is a plaindrome, false otherwise
    this.palindrome = function palindrome() {
        return this.processedContent() === this.processedContent().reverse();
    }
}

//Defines a TranslatedPhrase object
function TranslatedPhrase(content, translation) {
    this.content = content;
    this.translation = translation;

    //Returns translation processed for palindrome testing
    this.processedContent = function processedContent() {
        return this.processor(this.translation);
    }
}

TranslatedPhrase.prototype = new Phrase();


// //Defines a Phrase object
// function Phrase(content) {
//     this.content = content;

//     this.louder = function louder() {
//         let processedContent = this.content.toUpperCase();
//         return processedContent;
//     }
// }