export const VisibilityControl = ({isChecked, setShowCompleted, cleanTask}) => {
   
    const handleDelete = () => {
        if(window.confirm('Are you sure?')){
            cleanTask()

        } 
    }
 
     return(
         <div>
       <input 
       type="checkbox" 
       checked={isChecked}
       onChange={(e) => setShowCompleted(e.target.checked)} 
       />{" "}
        <label> Show Task Done</label>
 
        <button onClick={handleDelete}>
         Clear
        </button>
     </div>
     )
 
 }