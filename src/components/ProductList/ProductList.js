import React from "react";
import ProductItem from "./../ProductItem/ProductItem";
function ProductList(props) {
  return (
    <div className="panel panel-primary">
      <div className="panel-heading">
        <h3 className="panel-title">Danh sach san pham</h3>
      </div>
      <div className="panel-body">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>STT</th>
              <th>Ma</th>
              <th>Ten</th>
              <th>Gia</th>
              <th>Trang thai</th>
              <th>Hanh Dong</th>
            </tr>
          </thead>
          <tbody>{props.chilren}</tbody>
        </table>
      </div>
    </div>
  );
}
export default ProductList;
