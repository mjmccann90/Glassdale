let witnesses = []

export const useWitnesses = () => {
    return witnesses.slice()
}

export const getWitnesses = () => {


    // 1. Request the data the fetch is actually a promise 👇🏻
    return fetch("https://criminals.glassdale.us/witnesses")


        // 2. The CALL BACK FUNCTION that converts the JSON string response to a JavaScript data structure (object or array). The .then are promises as well.👇🏻
        .then(responseFunctionParameter => responseFunctionParameter.json())


        // 3. Do something with the data. The .then are promises as well. 👇🏻
        .then(
            parsedWitnesesArgument => {
                console.table(parsedWitnesesArgument)
                witnesses = parsedWitnesesArgument
            }
        )
}