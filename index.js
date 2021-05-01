const findMatching = (array, string) => {
    let matchingNames = array.filter( x => x == string || x == string.toLowerCase())
    return matchingNames
}

const fuzzyMatch = (array, string) => {
    let fuzzyReturn = array.filter(x => x.startsWith(string))
    return fuzzyReturn
}

const matchName = (array, string) => {
    let allMatch = array.filter(x => x.name == string)
    return allMatch
}