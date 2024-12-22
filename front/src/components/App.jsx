import React from "react";
import { Route, Routes, Link} from "react-router-dom";

import Category from "./Category.jsx";
import Main from "./Main.jsx";
import Header from "./Header.jsx";
import Receipt from "./Receipt.jsx";

import "../styles/App.css";

function App() {

    // const url = "http://192.168.3.74:8000/api/v1/"
    // let menu_list = '';
    // fetch(url+'cat_list').then(response => response.json()).then(result => { 
    //     for (let i in result['items']){
    //         menu_list += '<li><a href="/category/' + result['items'][i]['id'] + '">' + result['items'][i]['name'] + '</a></li>'

    //     }
        // const OutputUl = document.getElementById('output');
        // console.log(menu_list);
        // OutputUl.innerHTML = menu_list;
    // })

    return (<>
        <Header />
        <main>
            <div className='left'>
                <ul id='output'>
                <li><Link to="/category/1">Супы</Link></li>
                <li><Link to="/category/2">Салаты</Link></li>
                <li><Link to="/category/3">Холодные закуски</Link></li>
                <li><Link to="/category/4">Горячие блюда</Link></li>
                <li><Link to="/category/5">Десерты</Link></li>
                </ul>
            </div>
            <div className="right">
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/category/:id" element={<Category />} /> 
                <Route path="/receipt/:id" element={<Receipt />} /> 
            </Routes>
            </div>
        </main>
            </>
    );
}

export default App;