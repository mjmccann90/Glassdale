let officers = []

export const useOfficers = () => {
    return officers.slice()
}

export const getOfficers = () => {


    // 1. Request the data the fetch is actually a promise 👇🏻
    return fetch("https://criminals.glassdale.us/officers")


        // 2. The CALL BACK FUNCTION that converts the JSON string response to a JavaScript data structure (object or array). The .then are promises as well.👇🏻
        .then(responseFunctionParameter => responseFunctionParameter.json())


        // 3. Do something with the data. The .then are promises as well. 👇🏻
        .then(
            parsedOfficersArgument => {
                console.table(parsedOfficersArgument)
                officers = parsedOfficersArgument
            }
        )
}