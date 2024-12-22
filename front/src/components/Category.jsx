import React from "react";
import { useParams } from "react-router-dom";

function Category(){
    const params = useParams();

    let dish_list = ''
    const url = "http://127.0.0.1:8000/api/v1/"
    fetch(url + params.id + '/dish_list').then(response => response.json()).then(result => {    
        for (let i in result['dish']){
            dish_list += '<li><a href="/receipt/' + result['dish'][i]['id'] + '">' + result['dish'][i]['name'] + '</a></li>'
        }
        const OutputUl = document.getElementById('dish_output');

        OutputUl.innerHTML = dish_list;
    })

    return (
        <div>
         <ul id='dish_output' />
        </div>
    )
}


export default Category;