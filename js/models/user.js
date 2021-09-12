export function register(name, email, password){
    async let response = await auth.createUserWithEmailAndPassword(email, password);
    console.log(response);
    console.log("Register successfully");
    console.log(auth.currentUser);
}

export function login(email,password){

}

export function getCurrentUser(){
    
}

export function updateUser(){
    
}

export function logout(){
    
}