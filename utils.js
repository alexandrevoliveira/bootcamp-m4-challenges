module.exports = {
    age: function(timestamp) {
        const today = new Date()
        const birth = new Date(timestamp)

        let years = today.getFullYear() - birth.getFullYear()
        const month = today.getMonth() - birth.getMonth()
        
        if ( month < 0 || month == 0 && today.getDate() <= birth.getDate()) {
            years -= 1
        }
        return years
    },
    date: function(timestamp) {
        const date = new Date(timestamp)

        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)

        return `${year}-${month}-${day}`
    }
}