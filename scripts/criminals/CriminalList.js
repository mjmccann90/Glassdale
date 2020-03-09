import { useCriminals } from "./CriminalProvider.js"
import Criminal from "./Criminal.js"

const CriminalList = () => {


    const contentElement = document.querySelector(".criminalsContainer")
    const criminals = useCriminals()

    for (const CriminalObject of criminals) {
        contentElement.innerHTML += Criminal(CriminalObject)
    }
}

export default CriminalList
