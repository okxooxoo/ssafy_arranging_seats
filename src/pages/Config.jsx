import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { DeleteIcon } from '../icons/icon';

function Config() {
    const [newName, setNewName] = useState("");
    const [names, setNames] = useState([
        "강희진", "고금강", "구본관", "김서로", "김성일", "김정현",
        "김준하", "문인규", "박동주", "박윤혜", "박준서", "손정찬",
        "왕한솔", "유호균", "육종호", "이하진", "이호준", "정혜선",
        "조희수", "주시현", "진성일", "최민주", "홍권", "황인준",
    ]);
    const [row, setRow] = useState(4);
    const [leftCol, setLeftCol] = useState(3);
    const [rightCol, setRightCol] = useState(3);

    const navigate = useNavigate();

    const handleAddName = () => {
        if (newName.trim() !== "") {
          setNames((prevNames) => [...prevNames, newName]);
          setNewName("");
          console.log(names);
        }
    };

    const handleDeleteName = (index) => {
        setNames((prevNames) => prevNames.filter((name, i) => i !== index));
    };

    const handleEnterKeyPress = (e) => {
        if (e.key === "Enter") {
          handleAddName();
        }
    };

    const handleRowChange = (e) => {
        setRow(Number(e.target.value));
    };
    
      const handleLeftColChange = (e) => {
        setLeftCol(Number(e.target.value));
    };
    
      const handleRightColChange = (e) => {
        setRightCol(Number(e.target.value));
    };

    const renderNameItems = () => {
        return names.map((name, index) => (
          <NameItem key={index}>
            <NameText>{name}</NameText>
            <DeleteIcon onClick={() => {handleDeleteName(index)}} />
          </NameItem>
        ));
    };

    const handleRandomizeSeats = () => {
        navigate('/result', {
            state: {
                names,
                row,
                leftCol,
                rightCol,
            },
        });
    };

    return (
        <ConfigLayout>
            <Title>SSAFY 12기 14반</Title>
            <InputLabel>
                <label>
                    행 수
                    <input
                        type='number'
                        onChange={handleRowChange}
                        value={row}
                        min='0'
                        max='10'
                    />
                </label>
            </InputLabel>
            <InputLabel>
                <label>
                    왼쪽 열 수
                    <input
                        type='number'
                        onChange={handleLeftColChange}
                        value={leftCol}
                        min='0'
                        max='10'
                    />
                </label>
            </InputLabel>
            <InputLabel>
                <label>
                    오른쪽 열 수
                    <input
                        type='number'
                        onChange={handleRightColChange}
                        value={rightCol}
                        min='0'
                        max='10'
                    />
                </label>
            </InputLabel>
            <NameInput>
                <input
                    type='text'
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="새 이름 추가"
                    onKeyPress={handleEnterKeyPress}
                />
                <button onClick={handleAddName}>추가</button>
            </NameInput>
            <NameList>
                {renderNameItems()}
            </NameList>
            <RandomizeBtn onClick={handleRandomizeSeats}>자리 랜덤 뽑기</RandomizeBtn>
        </ConfigLayout>
    );
}

const ConfigLayout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
`;

const Title = styled.div`
    font-size: 44px;
    margin: 28px;
`;

const InputLabel = styled.div`
    display: flex;
    margin: 2px;

    input {
        font-size: 16px;
        border: 1px solid #ccc;
        padding: 6px;
        margin: 6px;
        border-radius: 10px;
    }
`;

const NameInput = styled.div`
    margin: 2px;

    input {
        font-size: 16px;
        border: 1px solid #ccc;
        padding: 6px;
        margin: 6px;
        border-radius: 10px;
    }

    button {
        padding: 6px 12px;
        font-size: 16px;
        border: none;
        background-color: black;
        color: white;
        border-radius: 10px;
        cursor: pointer;
        transition: transform 0.3s ease-in-out;

        &:hover {
            transform: scale(1.1);
        }
    }
`;

const NameList = styled.div`
    margin: 2px;
    width: 80%;
    display: flex;
    flex-wrap: wrap;
`;

const NameItem = styled.div`
    display: flex;
    background-color: #ffffff7e;
    padding: 6px;
    margin: 6px;
    border-radius: 20px;
`;

const NameText = styled.div`
    
`;

const RandomizeBtn = styled.div`
    background-color: black;
    color: white;
    padding: 14px;
    margin: 28px;
    border-radius: 20px;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }
`;

export default Config;