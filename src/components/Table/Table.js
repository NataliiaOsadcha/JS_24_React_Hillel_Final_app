import React, { useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";
import { FaPen, FaBox } from "react-icons/fa";
import "./Table.css";

const Table = ({ products, onDelete, onEdit }) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleDeleteClick = (productId) => {
    setSelectedProductId(productId);
    setOpenDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setSelectedProductId(null);
    setOpenDeleteModal(false);
  };

  const handleConfirmDelete = () => {
    if (selectedProductId) {
      onDelete(selectedProductId);
      setSelectedProductId(null);
    }
    setOpenDeleteModal(false);
  };

  return (
    <div className="table-container">
      <table className="table-main">
        <thead>
          <tr className="table-tr-main">
            <th>ID</th>
            <th>Category</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price (₴)</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.category}</td>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>{product.price.toFixed(2)}</td>
              <td className="td-icon-cell">
                <FaPen onClick={() => onEdit(product.id)} />
                <FaBox onClick={() => handleDeleteClick(product.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <DeleteModal
        open={openDeleteModal}
        handleClose={handleCloseDeleteModal}
        handleDelete={handleConfirmDelete}
      />
    </div>
  );
};

export default Table;
