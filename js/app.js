let userAge = 0;
let userIsSubscribed = false;

userAge = 25;
userIsSubscribed = true;

if (userAge < 18){
    if (userIsSubscribed){
        console.log("The user is younger than 18 and is subscribed")
    }else{
        console.log("The user is younger than 18 and is not subscribed")
    }
}else{
    if (userIsSubscribed){
        console.log("The user is older than 18 and is subscribed")
    }else{
        console.log("The user is older than 18 and is not subscribed")
    }
}
