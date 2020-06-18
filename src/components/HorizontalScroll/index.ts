import styled from "@emotion/styled";

export const HorizontalScroll = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;

  ::-webkit-scrollbar {
    display: none;
  }
`;
