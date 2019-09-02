import React from "react";
import { Card } from "react-bootstrap";
import makanan1 from "./makanan1.jpg";
import makanan2 from "./makanan2.jpg";
import makanan3 from "./makanan3.jpeg";
import makanan4 from "./makanan4.jpg";

const Makanan = () => {
  return (
    <div className="makanan">
      <div className="profile">
        <div className="cardo">
          <Card className="card1" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={makanan1} />
            <Card.Body>
              <Card.Title className="title">Fried Chicken</Card.Title>
              <Card.Text className="title2">
                <i>
                  <del>
                    <p>Paket spesial = Rp 35000</p>
                  </del>
                </i>
                Paket spesial = Rp 30000
                <br />
                Paket promo = Rp 20000
                <br />
                Paket biasa = Rp 10000
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card2" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={makanan2} />
            <Card.Body>
              <Card.Title className="title">Grilled Fish</Card.Title>
              <Card.Text className="title2">
                <i>
                  <del>
                    <p>Paket spesial = Rp 30000</p>
                  </del>
                </i>
                Paket spesial = Rp 20000
                <br />
                Paket promo = Rp 15000
                <br />
                Paket biasa = Rp 10000
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="kardo">
          <Card className="card3" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={makanan4} />
            <Card.Body>
              <Card.Title className="title">Chicken Steak</Card.Title>
              <Card.Text className="title2">
                <i>
                  <del>
                    <p>Paket spesial = Rp 30000</p>
                  </del>
                </i>
                Paket spesial = Rp 25000
                <br />
                Paket promo = Rp 18000
                <br />
                Paket biasa = Rp 15000
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card4" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={makanan3} />
            <Card.Body>
              <Card.Title className="title">Fried Rice</Card.Title>
              <Card.Text className="title2">
                <i>
                  <del>
                    <p>Paket spesial = Rp 20000</p>
                  </del>
                </i>
                Paket spesial = Rp 17000
                <br />
                Paket promo = Rp 12000
                <br />
                Paket biasa = Rp 10000
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Makanan;
