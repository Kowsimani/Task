import React from "react";
 
const ObjectExample=()=>{
    const student =[{
        id:1,
        name:"selva",
        age:20,
        department :"mec",
        marks:90
    },{
        id:12,
        name:"kowsi",
        age:24,
        department :"mec",
        marks:90
    }]
    //const data=student.map((i)=>{
//return(<>
//console.log(i.name)
    /*console.log(i.name)*/ 

    //</>
    //)})

    //console.log(data);
    const numbers=[1,2,3,4,5,6];
    console.log("pop",numbers.pop(),numbers)
    console.log("push",numbers.push(7),numbers)
    console.log("shift ",numbers.shift(),numbers)
    const filtered=numbers.filter( 
        function (x) {
            return x>2
        }
    )
        console.log(filtered)
        const names=["kowsi","selva","nila","niha"]
        const result=names.slice(1,3)
        console.log("result",result,names)
        const spliceresult=names.splice(1,2,"added")//start from 1 till thecount 2 add the value Syntax:splice(index,count,add)
        console.log(">>>>>",spliceresult)
        console.log(names)
        //const datamark=student.filter(
        //function(i){
        //return i.marks>90
        
        //}
    //)
   
    const datamark=student.filter((i)=>i.marks>95)
     console.log(datamark)

    
    return(
        <>
                <>
                <table>
                    <thead>
                        <th>name </th>
                        <th>age</th>
                        <th>marks</th>
                    </thead>
                    <tbody>
                        <tr>
                           <td>kowsi</td>
                           <td>20</td>
                           <td>97</td>
                        </tr>
                        <tr>
                            <td>selva</td>
                            <td>24</td>
                            <td>99</td>
                        </tr>
                    </tbody>
                    </table> 
                    {
                        datamark.map((i)=>{
                            return(
                                <>
                                {i.name}
                                </>

                            )
                        })
                    }
                </>
        </>
    )
}

export default ObjectExample 