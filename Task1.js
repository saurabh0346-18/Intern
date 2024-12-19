//Task: 1. Create a higher-order function to filter and transform data using map and filter. 

// Note: A function that returns a function or takes other functions as arguments is called a higher-order function.


const students = [
    { name: "esha", marks: 45 },
    { name: "saurabh", marks: 75 },
    { name: "arpit", marks: 60 },
    { name: "saksham", marks: 30 },
  ];
  function filterAndTransform(data, filterCondition, transformFunction) {
    return data
      .filter(filterCondition) // Step 1: Filter the data
      .map(transformFunction); // Step 2: Transform the filtered data
  }
  
  //  condition (students with marks > 50)
  const filterCondition = (student) => student.marks > 50;
  
  const transformFunction = (student) => student.name.toUpperCase();
  
  const result = filterAndTransform(students, filterCondition, transformFunction);
  
  console.log(result); 
  