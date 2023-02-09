import styled from "styled-components";

export const FileExplorerWrapper = styled.div`
    display       : flex;
    flex-direction: column;
`;

export const FilesWrapper = styled.div`
    display              : grid;
    grid-template-columns: repeat( auto-fit, 100px);
    gap                  : 1rem;
    padding              : 1rem;
`;