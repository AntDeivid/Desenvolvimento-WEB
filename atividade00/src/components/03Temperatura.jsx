import React from "react";

const celsiusParaFahrenheit = (c) => (9*c + 160)/5

const fahrenheitParaCelsius = (f) => (5*f - 160)/9

const kelvin = (c) => ({fahrenheit : (c - 273.15) * 1.8 + 32, celsius : c - 273.15})

const Temperatura = () =>
    <div>
        <h1>30º celsius: {celsiusParaFahrenheit(30)} ºF</h1>
        <h1>30º Fahrenheit: {fahrenheitParaCelsius(30)} ºC</h1>
        <h1>100 Kelvin: {kelvin(100).celsius} ºC e {kelvin(100).fahrenheit} ºF</h1>

    </div>

export default Temperatura