import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

function Home() {
    const location = useLocation();
    const { names, row, leftCol, rightCol } = location.state || {};
    
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const createTable = (row, leftCol, rightCol, names) => {
        const shuffledNames = shuffleArray([...names]);
        const tableRows = [];
        let nameIndex = 0;

    
        for (let i = 0; i < row; i++) {
          const tableColumns = [];
          const tableColumnsLeft = [];
          const tableColumnsRight = [];

          for (let j = 0; j < leftCol; j++) {
            tableColumnsLeft.push(<Table key={`table-${i}-${j}`}>{shuffledNames[nameIndex++]}</Table>);
          }
          for (let j = 0; j < rightCol; j++) {
            tableColumnsRight.push(<Table key={`table-${i}-${j}`}>{shuffledNames[nameIndex++]}</Table>);
          }
          tableColumns.push(<TableColumnLeft>{tableColumnsLeft}</TableColumnLeft>);
          tableColumns.push(<AisleCenter />);
          tableColumns.push(<TableColumnRight>{tableColumnsRight}</TableColumnRight>);
          tableRows.push(<TableRow>{tableColumns}</TableRow>);
        }
    
        return tableRows;
    };

    const handleRefreshClick = () => {
        const updatedTableData = createTable(row, leftCol, rightCol, names);
        setTableData(updatedTableData);
    };

    const [tableData, setTableData] = useState(createTable(row, leftCol, rightCol, names));

    return (
        <HomeLayout>
            <Screen>Screen</Screen>
            {tableData}
            <RefreshBtn onClick={handleRefreshClick}>
                다시 뽑기
            </RefreshBtn>
        </HomeLayout>
    );
}

const HomeLayout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`;

const TableRow = styled.div`
    display: flex;
    margin-bottom: 10px;
    justify-content: space-evenly;
    width: 100%;
`;

const TableColumnLeft = styled.div`
    display: flex;
`;

const TableColumnRight = styled.div`
    display: flex;
`;

const AisleCenter = styled.div`
    width: 10px;
`;

const Screen = styled.div`
    width: 80%;
    height: 20px;
    background-color: white;
    border: 1px solid black;
    margin-top: 50px;
    margin-bottom: 50px;
`;

const Table = styled.div`
    display: flex;
    width: 130px;
    height: 70px;
    background-color: #a98b71;
    border: 1px solid black;
    margin: 10px;
    justify-content: center;
    align-items: center;
`;

const RefreshBtn = styled.div`
    position: fixed;
    z-index: 1;
    bottom: 20px;
    right: 20px;
    background-color: black;
    color: white;
    padding: 14px;
    margin: 28px;
    border-radius: 20px;
    transition: transform 0.3s ease-in-out;
    align-self: flex-end;

    &:hover {
        transform: scale(1.1);
    }
`;

export default Home;