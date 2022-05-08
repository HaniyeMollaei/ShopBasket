import React, { Component } from "react";
import productList from '../data/products.json';
import ProductGridItem from '../components/productGridItem';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

class ProductsGridView extends Component {


  render() {

    return (<Row xs={1} md={3} className="g-4">
        {productList.map(i => (
          <Col> 
            <ProductGridItem key={i.id} product={i} addProduct = {() => {this.props.addProduct(i)}}/>
          </Col>
        ))}
      </Row>);
    // return (
    //   <Row xs={1} md={3} className="g-4">
    //     {productList.map(i => (
    //       <Col  key={i.id}>
    //         <Card>
    //           <Card.Img variant="top" src={i.imageUrl}/>
    //           <Card.Body>
    //             <Card.Title>{i.title}</Card.Title>
    //             <Card.Text>{i.description}</Card.Text>
    //           </Card.Body>
    //         </Card>
    //       </Col>
    //     ))}
    //   </Row>

    // );
  }
}

export default ProductsGridView