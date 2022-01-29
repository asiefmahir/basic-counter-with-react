const PersonalInfo = (props) => {
    return (
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
    )
}

export default PersonalInfo
