"use strict";


// PART 1: SHOW A FORTUNE
    // TODO: get the fortune and show it in the #fortune-text div

function getFortune(result) {
    $('#fortune-text').html(result);
}

function showFortune(evt) {
    $.get('/fortune', getFortune);
    evt.preventDefault();
}

$('#get-fortune-button').on('click', showFortune);


// PART 2: SHOW WEATHER
    // TODO: request weather with that URL and show the forecast in #weather-info
function getWeather(result) {
    $('#weather-info').html(result['forecast']);
}

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get(url, formData, getWeather);
}

$("#weather-form").on('submit', showWeather);


// PART 3: ORDER MELONS
    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
function showOrderResults(result) {
    if (result['code'] === 'ERROR') {
        $('#order-status').addClass('order-error');
        $('#order-status').html(result['msg']);
    } else {
        $('#order-status').removeClass('order-error');
        $('#order-status').html(result['msg']);
    }
}

function orderMelons(evt) {
    evt.preventDefault();

    let formInputs = $('#order-form').serialize();

    $.post('/order-melons.json', formInputs, showOrderResults);
}

$('#order-form').on('submit', orderMelons);


