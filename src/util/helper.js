function printDate(){
    let now=new Date()
    console.log("the current date is :",now.getDate())
    printMonth()
}
  
   // to print current month
function printMonth(){
    let now=new Date()
    console.log("the current month is :" ,now.getMonth()+1)

    getBatchInfo()
}
 function getBatchInfo(){
    console.log("Batch plutonium, 3rd week, 17th day, the topic being taught today")
 }

module.exports.printDate=printDate