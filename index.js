// Write your solution in this file!
let employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
}
function updateEmployeeWithKeyAndValue(employee,key,value){
    return {
        ...employee,
        [key] : value
    }
};
console.log(updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway"));
console.log(employee);

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key] = value
    return employee
};
console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress, 12 Broadway"))
console.log(employee);

function deleteFromEmployeeByKey(employee,key){
    const newemployee = {
        ...employee
    }
    delete newemployee[key]

    return newemployee

};
console.log(deleteFromEmployeeByKey(employee, "streetAddress"));
console.log(employee);

function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key]
    return employee
};
console.log(deleteFromEmployeeByKey(employee, "streetAddress"));
console.log(employee);