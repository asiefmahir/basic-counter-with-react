const Skills = (props) => {
    return (
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
    )
}

export default Skills