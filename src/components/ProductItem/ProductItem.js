import React from "react";
function ProductItem() {
  var { product, index } = this.props;
  var statusName = product.status ? "con Hang" : " Het hang";
  var statusClass = product.status ? "warning" : "default";
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>
        <span className={"label label-${statusClass}"}>{statusName}</span>
      </td>
      <td>
        <button type="button" className="btn btn-success mr-10">
          Sua
        </button>
        <button type="button" className="btn btn-danger">
          xoa
        </button>
      </td>
    </tr>
  );
}
export default ProductItem;
