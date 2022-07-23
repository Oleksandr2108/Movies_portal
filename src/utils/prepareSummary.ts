const prepareSummary = (value: string | undefined) => {
    return (value) ? value.replace(/(<([^>]+)>)/ig, '') : ''

}
export default prepareSummary