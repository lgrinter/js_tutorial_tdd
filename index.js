module.exports = Phrase;

//Reverse a strong
function reverse(string) {
    return Array.from(string).reverse().join("");
}

//Deinfes a Phrase object
function Phrase(content) {
    this.content = content;
    
    //Sets content to lowercase
    this.processor = function(string) {
        return this.processor.toLowerCase();
    }
    
    //Returns content processed for palindrome testing.
    this.processedContent = function processedContent() {
        return this.processor(this.content);
    }
    
    //Returns true if the phrase is a plaindrome, false otherwise
    this.palindrome = function palindrome() {
        return this.processedContent() === reverse(this.processedContent());
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