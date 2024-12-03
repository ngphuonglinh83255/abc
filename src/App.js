import React, { useState } from "react";
import Header from "./components/Header";
import ProductForm from "./components/ProductForm";
import ProductTable from "./components/ProductTable";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [isEditingTotal, setIsEditingTotal] = useState(false); // Trạng thái cho chỉnh sửa tổng
  const [newTotal, setNewTotal] = useState(products.length); // Trạng thái lưu tổng sản phẩm

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleAddProduct = () => {
    setIsModalOpen(true);
    setIsEditing(false);
    setEditingProduct(null);
  };

  const handleEditProduct = (product) => {
    setIsModalOpen(true);
    setIsEditing(true);
    setEditingProduct(product);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingProduct(null);
    setIsEditingTotal(false); // Đóng modal chỉnh sửa tổng khi đóng modal
  };

  const handleSaveProduct = (product) => {
    if (!product) {
      handleCloseModal();
      return;
    }
    if (isEditing) {
      setProducts(products.map(p => p.id === product.id ? product : p));
    } else {
      setProducts([...products, { ...product, id: Date.now() }]);
    }
    handleCloseModal();
  };

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  const handleDeleteAll = () => {
    setProducts([]);
  };

  const handleEditTotal = () => {
    setIsEditingTotal(true); // Mở modal chỉnh sửa tổng
  };

  const handleSaveTotal = () => {
    // Lưu lại tổng số sản phẩm mới
    const updatedTotal = newTotal;
    setNewTotal(updatedTotal);
    setIsEditingTotal(false); // Đóng modal sau khi lưu
  };

  const handleTotalChange = (e) => {
    setNewTotal(e.target.value);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <h2>Hướng dẫn</h2>
        <a href="#">Quản lý hàng hóa</a>
      </div>
      <div className="content">
        <Header />
        <div className="add-product-container">
          <button className="add-product-btn" onClick={handleAddProduct}>
            Thêm hàng hóa
          </button>
        </div>
        <input
          type="text"
          placeholder="Tìm kiếm..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <ProductTable 
          products={products} 
          onEdit={handleEditProduct} 
          onDelete={handleDeleteProduct} 
          onDeleteAll={handleDeleteAll}
          onEditTotal={handleEditTotal} // Thêm sự kiện chỉnh sửa tổng
        />
      </div>

      {/* Modal for Add/Edit Product */}
      {isModalOpen && !isEditingTotal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={handleCloseModal}>&times;</span>
            <ProductForm 
              product={editingProduct} 
              onSave={handleSaveProduct} 
              isEditing={isEditing}
            />
          </div>
        </div>
      )}

      {/* Modal for Edit Total Products */}
      {isEditingTotal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={handleCloseModal}>&times;</span>
            <h3></h3>
            <div className="form-group">
              <label>Tổng số sản phẩm</label>
              <input
                type="number"
                value={newTotal}
                onChange={handleTotalChange}
                min="0"
              />
            </div>
            <div className="modal-footer">
              <button className="add-product-btn" onClick={handleSaveTotal}>
                Lưu
              </button>
              <button className="close-btn" onClick={handleCloseModal}>
                Hủy
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
