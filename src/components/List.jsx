import {useState} from "react";
import Form from "./Form";

const List = () => {
    const [items, setItems] = useState([]);

    function removeItem(indexToDelete) {
        const newItems = items.filter((item, index) => index !== indexToDelete);
        setItems(newItems);
    }

    return (
        <main>
            <h2>To buy:</h2>
            <ul className="unlist">
                {items.map((item, index) => {
                    return (
                        <li className="list" key={index}>
                            <strong>{item}</strong>
                            <input size="9" placeholder="amount ⚖️"/>
                            <select>
                                <option>Unit</option>
                                <option value="kg">kg</option>
                                <option value="g">g</option>
                                <option value="l">l</option>
                                <option value="ml">ml</option>
                                <option value="quantity">quantity</option>
                            </select>
                            <button className="remove-btn" type="button" onClick={() => removeItem(index)}>
                                ❌
                            </button>
                        </li>
                    );
                })}
            </ul>
            <Form setItems={setItems}/>
        </main>
    );
};

export default List;
