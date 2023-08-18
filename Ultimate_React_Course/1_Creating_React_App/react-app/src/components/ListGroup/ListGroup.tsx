import "./ListGroup.css";
import styled from "styled-components";
import { useState } from "react";



interface ListItemProps {
    active: boolean;
}

const List = styled.ul`
    list-style: none;
    padding: 0;
    background-color: yellow;
`;

const ListItem = styled.li<ListItemProps>`
    padding: 10px 0;
    font-weight: bold;
    background: ${props => props.active ? 'blue' : 'none'};
`;

function ListGroup() {
    return (
        <div>
            <h1>Miami</h1>
            <List>
                <ListItem>New York</ListItem>
                <ListItem>Los Angeles</ListItem>
                <ListItem>San Francisco</ListItem>
            </List>
        </div>
    );
};

export default ListGroup;