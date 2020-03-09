// import { getOfficers } from "./officers/OfficerProvider.js"
import { getCriminals } from "./criminals/CriminalProvider.js"
// import { getWitnesses } from "./witnesses/WitnessProvider.js"
// import { getConvictions } from "./convictions/ConvictionProvider.js"

import CriminalList from "./criminals/CriminalList.js"




// getOfficers()
getCriminals().then(
    () => CriminalList()
)
// getWitnesses()
// getConvictions()