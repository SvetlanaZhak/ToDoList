import React from 'react';
import styled from 'styled-components';

const Table = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin: auto;
width: 100%;
`;

const HeaderCell = styled.th`
border: 5px solid #ddd;
background-color: lightgreen;
padding: 20px;
`

const Cell = styled.td`
border: 5px solid #ddd;
padding: 20px;
`
const DelBut = styled.td`

`


const TodoTable = (props) => {

    return (
        <Table>
            <table>
                <tbody>
                    <tr><HeaderCell>Date</HeaderCell><HeaderCell>Description</HeaderCell></tr>
                    {props.todos.map((item, index) =>
                        <tr key={index}>
                            <Cell>{item.date}</Cell>
                            <Cell>{item.description}</Cell>
                            <DelBut> < input type="button" onClick={() => props.deleteTodo(index)} value="Delete" /></DelBut>
                        </tr>
                    )}

                </tbody>
            </table>
        </Table >
    );
}
export default TodoTable;