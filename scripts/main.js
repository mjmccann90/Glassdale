// import { getOfficers } from "./officers/OfficerProvider.js"
// import { getWitnesses } from "./witnesses/WitnessProvider.js"

import { getCriminals } from "./criminals/CriminalProvider.js"
import { CriminalList } from "./criminals/CriminalList.js"

import { getConvictions } from "./convictions/ConvictionProvider.js"
import ConvictionSelect from "./convictions/ConvictionsSelect.js"



// First get all the criminals, THEN create the criminal list.
getCriminals().then(
    () => CriminalList()
)

// First get all the convictions, THEN create the conviction dropdown.
getConvictions().then(
    () => {
        ConvictionSelect()
    })


// getOfficers()
// getWitnesses()