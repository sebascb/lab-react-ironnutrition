import React from "react";

function TodayFood(props) {
    let {items} = props;
    const total = items.reduce((sum, element) => {
        return sum + (element.quantity * element.calories)
    }, 0)

    return (
        <>
        <div>
            <h1>Today's foods</h1>
        </div>

        <div>
            {items.map((element, index) => {
                return (
                    <div key={index}>
                        <p>Name: {element.quantity} x {element.name} = {element.quantity * element.calories} calories</p>
                    </div>
                )
            })}
            <h2>Total: {total} cal</h2>
        </div>
        </>
    )
}

export default TodayFood;