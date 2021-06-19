function main(grade){
    console.log(grader(grade));
}


function grader(grade){
    if(2<=grade && grade< 3){
        return "Fail";
    }else if(3<=grade && grade< 3.5){
        return "Poor";
    }else if(3.5<=grade && grade< 4.5){
        return "Good";
    }else if(4.5<=grade && grade< 5.5){
        return "Very Good";
    }else if(5.5<=grade && grade<=6){
        return "Excellent";
    }
}
