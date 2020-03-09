let criminals = []

export const useCriminals = () => {
    return criminals.slice()
}

export const getCriminals = () => {


    // 1. Request the data the fetch is actually a promise 👇🏻
    return fetch("https://criminals.glassdale.us/criminals")


        // 2. The CALL BACK FUNCTION that converts the JSON string response to a JavaScript data structure (object or array). The .then are promises as well.👇🏻
        .then(responseFunctionParameter => responseFunctionParameter.json())


        // 3. Do something with the data. The .then are promises as well. 👇🏻
        .then(
            parsedCriminalsArgument => {
                console.table(parsedCriminalsArgument)
                criminals = parsedCriminalsArgument
            }
        )
}