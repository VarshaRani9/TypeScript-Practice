function greet(firstName: string) {
    // if we omit type(string) here : parameter firstName implicitly has an 'any' type 
    // and will give compile time error as type should be specified explicitly
    console.log("Hello "+ firstName);
}
greet("Varsha")