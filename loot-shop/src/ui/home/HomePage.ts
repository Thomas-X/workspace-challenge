import styled from 'styled-components';

export const HomePage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1rem;
  padding: 1rem;

  // TODO research styled-system for breakpoints etc, this is hacky
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
