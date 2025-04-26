function userLogin(){
    
}
function gotohome(){
    return Promise.resolve("auth done")
}
async function performTask() {
    const response = await userLogin()
    console.log("validated user");
    const userAuthStatus = await gotohome(response)
    console.log(userAuthStatus);
}