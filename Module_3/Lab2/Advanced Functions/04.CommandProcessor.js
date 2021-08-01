function  main(){
    //returning an object with the commands as mthods
    let string="";
    return {
        append:(str)=>{
            string+= str;
        },
        removeStart:(num)=>{
            //substr(strtIndex,Length)
            //substring(strtIndex,endIndex)
            //removeStart(3); "hello"
            //cut out the end
            //then overwite the string
            string = string.substring(num);
        },
        removeEnd:(num)=>{
            // cut out the beginning
            //then overwite the string
            //.removeEnd(4); "hello"
            string = string.substring(0,string.length-num);
        },
        print:()=>{
            console.log(string);
        }
    };
}

// function  main(){
//     //returning an object with the commands as mthods
//     let string="";
//     return {
//         append:(str)=>{
//             string+= str;
//         },
//         removeStart:(num)=>{
//             //substr(strtIndex,Length)
//             //substring(strtIndex,endIndex)
//             //removeStart(3); "hello"
//             //cut out the end
//             //then overwite the string
//             string = string.substr(num,string.length);
//         },
//         removeEnd:(num)=>{
//             // cut out the beginning
//             //then overwite the string
//             //.removeEnd(4); "hello"
//             string = string.substr(0,string.length-num);
//         },
//         print:()=>{
//             console.log(string);
//         }
//     };
// }


let firstZeroTest = main();

firstZeroTest.append('hello');
firstZeroTest.append('again');//helloagain
firstZeroTest.removeStart(3);//loagain
firstZeroTest.removeEnd(4);//loa
firstZeroTest.print();

let secondZeroTest = main();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
