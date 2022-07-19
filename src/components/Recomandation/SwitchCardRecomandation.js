import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import React from "react";
import { Table } from "react-bootstrap";


const SwitchCardRecomandation = () => {
    return (
        <section className="col-auto">
            <div className="col-5  fixed-bottom ms-auto m-3">
    <div>
<Card className='max-card'>
    <Card.Header>
<h6 className='p-0'>Recommended</h6>
      </Card.Header>
<Card.Header className='card-header-recommended align-self-md-center'>
<Nav variant="tabs" defaultActiveKey="#link">
          <Nav.Item>
            <Nav.Link href="#first">WatchList</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link">Recommended</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body className='fs-12'>
    <Table striped>
      <thead>
        <tr>
          <th className="col-2">Pos</th>
          <th className="col-8">Movie</th>
          <th className="col-2">Score</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Indiana Jones and the Raiders Of the Lost Ark</td>
          <td>5</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Indiana Jones and the Raiders Of the Lost Ark</td>
          <td>5</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Indiana Jones and the Raiders Of the Lost Ark</td>
          <td>5</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Kong</td>
          <td>3</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Jaws</td>
          <td>3</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Jaws</td>
          <td>3</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Jaws</td>
          <td>3</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Jaws</td>
          <td>3</td>
        </tr>
        <tr>
          <td>9</td>
          <td>Jaws</td>
          <td>3</td>
        </tr>
        <tr>
          <td>10</td>
          <td>Jaws</td>
          <td>3</td>
        </tr>
      </tbody>
    </Table>
    </Card.Body>
    </Card>
    </div>
</div>
        </section>
    );
};

export default SwitchCardRecomandation;
