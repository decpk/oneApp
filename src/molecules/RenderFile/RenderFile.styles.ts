import styled from "styled-components";

export const RenderFileWrapper = styled.button`
    display         : flex;
    flex-direction  : column;
    align-items     : center;
    justify-content : center;
    white-space     : nowrap;
    padding         : .5rem 1rem;
    border-radius   : 4px;
    font-size       : .85rem;
    background-color: transparent;
    border          : none;

    svg {
    height: 70px;
    width : 100%;
    }

    :hover {
    background-color: #343434;
    }
`;

export const StyledFileName = styled.div`
    width        : 70px;
    text-overflow: ellipsis;
    overflow     : hidden;
    cursor       : default;
`;