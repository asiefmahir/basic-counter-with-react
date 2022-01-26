// let props = {
//   name: "name",
//   email: "asesd@gjbjaksd.cvom",
//   skils: ["js", "php"]
// }


// {
//   name: 
// }
const BioData = (props) => {
  console.log(props)
    return (
        <div className="bio-data" >
        <h2>
          CV of {props.name}
        </h2>
        <div className="personal-info">
          <h2>
            Personal Info:
          </h2>
          <p>
            Mobile: {props.mobile}
          </p>
          <p>
            email: {props.email}
          </p>
          <p>
            LinkedIn: {props.linkedIn}
          </p>
          <p>
            Github: {props.github}
          </p>
        </div>
        <hr />

        <div className="Skills" >
          <p>
            My skills:
          </p>
          <ul>
            {/* <li>JS</li>
            <li>React</li>
            <li>Node</li>
            <li>WP</li>
            <li>PHP</li> */}
            {props.skills.map(skill => (
              <li>
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className = "interests" >
          <h2>My Interests:</h2>
          <ul>
            {/* <li>DS ALGO</li>
            <li>GoLang</li>
            <li>Java Springboot</li> */}
            {props.interests.map(interest => (
              <li>
                {interest}
              </li>
            ))}
          </ul>
        </div>
        <p>
          {props.demo.title}
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