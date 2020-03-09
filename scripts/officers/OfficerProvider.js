let officers = []

export const useOfficers = () => {
    return officers.slice()
}

export const getOfficers = () => {
    // 1. Request the data 👇🏻
    return fetch("https://criminals.glassdale.us/officers")
        // 2. Convert the JSON string response to a JavaScript data structure (object or array)👇🏻
        .then(response => response.json())
        // 3. Do something with the data
        .then(
            parsedOfficers => {
                console.table(parsedOfficers)
                officers = parsedOfficers
            }
        )
}