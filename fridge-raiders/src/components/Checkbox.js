const Checkbox = (props) => {
    return (
        <div className="checkbox">
            <input type="checkbox" id="banana" name="banana"/>
            <label htmlFor="scales">{props.name}</label>
        </div>
    )
}

export default Checkbox
