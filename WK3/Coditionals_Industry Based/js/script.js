//conditional - else if

var jobReq = 1000;

var stateReq = 999;

//if employee has 1000 working hours he can apply for operator certification with job
//if employee has under 1000 working hours he has to apply through the state
if(stateReq < jobReq){
console.log("Apply With Job");
}else{
console.log("Apply With State");
}

