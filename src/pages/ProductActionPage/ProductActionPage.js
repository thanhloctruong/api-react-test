import React from 'react';
function HomePage() {
  return (
    
    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <form>
        <div className="form-group">
          <label>Ten sp</label>
          <input type='text' className="form-control"/>
        </div>
        <div className="form-group">
          <label>Gia nsp</label>
          <input type='number' className="form-control"/>
        </div>
        <div className="form-group">
          <label>Trang thai</label>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox"/>
            con hang
          </label>
        </div>
        <button type="submit" class="bts-primary">Luu lai</button>
      </form>
    </div> 
    
  );
}
export default HomePage;


