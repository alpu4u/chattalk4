//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyCPWJYVJxC7j1eudTyoFltYHFkNE3nsN-g",
    authDomain: "kwwiter-271fb.firebaseapp.com",
    databaseURL: "https://let-chat-web-app-aa9ef-default-rtdb.firebaseio.com",
    projectId: "kwwiter-271fb",
    storageBucket: "kwwiter-271fb.appspot.com",
    messagingSenderId: "118001317071",
    appId: "1:118001317071:web:069d163478c74cd9fef3ba"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name")
room_name = localStorage.getItem("room_name")
function send()
{
      msg = document.getElementById("msg").value
      firebase.database().ref(room_name).push({
      
            name:user_name,
            message:msg,
            like:0
      })   
      document.getElementById("msg").value =" "
}
function logout()
{
    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
    window.location= "index.html"
}