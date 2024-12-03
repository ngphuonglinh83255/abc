import React, { useState, useEffect } from "react";

function ProductForm({ product, onSave, isEditing }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Thực phẩm");

  // Cập nhật giá trị khi chỉnh sửa
  useEffect(() => {
    if (isEditing && product) {
      setName(product.name);
      setPrice(product.price);
      setCategory(product.category);
    }
  }, [isEditing, product]);

  // Xử lý sự kiện submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = { name, price, category, id: product ? product.id : Date.now() }; // Nếu là thêm hàng thì tạo id mới
    onSave(newProduct); // Gọi onSave để gửi lại dữ liệu sản phẩm
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Tên hàng hóa</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>
      <div className="form-group">
        <label>Giá hàng hóa</label>
        <input 
          type="number" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
          required 
        />
      </div>
      <div className="form-group">
        <label>Loại vật phẩm</label>
        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          required
        >
          <option value="Thực phẩm">Thực phẩm</option>
          <option value="Đồ điện tử">Đồ điện tử</option>
          <option value="Sách">Sách</option>
        </select>
      </div>
      <div className="modal-footer">
        <button type="submit" className="add-product-btn">
          {isEditing ? "Cập nhật hàng hóa" : "Xác nhận thêm hàng"}
        </button>
        <button type="button" className="close-btn" onClick={() => onSave(null)}>
          Đóng
        </button>
      </div>
    </form>
  );
}

export default ProductForm;
