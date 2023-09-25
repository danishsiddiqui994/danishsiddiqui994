
// ye for Each ka function hai


// const People = [
// {name:"akhtar", age:37 ,position:"boss"},
// {name:"abid", age:41, position:"manager"},
// {name:"kashif", age:45 ,position:"supervisor"},

//  ];

//  People.forEach(function(item){
// console.log(item.position)



//  });

//  forEach kehta hai mey return nhi karo ga na array change kro ga
// map kehta hai return do ga aur original array ka size change nhi kro ga 

// ------------------------------------------------------------------------------

// const People = [
//     {name:"akhtar", age:37 ,position:"boss"},
//     {name:"abid", age:41, position:"manager"},
//     {name:"kashif", age:45 ,position:"supervisor"},
    
//      ];

//      const newValue=People.map(function(person){

//         console.log(person)




//      });
    // ------------------------------------------------------------------------

//     const People = [
//             {name:"akhtar", age:37 ,position:"boss"},
//             {name:"abid", age:41, position:"manager"},
//             {name:"kashif", age:45 ,position:"supervisor"},
            
//              ];


// const ages= People.map(function(person){
// return person.age + 20;


// });
// console.log(ages);


const People = [
                {name:"akhtar", age:37 ,position:"boss"},
                {name:"abid", age:41, position:"manager"},
                {name:"kashif", age:45 ,position:"supervisor"},
                
                 ];
    
    
    const value= People.map(function(person){
    return person.name;
    
    
    });
    console.log(value);