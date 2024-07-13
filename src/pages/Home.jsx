import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ROW = 4;
const LEFT_COL = 3;
const RIGHT_COL = 3;


function Home() {
    const names = [
        "강희진", "고금강", "구본관", "김서로", "김성일", "김정현",
        "김준하", "문인규", "박동주", "박윤혜", "박준서", "손정찬",
        "왕한솔", "유호균", "육종호", "이하진", "이호준", "정혜선",
        "조희수", "주시현", "진성일", "최민주", "홍권", "황인준",
    ];

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

    return (
        <HomeLayout>
            <Screen>Screen</Screen>
            {createTable(ROW, LEFT_COL, RIGHT_COL, names)}
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

export default Home;