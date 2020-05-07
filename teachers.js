const fs = require('fs')
const data = require('./data.json')
const { age, date } = require('./utils')

// create
exports.post = function(req, res) {

    const keys = Object.keys(req.body)
    
    for (key of keys) {
        if (req.body[key] == "") {
            return res.send("Please, fill all the fields")
        }
    }

    let { avatar_url, name, birth, degree, class_type, services } = req.body

    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.teachers.length) + 1
    

    data.teachers.push({
        id,
        avatar_url,
        name,
        birth,
        degree,
        class_type,
        services,
        created_at
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send("Error in Data writing")

        return res.redirect("/teachers")        
    })
}

// show
exports.show = function(req, res) {
    const { id } = req.params
    
    const foundTeacher = data.teachers.find(function(teacher){
        return teacher.id == id
    })
    
    if (!foundTeacher) {
        return res.send("Teacher not found")
    }

    const teacher = {
        ...foundTeacher,
        age: age(foundTeacher.birth),
        services: foundTeacher.services.split(","),
        created_at: new Intl.DateTimeFormat("pt-BR").format(foundTeacher.created_at)
    }

    return res.render("teachers/show", { teacher })

}

// edit

exports.edit = function(req, res) {
    const { id } = req.params

    const foundTeacher = data.teachers.find(function(teacher){
        return id == teacher.id
    })

    if (!foundTeacher) {
        return res.send("Teacher not found!")
    }

    const teacher = {
        ...foundTeacher,
        birth: date(foundTeacher.birth)
    }

    return res.render("teachers/edit", { teacher })
}