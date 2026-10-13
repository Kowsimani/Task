import React from 'react'
function Spread(){
    const cars={
        names:"BMW",
        price:"100000000",
        city:"",
    }
    const(names,price,city,...remains)=cars
    const updatedCars={
        ...cars,
        model:"2027"

    }
}
const student=[{
    id:1,
    name:"kowsi",
    dept:"CSE",
    marks:97

},
{
    id:2,
    name:"selva",
    dept:"MBA",
    marks:98

},
{
    id:3,
    name:"karthika",
    dept:"CSE",
    marks:96

},
{
    id:4,
    name:"dhivya",
    dept:"CSE",
    marks:94

},
{
    id:5,
    name:"koshikaa",
    dept:"IT",
    marks:99

},
{
    id:6,
    name:"monika",
    dept:"It",
    marks:92

},
{
    id:7,
    name:"nivedha",
    dept:"CSBS",
    marks:90

},
{
    id:8,
    name:"mathi",
    dept:"CSBS",
    marks:78

},
{
    id:9,
    name:"prithika",
    dept:"CSBS",
    marks:88

},
{
    id:10,
    name:"nisha",
    dept:"AIDS",
    marks:87

}]
console.log(student);

function Spread() {
   


        
  return (
    <div>Student</div>
  )
}

export default Spread