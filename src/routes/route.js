const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random" , function(req, res) {
    res.send("hi there")
})


router.get("/test-api" , function(req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5" , function(req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})

router.post("/test-post", function(req, res) {
    res.send([ 23, 45 , 6])
})


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})


////////////////////////////// Assignment /////////////////////////////////////////////////////

        // PROBLEM - 1 

// Write a POST /players api that saves a player’s details and doesn’t allow saving the data of a player with a name that already exists in the data

let players =
  [
    {
      "name": "manish",
      "dob": "1/1/1995",
      "gender": "male",
      "city": "jalandhar",
      "sports": [
        "swimming"
      ]
    },
    {
      "name": "gopal",
      "dob": "1/09/1995",
      "gender": "male",
      "city": "delhi",
      "sports": [
        "soccer"
      ],
    },
    {
      "name": "lokesh",
      "dob": "1/1/1990",
      "gender": "male",
      "city": "mumbai",
      "sports": [
        "soccer"
      ],
    },
  ]

  router.post('/players', function (req, res) {
    //LOGIC WILL COME HERE
    let newplayer = req.body

   let newPlayersName = newplayer.name
  
    for (i = 0; i < players.length; i++) {
      if (players[i].name == newPlayersName) {
        return res.send("Sorry, This name is already exist!")
      }
     }
    players.push(newplayer)
    
   res.send(players)
  
  })

//////////////////////// PROBLEM-- 2  ///////////////////////////////////////////////////////

// you will be given an array of persons { i.e an array of objects }...each person will have a {name:String,age:Number, votingStatus:true/false} .  take input in quary param as votingAge . and for all the people above that age, change votingAge as true also return an array consisting of only the person that can vote 

// write a post api to the above-
// take this as sample for array of persons:

let person=[
  {
    name:"pk",
    age:10,
    votingStatus:false
  },
  {
    name:"raju",
    age:20,
    votingStatus:false
  },
  {
    name:"sonam",
    age:70,
    votingStatus:false
  },
  {
    name:"heera",
    age:5,
    votingStatus:false
  },
  {
    name:"lalu",
    age:40,
    votingStatus:false
  }
]

router.post('/voters1',function(req,res){
 // let result0=req.query.age
 let result=[];
 for(let i=0;i,person.length;i++){
  let person=person[i];
  if(person.age>=18 && req.query.age>18){
    person.votingStatus=true
    result.push(person)
  }
 }
 if(req.query.age>=18){
  res.send(result)
 }else{
  res.send("not eligibal for voting")
 }
})



module.exports = router;