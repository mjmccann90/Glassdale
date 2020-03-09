let convictions = []

export const useConvictions = () => {
    return convictions.slice()
}

export const getConvictions = () => {


    // 1. Request the data the fetch is actually a promise 👇🏻
    return fetch("https://criminals.glassdale.us/crimes")


        // 2. The CALL BACK FUNCTION that converts the JSON string response to a JavaScript data structure (object or array). The .then are promises as well.👇🏻
        .then(responseFunctionParameter => responseFunctionParameter.json())


        // 3. Do something with the data. The .then are promises as well. 👇🏻
        .then(
            parsedConvictionsArgument => {
                console.table(parsedConvictionsArgument)
                convictions = parsedConvictionsArgument
            }
        )
}