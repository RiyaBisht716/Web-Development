const fs = require('fs');

//Read the file
fs.readFile('student.json','utf8' , (err, data) => {
    if(err) throw err;

    const obj=JSON.parse(data);
    obj.students.forEach(student => {
        console.log("${student.name} is enrolled in${students.course}");

    });
}
);