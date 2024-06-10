var quoteList = ["“<h3>Be yourself; everyone else is already taken.</h3><h5>― Mahatma Gandhi</h5>”",
"<h3>“I'm selfish, impatient and a little insecure. I make mistakes</h3><h5>― Mahatma Gandhi</h5>",
"<h3>I am out of control and at times hard to handle. But if you can't handle me at my worst</h3><h5>― Mahatma Gandhi</h5>", 
"<h3>then you sure as hell don't deserve me at my best.”</h3><h5>― Mahatma Gandhi</h5>",
"<h3>“Be the change that you wish to see in the world.”</h3><h5>― Mahatma Gandhi</h5>",
"<h3>“In three words I can sum up everything I've learned about life: it goes on.”</h3><h5>― Mahatma Gandhi</h5>",
"<h3>“I am so clever that sometimes I don't understand a single word of what I am saying.”</h3><h5>― Mahatma Gandhi</h5>"]
var quoteNumber
var quoteBlock
function getQuote() {
    quoteNumber = Math.floor(Math.random() * quoteList.length);
    while (quoteNumber == quoteBlock) {
        quoteNumber = Math.floor(Math.random() * quoteList.length);
    }
    quoteBlock = quoteNumber;
    document.getElementById("myData").innerHTML = `${quoteList[quoteNumber]}`;

}