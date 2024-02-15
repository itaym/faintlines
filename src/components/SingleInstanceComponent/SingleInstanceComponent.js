/**
 * This I might turn into an NPM package
 * and add HOC option as well.
 * @constructor
 */

const SingleInstanceComponent = () => {
    const isStrictMode = !this
    let renderedCount = {}
    let isInit = false

    const singleInstanceFunction = ({ children, id }) => {

        if (!isInit) {
            console.warn("A component using the SingeInstanceComponent did not initialize\n" +
                         "the SingleInstanceComponent. This may cause unexpected results!")
        }
        if (!renderedCount[id]) renderedCount[id] = 0

        if (renderedCount[id] < (isStrictMode ? 2 : 1)) {
            renderedCount[id]++
            return children
        }
        return null
    }
    singleInstanceFunction.SingleInstanceComponentInit = () => {
        isInit = true
        renderedCount = {}
    }
    return singleInstanceFunction
}

export default SingleInstanceComponent()
