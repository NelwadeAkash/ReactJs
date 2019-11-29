import React from "react"


//function Greet()
//{
  //   return <h2>Hello Akash</h2>
//}

// export const Greet= ({name,heroName}) => {

// return(
   
//    <div> 
//        <h1>Hello {name}  A.K.A  {heroName} </h1>
    
//    </div>
// )
// }
export const Greet= props => {
    const { name,heroName}=props

    return(
       
       <div> 
           <h1>Hello {name}  A.K.A  {heroName} </h1>
        
       </div>
    )
    }

export default Greet