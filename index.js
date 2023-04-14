const express = require('express');
const port = 8080;
const path = require('path');

const app = express()


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'))

// middleware 1
// app.use(function(req, res, next) {
//     console.log('middleware 1 called');
//     next()
// })

// // middleware 2
// app.use(function(req, res, next) {
//     console.log('middleware 2 called');
//     next()
// })

var contactList = [
    {
        name : "Manish",
        phone: "8910611562"
    },
    {
        name : "Mani",
        phone: "8910611561"
    },
    {
        name : "Mayank",
        phone: "8910611563"
    },
]

// var arr1 = [1, 2 ,3 ]
// for(var i of arr1){  //i of basically prints the all value present in the array, not the index
//    console.log(i)
// }

app.get('/', function(req, res){
    return res.render('home', 
    {title: 'My Contacts List',
    contact_list : contactList
    })
   // res.send('<h1>Cool, it is running, or is it ?</h1>')
})

// function add(a, b){
//     return
// }

// function add(a,b){
//     return a+b;
// }
// setTimeout()
app.post('/create-contact', function(req, res){
    //console.log(req.body)
    // return res.render('home', 
    // {title: 'My Contacts List',
    // contact_list : contactList
    // })
   //res.send('<h1>Cool, it is running, or is it ?</h1>')
//    contactList.push({
//        name: req.body.name,
//        phone: req.body.phone
//    })
   contactList.push(req.body)
   return res.redirect('/');
})

// for deleting contact
app.get('/delete-contact/', function(req, res){
    //console.log(req.query);
    let phone = req.query.phone

    let contactindex = contactList.findIndex(contact => contact.phone == phone);

    if(contactindex != -1){
        contactList.splice(contactindex, 1);
    }

    
    return res.redirect('back');
});



app.listen(port, function(err){
    if(err){
        console.log('Error in running the server', err);
        return;
    }
    console.log('Server is running on Port', port);
})

// function f(a, b, c){
//     console.log('hi', a);
//     a=3;
//     console.log('hii', a);
//     b.push("bob");
//     c.first = false;
// }

// var x = 4;
// var y = ['manish', 'sani'];
// var z = {'first': true}

// f(x, y, z)
// console.log(x, y, z);









