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

        return {
            day: day,
            month: month,
            year: year,
            birthDay: `${day}/${month}`,
            iso: `${year}-${month}-${day}`
        }
    },
    grade: function(string) {
        const values = {
            "5º ano do ensino fundamental": "5EF",
            "6º ano do ensino fundamental": "6EF",
            "7º ano do ensino fundamental": "7EF",
            "8º ano do ensino fundamental": "8EF",
            "9º ano do ensino fundamental": "9EF",
            "1º ano do ensino médio": "1EM",
            "2º ano do ensino médio": "2EM",
            "3º ano do ensino médio": "3EM",
        }

        const formattedValue = values[string]

        return formattedValue
    }
}