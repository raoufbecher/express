const express = require('express')
const app =express()
const port = 5000;
const d = new Date( Date.now());

function condition(req,res,next) {
    const day =d.getDay();
    const hour =d.getHours();
    if ((day >=2 && day<=6 )  && (hour >=9 && hour<=10)  === false ) {
    console.log ("close");
    
    res.sendFile(__dirname + '/public/close/close.html');  
}  

else {
next();
}
}  
app.use(condition);
app.use(express.static('public'));
app.listen(port,(err)=> {
    err? console.log(err) : console.log ('the server is running ')
})