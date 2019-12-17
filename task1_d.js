const fs=require ('fs')
console.log('Begining of the file')
fs.readFile('file1.txt','utf-8',function(error,input)
{
    if(error){
        console.log("Some error occured during the file execution" )
        return console.log(error)
    }
    else{
        console.log("Successfully executed")
    }
    console.log(input)

})
console.log("Here the execution stops")





