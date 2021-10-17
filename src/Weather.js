import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
    function handleResponse(response) {
        alert(
            'The weather in {response.data.name} is {response.data.main.temp}');
    }
    let apiURL = 'https://api.openweathermap.org/data/2.5/weather?q={props.city}&appid={2cb853fead8f2aa7c43c8a85cd731392}&units=metric';

    axios.get(apiURL).then(handleResponse);
    return (
        <Loader
        type="Puff"
        color="white"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    );
}