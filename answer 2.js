const students = [ { name: 'Alice', score: 90 }, { name: 'Bob', score: 70 }, { name: 'Charlie', score: 85} ];

students.forEach(student => {

    //Returns an array of names of students who scored above 75.
    const array = [];
    if (student.score > 75) {append(array, student.name);}
    console.log(array);
    
 //Sorts the names in alphabetical order.
 array.sort();
 console.log(array);

});
