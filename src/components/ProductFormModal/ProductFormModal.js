import React from "react";
import "./ProductFormModal.css";

const ProductFormModal = ({ isOpen, onClose, isEditMode }) => {
  const title = isEditMode ? "Edit product" : "Add product";

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <div className="modal-header">
          <span className="modal-title">{title}</span>
          <span className="modal-close" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="modal-body">
          <label htmlFor="category">Category</label>
          <input type="text" id="category" placeholder="Category" />

          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Name" />

          <label htmlFor="quantity">Quantity</label>
          <input type="number" id="quantity" placeholder="Quantity" />

          <label htmlFor="price">Price (₴)</label>
          <input type="number" id="price" placeholder="Price" />

          <label htmlFor="description">Description</label>
          <textarea id="description" placeholder="Description"></textarea>

          <div className="modal-buttons">
            <button className="modal-button cancel" onClick={onClose}>
              Cancel
            </button>
            <button className="modal-button submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFormModal;
