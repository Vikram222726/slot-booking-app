import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faCalendarCheck,  faCog, faCreditCard, faHospital, faInfoCircle, faPhoneSquareAlt, faQuestionCircle, faSignOutAlt, faTachometerAlt, faUser } from '@fortawesome/free-solid-svg-icons'

const SideBar = () => {
    return(
        <div className="wrapper">
            <div className="sidebar">
                <ul>
                    <li><FontAwesomeIcon className="icons" icon={faTachometerAlt} />Dashboard</li>
                    <li><FontAwesomeIcon className="icons" icon={faUser} />Profile</li>
                    <li><FontAwesomeIcon className="icons" icon={faAddressCard} />Catalogue</li>
                    <li><FontAwesomeIcon className="icons" icon={faPhoneSquareAlt} />My Availability</li>
                    <li><FontAwesomeIcon className="icons" icon={faCalendarCheck} />Appointments</li>
                    <li><FontAwesomeIcon className="icons" icon={faHospital} />Centers</li>
                    <li><FontAwesomeIcon className="icons" icon={faCog} />Settings</li>
                    <li><FontAwesomeIcon className="icons" icon={faCreditCard} />Manage Payments</li>
                    <li><FontAwesomeIcon className="icons" icon={faQuestionCircle} />Help</li>
                    <li><FontAwesomeIcon className="icons" icon={faInfoCircle} />About Us</li>
                    <li><FontAwesomeIcon className="icons" icon={faSignOutAlt} />Logout</li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar;