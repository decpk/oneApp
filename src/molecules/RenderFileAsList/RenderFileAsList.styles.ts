import styled from "styled-components";

export const StyledFilesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const RenderFileWrapper = styled.button`
  display: grid;
  grid-template-columns: 30px 1fr;
  align-items: center;
  justify-content: flex-start;
  white-space: nowrap;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background-color: transparent;
  border: none;
  opacity: ${(props) => (props.name?.startsWith(".") ? "0.3" : 1)};
  width: 100% !important;

  img,
  svg {
    height: 20px;
    width: 20px;
  }

  :hover {
    background-color: #343434;
  }
`;

export const StyledFileName = styled.div`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: default;
  font-size: 12px;
  font-weight: 600;
  text-align: left;
  color: var(--color-dark);
`;
