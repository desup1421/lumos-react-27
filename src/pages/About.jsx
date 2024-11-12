import React from "react";

const About = () => {
  return (
    <div className="container-sm text-center">
      <header>
        <h1 className="text-primary">About us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nemo
          provident deserunt atque eum libero beatae et adipisci. Accusantium
          adipisci illum officiis sunt ipsum possimus molestias fugit.
          Voluptate, sequi quod. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolorem ipsa omnis delectus magnam esse repellendus
          hic possimus saepe eveniet et totam sequi, officiis beatae. Eveniet
          fugit corrupti similique sunt aut!
        </p>
      </header>
      <div className="row">
        <div className="col">
          <div className="card">
            <img
              src="https://picsum.photos/100/100"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">Cost Effective</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="https://picsum.photos/100/100"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">Cultural Convergence</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="https://picsum.photos/100/100"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">Mature Team</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
