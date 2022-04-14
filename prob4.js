//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.
let stored_username="zzz@gmail.com";
let stored_password="12345"

input_username="zzz@gmail.com"
input_password="12345"

if(stored_username==input_username){
  if(stored_password==input_password){
    console.log("login")
  }else{
    console.log("password is wrong")
  }
}else{
  console.log("username not found")
}