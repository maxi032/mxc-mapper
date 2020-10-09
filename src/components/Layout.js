import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import 'assets/stylesheets/application.scss';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import mxc_logo from 'assets/images/MXC_Logo_Navy@2x.png';

import SideNav, { NavItem, NavText } from '@trendmicro/react-sidenav';
//import DropdownC from "./DropdownC";
//import RSwitch from "./RSwitch";


const localStyled = {
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
  },
  total: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'left',
    fontSize: 60,
    font: 'normal normal medium 60px/71px Roboto',
    letterSpacing: 0,
    color: '#00FFD9',
    marginTop: 38,
    opacity: 1,
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'left',
    fontSize: 20,
    font: 'normal normal medium 60px/71px Roboto',
    letterSpacing: 0,
    color: 'white',
    marginTop: 10,
    opacity: 1,
  }
}

const Layout = ({ children, pageName, total }) => {
  let className = '';

  if (pageName) {
    className = `${className} page-${pageName}`;
  }

  const [expanded, setExpanded] = useState(true);
  //const online = 9567;
  //const offline = 57;

  /* const [state, setState] = React.useState({
    checked: props.on
  });

  React.useEffect(() => {
    setState({checked: props.on})
  }, [props.on])

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
    
    props.onSwitchChange(props.dvId, event.target.checked, event);
  }; */

  return (
    <>
      <Helmet bodyAttributes={{ class: className }}>
        <title>Gatsby Site</title>
      </Helmet>
      <div className="wrapper">


        <main>
        <div style={{ position: 'absolute', zIndex: 1000, top: 7, left: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', padding: '0px 15px 10px 15px' }}>
                  <img src={mxc_logo} alt={'logo'}></img>
              </div>
          </div>
          {/* <div style={{ backgroundColor:'rgba(255, 255, 255, .6)',  borderRadius: 5, position: 'absolute', zIndex: 1000, top: 16, right: `${ 20 + (expanded ? 306 : 64 )}px` }}>
              <div style={{ display: 'flex', alignItems: 'center', padding: '15px 15px 10px 15px' }}>
                  <RSwitch />
                  <span style={{ padding: '0px 16px'}}>Show Footprint</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', padding: '15px 15px 10px 15px' }}>
                  <RSwitch />
                  <span style={{ padding: '0px 16px'}}>Coverage</span>
              </div>
          </div> */} {/* non-function */}
          
          {children}
        </main>
        {/* <Footer /> */}

        <SideNav
          expanded={expanded}
          onToggle={(expanded) => {
            setExpanded(expanded);
          }}
          /* onSelect={(selected) => {
            
          }} */
        >
          <SideNav.Toggle />
          {expanded && <SideNav.Nav >
            <NavItem eventKey="title">
              <NavText style={localStyled.title}>
                Welcome to MXC Mapper
              </NavText>
            </NavItem>
            {/* <NavItem eventKey="home" style={localStyled.flexCenter} >
              <DropdownC />
            </NavItem> */}{/* non-function */}
            
            <NavItem eventKey="charts">
              <NavText style={localStyled.total} >
                {total}
              </NavText>
            </NavItem>
            <NavItem eventKey="gate">
              <NavText style={localStyled.flexCenter} >
                Gateways
                  </NavText>
            </NavItem>

            {/* <NavItem eventKey="totAmount" style={{ padding: '0px 16px' }}>
              <NavText>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 16 }}>
                  <span>Total Amount :</span>
                  <span>43453453 MXC</span>
                </div>
              </NavText>
            </NavItem>

            <NavItem eventKey="dailyRevenue" style={{ padding: '0px 16px' }}>
              <NavText>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 16 }}>
                  <span>Daily Revenue (avg.):</span>
                  <span>453.34 MXC</span>
                </div>
              </NavText>
            </NavItem> */}{/* non-function */}

            {/* <NavItem eventKey="check" style={{ padding: '0px 16px', marginTop: 39 }}>
              <NavText>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={{ fontSize: '1rem' }}>
                    <input type="checkbox" onChange={() => { }} ></input>
                    <span style={{ marginLeft: '0.5rem' }}>{"View All"}</span>
                  </label>
                  <label style={{ fontSize: '1rem' }}>
                    <input type="checkbox" onChange={() => { }}></input>
                    <span style={{ marginLeft: '0.5rem' }}>{`View online(${online})`}</span>
                  </label>
                  <label style={{ fontSize: '1rem' }}>
                    <input type="checkbox" onChange={() => { }}></input>
                    <span style={{ marginLeft: '0.5rem' }}>{`View offline(${offline})`}</span>
                  </label>
                </div>
              </NavText>
            </NavItem> */}{/* non-function */}

          </SideNav.Nav>}
        </SideNav>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageName: PropTypes.string,
};






export default Layout;
