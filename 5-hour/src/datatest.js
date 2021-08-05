const idData = [

{id: 32432,
name: "Bob burgers"
}, 

{id: 3282474,
name: "Tina Belcher"
},

{id: 345354,
name: "Gene Belcher"
},

{id: 977373,
name: "Louise Belcher"
},

{id: 937402,
name: "Linda Belcher"
},


{id: 777736,
name: "Teddy"
},

{id: 111111,
name: "Gayle"
},

];

export default idData

// with this we will need to use the js function map to display the data in multiple components
// For example let's take an array, and map each element to a function and save it to another array

const nums = [2,3,4,6,6,1,1,3,3]; 

const newNums = nums.map(function(num){
    return num * 2 }
);

// newNums will now hold the data Array(9) [ 4, 6, 8, 12, 12, 2, 2, 6, 6 ]


console.log(newNums);