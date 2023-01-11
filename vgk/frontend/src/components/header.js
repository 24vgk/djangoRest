import React, { useState } from 'react';
import {
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarItem,
    MDBNavbarLink,
} from 'mdb-react-ui-kit';

function MainMenu(auth) {
    const [showBasic, setShowBasic] = useState(false);
    return (
            <>
                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowBasic(!showBasic)}
                >
                </MDBNavbarToggler>
                <dev>
                    <dev>
                        <a href='/users'>Users</a>
                    </dev>
                    <dev>
                        <a href='/projects'>Projects</a>
                    </dev>
                    <dev>
                        <a href='/notes'>Notes</a>
                    </dev>
                </dev>

                        <MDBNavbarItem>
                            {auth.is_Auth() ?
                                <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                                    You logged in as,  <b>{auth.currentUser}</b>
                                </MDBNavbarLink> : <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                                    Anonim user, please Login to udentify yourself
                                </MDBNavbarLink>}
                        </MDBNavbarItem>
        </>
    );
}

export default MainMenu;