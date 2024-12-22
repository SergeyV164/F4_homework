import React from "react";
import { useParams } from "react-router-dom";

function Receipt(){
    const params = useParams();
    
    let receipt = ''
    const url = "http://127.0.0.1:8000/api/v1/"
    fetch(url + params.id + '/receipt').then(response => response.json()).then(result => {    
        for (let i in result['receipt']){
            receipt += '<b> Рецепт: ' + result['receipt'][i]['name'] + '</b><br><br>' + result['receipt'][i]['receipt']
        }
        const Output = document.getElementById('receipt_output');
        Output.innerHTML = receipt;
    })
    return (
        <div>
         <ul id='receipt_output' />
        </div>
    )
}


export default Receipt;