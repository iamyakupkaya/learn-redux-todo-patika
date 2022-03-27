import React from 'react';
import Content from './Content';
import Footer from './Footer';
import Form from "./Form";

const Header = () => {
  return (
    <header className="header">
		<h1>todos</h1>
        <Form/>
        <Content/>
        <Footer/>
	</header>
  );
}

export default Header
