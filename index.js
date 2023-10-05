// Write your solution in this file!
const employee = {
    name:"",
    streetAddress:""
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Create a new object with the spread operator
    const updatedEmployee = { ...employee };
  
    // Update the value for the specified key
    updatedEmployee[key] = value;
  
    // Return the updated object
    return updatedEmployee;
  }
  
 //destructively update employees
 function  destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value
    return employee
 }

 //deleting non destructively
 function deleteFromEmployeeByKey(employee, key){
    const deleteEmployee1 ={...employee}
    //deleting the new object
    delete deleteEmployee1[key]
    return deleteEmployee1

 }

 //destructively deleting an object
 function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return  employee
 }