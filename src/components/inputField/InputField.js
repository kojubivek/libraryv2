import React from "react";
import Form from "react-bootstrap/Form";
export const InputField = ({ label, ...rest }) => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Text></Form.Text>
        <Form.Label>{label}</Form.Label>
        <Form.Control {...rest} />
      </Form.Group>
    </Form>
  );
};
