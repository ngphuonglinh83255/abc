import React from 'react';

const ProductTable = ({ products, onEdit, onDelete, onEditTotal }) => {
  const totalProducts = products.length;

  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th>Tên sản phẩm</th>
          <th>Giá</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 ? (
          products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
              <button className="edit-btn" onClick={() => onEdit(product)}>Chỉnh sửa</button>
              <button className="delete-btn" onClick={() => onDelete(product.id)}>Xóa</button>

              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="3" className="text-center">
              Chưa có sản phẩm nào
            </td>
          </tr>
        )}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="1" className="text-right">
            Tổng số sản phẩm:
          </td>
          <td colSpan="1" className="text-left">{totalProducts}</td>
          <td className="text-left">
          <button className="btn btn-info btn-sm edit-btn mr-2"
            onClick={onEditTotal}  // Sự kiện chỉnh sửa tổng
            >
            Chỉnh sửa
            </button>
            <button className="btn btn-danger btn-sm delete-btn"
            onClick={() => alert('Xóa tất cả sản phẩm')}
            >
            Xóa
            </button>

          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ProductTable;
