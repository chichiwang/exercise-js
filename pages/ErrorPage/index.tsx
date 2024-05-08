import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <>
      <h1>An Error Occurred!</h1>
      <Link to="/">Home</Link>
    </>
  );
}
