import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    ::after {
        content: '';
        position: absolute;
        top: 0;
        left: calc(50% - 6px);
        width: 12px;
        height: 100%;
        background-color: #e17b77;
        border-radius: 5%;
    }
`

export const ItemContainer = styled.div`
    color: grey;
    width: 48%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    ::after {
        content: '';
        position: absolute;
        top: 40%;
        left: calc(-4% - 17px);
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: white;
        border: 10px solid #e17b77;
        z-index: 100;
    }
    &:nth-child(odd) {
        align-self: flex-start;
        justify-content: flex-end;
        &::after {
            position: absolute;
            left: calc(104% - 14px);
        }
    }
`

export const ItemContent = styled.div`
    width: 50%;
    min-height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    box-shadow: 0px 0px 8px 5px rgba(200, 200, 200, 0.9);
    border-radius: 10px;
    margin: 15px 0;
`