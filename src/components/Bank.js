import React from 'react';


const Bank = () => {
  return (
    <div>
    <h1>Bank Redux S.A.</h1>


      <h2>Dodaj klienta</h2>
      <form action="">
        <div className="form-group">
          <label for="name">Imię</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="form-group">
          <label for="surname">Nazwisko</label>
          <input type="text" className="form-control" id="surname" />
        </div>
        <button className="btn btn-primary">Dodaj</button>
      </form>
    </div>
  )
}

export default Bank;
