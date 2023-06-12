import React, { useEffect } from "react";
import {
  Card,
  CardSubtitle,
  CardLink,
  CardText,
  List,
  ListGroup,
  ListGroupItemHeading,
  ListGroupItemText,
} from "reactstrap";

const Contact = () => {

    useEffect(() => {
        document.title = "Contact Details || This is Course App CRUD"
      }, []);
  return (
    <Card style={{"background-color":"black"}}>
      <CardSubtitle className="mb-2 text-muted" tag="h6">
        <h6 className="mt-3 mx-3" style={{"color":"white"}}>Contact Details</h6>
      </CardSubtitle>

      <List >
        <ListGroup>
          <div>
          <ListGroupItemHeading>
            <CardText style={{"color":"white"}}>Email Id- shubhamish1996@gmail.com</CardText>
          </ListGroupItemHeading>
          <ListGroupItemText>
            <CardLink href="https://www.gmail.com">E-Mail</CardLink>
          </ListGroupItemText>
          </div>
        </ListGroup>

        <ListGroup>
          <ListGroupItemHeading>
            <CardText style={{"color":"white"}}>Github Link- github.com/thisway2shubham</CardText>
          </ListGroupItemHeading>
          <ListGroupItemText>
            <CardLink href="https://github.com/thisway2shubham" >
              GitHub Link
            </CardLink>
          </ListGroupItemText>
        </ListGroup>
      </List>
    </Card>
  );
};

export default Contact;