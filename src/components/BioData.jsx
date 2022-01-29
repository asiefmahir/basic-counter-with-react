// let props = {
//   name: "name",
//   email: "asesd@gjbjaksd.cvom",
//   skils: ["js", "php"]
// }


// {
//   name: 
// }

import Interests from './Interests'
import PersonalInfo from './PersonalInfo'
import Skills from './Skills'


const BioData = (props) => {
  console.log(props)
    return (
        <div className="bio-data" >
        <h2>
          CV of {props.name}
        </h2>
        <PersonalInfo 
          mobile = "5345435453435"
          email = "asiefmahir1@gmail.com"
          linkedIn = "linkedIn/asiefmahir"
          github = "github/asiefmahir"
        />
        <hr />

        <Skills 
          skills = {["js", "react"]}
        
        />
        <Interests 
          interests = {["Ds Algo", "System Design"]}
        />
        <p>
          {/* {props.demo.title} */}
        </p>
      </div>
    )
}

// function add (a, b) {
//   return a + b
// }

// add(10, 20)
// add(100, 200)



export default BioData