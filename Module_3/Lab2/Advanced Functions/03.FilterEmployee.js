function main(employeeInfo,filterCriteria){
    let employeeArray = JSON.parse(employeeInfo);
    //console.log(employeeArray);
    [filterKey,filterValue] = filterCriteria.split("-");
    let filteredEmployees = employeeArray.filter(employeeObj=>{
        return employeeObj[filterKey] == filterValue ||  filterKey =="all" ;           
    });

    for(let index in filteredEmployees){
        let currEmployee = filteredEmployees[index];
        console.log(`${index}. ${currEmployee.first_name} ${currEmployee.last_name} - ${currEmployee.email}`);
    }
}

// main(`[{
//     "id": "1",
//     "first_name": "Ardine",
//     "last_name": "Bassam",
//     "email": "abassam0@cnn.com",
//     "gender": "Female"
//   }, {
//     "id": "2",
//     "first_name": "Kizzee",
//     "last_name": "Jost",
//     "email": "kjost1@forbes.com",
//     "gender": "Female"
//   },  
// {
//     "id": "3",
//     "first_name": "Evanne",
//     "last_name": "Maldin",
//     "email": "emaldin2@hostgator.com",
//     "gender": "Male"
//   }]`, 'gender-Female');

  main(
    `[{
        "id": "1",
        "first_name": "Kaylee",
        "last_name": "Johnson",
        "email": "k0@cnn.com",
        "gender": "Female"
      }, {
        "id": "2",
        "first_name": "Kizzee",
        "last_name": "Johnson",
        "email": "kjost1@forbes.com",
        "gender": "Female"
      }, {
        "id": "3",
        "first_name": "Evanne",
        "last_name": "Maldin",
        "email": "emaldin2@hostgator.com",
        "gender": "Male"
      }, {
        "id": "4",
        "first_name": "Evanne",
        "last_name": "Johnson",
        "email": "ev2@hostgator.com",
        "gender": "Male"
      }]`,
     'last_name-Johnson');

    //  function main( employeeInfo, search ){
    //     let [ searchProp, searchValue] = search.split("-");
    //     if( search == "all"){
    //       searchProp = "all";
    //       searchValue = "all";
    //     }
    //     let employees = JSON.parse(employeeInfo); // array
    //     let output = [];
    //     for( const employee of employees ){
    //           if (searchValue == "all") {
    //               output.push(`${employee.first_name} ${employee.last_name} - ${employee.email}`);
    //         //continue;
    //           }
    //           // console.log( employee.hasOwnProperty(searchProp) );
    //           if (employee[searchProp] == searchValue) {
    //           // if (employee.searchProp == searchValue) {
    //               output.push(`${employee.first_name} ${employee.last_name} - ${employee.email}`);
    //           }
    //       }
    //     // console.log( output );
    //     for( let idx in output ){
    //       console.log( idx + ". " + output[idx]);
    //     }
    //   }
      