import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function App() {
    const [newItem, setNewItem] = useState(""); // Quản lý input state
    const [items, setItems] = useState([]); // Quản lý danh sách các mục
    const [completedItems, setCompletedItems] = useState([]); // Quản lý danh sách các mục đã hoàn thành

    useEffect(() => {
        const savedItems = localStorage.getItem('items');
        const savedCompletedItems = localStorage.getItem('completedItems');
        if (savedItems) {
            setItems(JSON.parse(savedItems)); // Convert string to array
        }
        if (savedCompletedItems) {
            setCompletedItems(JSON.parse(savedCompletedItems));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
        localStorage.setItem('completedItems', JSON.stringify(completedItems));
    }, [items, completedItems]);

    const handleAddItem = () => {
        if (newItem !== "") {
            setItems([...items, newItem]); // Thêm mục mới vào danh sách
            setNewItem(""); // Xóa trắng ô input
        }
    };

    const handleItemClick = (index) => {
        if (completedItems.includes(index)) {
            setCompletedItems(completedItems.filter((itemIndex) => itemIndex !== index)); // Bỏ hoàn thành
        } else {
            setCompletedItems([...completedItems, index]); // Đánh dấu là đã hoàn thành
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">To do list</h1>
                <div className="App-input">
                    <input
                        type="text"
                        className="inputItem"
                        placeholder="New Item"
                        value={newItem}
                        onChange={(e) => setNewItem(e.target.value)} // Cập nhật giá trị input
                    />
                    <label className="btn">
                        <button className="addBtn" onClick={handleAddItem}>Add</button>
                    </label>
                </div>
                <ul className="itemList">
                    {items.map((item, index) => (
                        <li
                            key={index}
                            onClick={() => handleItemClick(index)}
                            style={{
                                color: completedItems.includes(index) ? 'green' : 'black', // Đổi màu khi hoàn thành
                                cursor: 'pointer' 
                            }}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </header>
        </div>
    );
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));
export default App;