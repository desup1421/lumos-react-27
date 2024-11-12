import React from "react";

const Profile = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">My-Profile</h5>
          <div className="row">
            <div className="col col-3">
              <img className="img-fluid object-fit-cover border rounded" src="https://picsum.photos/200/300" alt="" />
            </div>
            <div className="col col-9 bg primary">
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><span className="fw-bold">Name: </span>Dede Supriatna </li>
                <li className="list-group-item"><span className="fw-bold">Usia: </span>120 Tahun</li>
                <li className="list-group-item"><span className="fw-bold">No: </span> +99 876 567 233</li>
                <li className="list-group-item"><span className="fw-bold">Alamat: </span>Cianjur, Jawa Barat, Indonesia</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
