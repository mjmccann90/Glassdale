/**
 *  Fish which renders individual fish objects as HTML
 */
const Criminal = (criminalObject) => {
    return `
    <section id="criminal-section"class="${criminalObject.id}">
    <div class="single-criminal">
            <p>Age: ${criminalObject.age}</p>
            <p>Conviction: ${criminalObject.conviction}</p>
            <p>Incarceration start date: ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</p>
            <p>Incarceration end date: ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</p>
            </div>
    </section>
    `
}

export default Criminal