const Interests = (props) => {
    return (
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
    )
}

export default Interests