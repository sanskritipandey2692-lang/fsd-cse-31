let studentarr=[{
    name:"Amit Kumar",
    CGPA:9.8,
    city:"Mumbai"
},
{name:"Amit singh",
    CGPA:7.8,
    city:"Mumbai"

},
{
    name:"Amit pandey",
    CGPA:8.8,
    city:"Mumbai"
}


];
console.table(studentarr);
for(let i=0; i<studentarr.length;i++)
    if(studentarr[i].CGPA>=8){
        console.log(studentarr[i]);
    }