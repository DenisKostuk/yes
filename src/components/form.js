import React from "react";

const Form = props =>(
    <div>
        <form onSubmit={props.weatherMethod}>
            <input type="text" name="city" placeholder="Город"></input>
            <button>OpenWeatherMap</button>
        </form>
        <form onSubmit={props.weatherMethod1}>
            <input type="text" name="city" placeholder="Город"></input>
            <button>APIXU</button>
        </form>
    </div>
);

export default Form;
