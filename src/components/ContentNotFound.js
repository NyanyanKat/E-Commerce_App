import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Result } from "antd";
import "./ContentNotFound.css";

export const ContentNotFound = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className='notFound'>
      <Result
        status="404"
        title="No Page Found"
        subTitle="Sorry, the page you visited does not exist"
        extra={
          <Button type="primary" onClick={handleClick}>
            Back
          </Button>
        }
      />
    </div>
  );
};
