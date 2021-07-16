import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo-on-white-2.svg";
import styles from "./NavBarStyles";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

function NavSection() {
  const classes = styles();
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Navbar>
      <NavItem content={<img src={logo} alt="commish logo" />} />
      <div className={classes.desktop__links}>
        <div className={classes.nav__links}>
          <NavItem content={<Link to="/trade">Trade</Link>} />
          <NavItem content={<Link to="/news">News</Link>} />
          <NavItem content={<Link to="/learn">Learn</Link>} />
        </div>
        <NavItem
          content={
            <Link to="#" className={classes.signIn}>
              Sign In
            </Link>
          }
        />
      </div>

      <div onClick={handleClick} className={classes.menu__button}>
        <NavItem content={!open ? <MenuIcon /> : <CloseIcon />}>
          <DropDownMenu />
        </NavItem>
      </div>
    </Navbar>
  );
}

function Navbar(props) {
  const classes = styles();
  return (
    <nav className={classes.Navbar}>
      <div className={classes.wrapper}>
        <ul className={classes.Navbar__nav}>{props.children}</ul>
      </div>
    </nav>
  );
}

function NavItem(props) {
  const classes = styles();
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className={classes.NavItem} onClick={handleClick}>
      {props.content}
      {open && props.children}
    </div>
  );
}

function DropDownMenu(props) {
  const classes = styles();
  return (
    <div className={classes.DropDownMenu}>
      <DropDownItem link="/trade">Trade</DropDownItem>
      <DropDownItem link="/news">News</DropDownItem>
      <DropDownItem link="/learn">Learn</DropDownItem>
      <DropDownItem link="#">Sign In</DropDownItem>
    </div>
  );
}

function DropDownItem(props) {
  const classes = styles();
  return (
    <>
      <Link to={props.link} className={classes.DropDownItem}>
        {props.children}
      </Link>
    </>
  );
}

export default NavSection;
