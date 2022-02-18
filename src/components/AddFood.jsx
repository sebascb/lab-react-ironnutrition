import React from "react";

function AddFood (props) {
    let {handleSubmit} = props;
    return (
        <div>
            <h1>Add new food</h1>
            <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input name="name" type="text" placeholder="name" />
            </div>

            <div>
                <label>Calories</label>
                <input name="calories" type="text" placeholder="calories" />
            </div>

            <div>
                <label>Image</label>
                <input name="image" type="text" placeholder="image" />
            </div>

            <div>
                <button>Submit</button>
            </div>

            </form>
        </div>
    )

}

export default AddFood;