import styled from "styled-components";

export const FilesWrapper = styled.div`
  padding: 1rem;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, 100px);
  align-items: flex-start;
  gap: 1rem;
  grid-auto-rows: 100px;
`;

export const RenderFileWrapper = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.85rem;
  background-color: transparent;
  border: none;
  opacity: ${(props) => (props.name?.startsWith(".") ? "0.3" : 1)};

  img,
  svg {
    height: 60px;
    width: 60px;
  }

  :hover {
    background-color: #343434;
  }
`;

export const StyledFileName = styled.div`
  width: 70px;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: default;
  font-size: 12px;
  font-weight: 600;
`;
