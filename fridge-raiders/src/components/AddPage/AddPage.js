import Button from '../Button'
import Checkbox from '../Checkbox'
import Dropdown from '../Dropdown'
const AddPage = () => {
    return (
        <section>
        <div className="center">
         <Button /> 
         <Dropdown /> 
        </div>
         <Checkbox name="Banana"/> 
         <Checkbox name="Broccoli" /> 
         <Checkbox name="Olive Oil" /> 
         <Checkbox name="Zucchini" /> 
         <Checkbox name="Bread" /> 
        </section>
    )
}

export default AddPage
