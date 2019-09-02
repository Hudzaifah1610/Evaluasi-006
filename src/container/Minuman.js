import React from "react";
import { Card } from "react-bootstrap";
import minuman1 from "./minuman1.jpg";
import minuman2 from "./minuman2.jpeg";
import minuman3 from "./minuman3.jpg";
import minuman4 from "./minuman4.jpg";

const Minuman = () => {
  return (
    <div className="minuman">
      <div className="profile">
        <div className="cardo">
          <Card className="card1" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={minuman1} />
            <Card.Body>
              <Card.Title className="title">Pop ice Drink</Card.Title>
              <Card.Text className="title2">
                <i>
                  <del>
                    <p>Paket spesial = Rp 20000</p>
                  </del>
                </i>
                Paket spesial = Rp 15000
                <br />
                Paket promo = Rp 14000
                <br />
                Paket biasa = Rp 12000
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card2" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={minuman2} />
            <Card.Body>
              <Card.Title className="title">Lemon Koktail</Card.Title>
              <Card.Text className="title2">
                <i>
                  <del>
                    <p>Paket spesial = Rp 20000</p>
                  </del>
                </i>
                Paket spesial = Rp 17000
                <br />
                Paket promo = Rp 15000
                <br />
                Paket biasa = Rp 14000
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="kardo">
          <Card className="card3" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={minuman4} />
            <Card.Body>
              <Card.Title className="title">Cooffe Latte</Card.Title>
              <Card.Text className="title2">
                <i>
                  <del>
                    <p>Paket spesial = Rp 15000</p>
                  </del>
                </i>
                Paket spesial = Rp 12000
                <br />
                Paket promo = Rp 10000
                <br />
                Paket biasa = Rp 9000
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card4" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={minuman3} />
            <Card.Body>
              <Card.Title className="title">Ice cream & Oreo juice</Card.Title>
              <Card.Text className="title2">
                <i>
                  <del>
                    <p>Paket spesial = Rp 22000</p>
                  </del>
                </i>
                Paket spesial = Rp 20000
                <br />
                Paket promo = Rp 18000
                <br />
                Paket biasa = Rp 15000
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Minuman;
