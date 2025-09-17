window.onload = function() {
    alert("Welcome to AstroVault!")
};

document.getElementById("year").innerHTML=new Date().getFullYear();

function checkStock(id){
   let check=document.getElementById(id).textContent;
   
   if(check.includes('In Stock')){
    alert("Product is in stock!");
   }
   else{
     alert("Product is out of stock!");
   }

}

function validateForm(){

    let username=document.forms['input[name="username"]']["username"].value;
    let email=document.forms['input[name="email"]']["email"].value;
    let password=document.forms['input[name="password"]']["password"].value;

let validEmail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (username == "" || email == "" || message == "" || password == "") {
                alert("All fields must be filled out!");
                return false;
           }

if(!validEmail.BSCS25012_Contacts(email)){
    alert("Please enter a valid email address.");
    return false;
}
alert("Form is valid!");
    return true;
}


function sendMessage(){

    let input=document.getElementById("userInput").value.toLowerCase();
    let chatlog = document.getElementById("chat-log");

    let userMsg = document.createElement("p");
    userMsg.textContent= "You: " + input;
    chatlog.appendChild(userMsg);

    let botMsg = document.createElement("p");
    botMsg.textContent="Bot: "+ getBotResponse(input);
    chatlog.appendChild(botMsg);

    document.getElementById("userInput").value="";
    chatlog.scrollTop=chatlog.scrollHeight;
}

    function getBotResponse(input){
        if(input.includes("hello") || input.includes("hi")){
            return "Hello! How can i help you?";
        }
        else if(input.includes("how are you")){
            return "I am just a chatbot but I am doing great! Thanks for asking.";
        }
        else if(input.includes("bye")){
            return "Goodbye! Have a nice day.";
        }
        else if(input.includes("help")){
            return "Sure! You can ask me anything.";
        }
        else if(input.includes("name")){
            return "I am your friendly robot.";
        }
        else{
            return "Sorry, I don't understand that yet.";
        }
    }



























