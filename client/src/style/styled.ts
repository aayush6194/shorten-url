import styled from 'styled-components';

const Badge = styled.div`
  color: white;
  background: dodgerblue;
  display: inline-block;
  padding: 0.3em;
  font-size: 1.2em,
  display: inline-block,
  margin: 0.4em;
  border-radius: .4em;
  text-align: center;
  font-weight: bolder
  background: ${props => props.color};
`;

const Card = styled.div`
  margin: 1em 0.5em;
  padding: .8em 1em;
  background: white;
  box-shadow: 0 .25em .5em rgba(0,0,0,.5);
  border-radius: .5em;
`;

const GridCols = styled.div<{cols: string}>`
  display: grid;
  place-items: center;
  grid-gaps: 1em;
  grid-template-columns: repeat(${props => props.cols}, 1fr);
`;

const GridColItem = styled.div<{colStart: string, colEnd: string, align: string}>`
  grid-column-start: ${props => props.colStart};
  grid-column-end: ${props => props.colEnd};
  text-align: ${props => props.align};
`;

const GridRows = styled.div<{rows: string}>`
  display: grid;
  place-items: center;
    grid-template-rows: repeat(${props => props.rows}, 1fr);
`;

const Wrapper = styled.div`
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  min-height: 100vh;
  width: 100%;
  min-width: 320px;
  max-width: 100vw;
  text-align: center;
  padding: 0;
  margin: 0;
  background: ${props => props.color};
  @media(max-width: 879px){
  width: 100%;
  padding-bottom: 5em;
  padding-left: 1em;}
`;

const Border = styled.div`
  margin: 0px;
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  min-height: 100vh;
`;

const Container = styled.div`
  padding: 5% 0px;
  padding-top: 75px;
  margin: 0px 15%;
  background-color: white;
  min-height: 100vh;
  text-align: center;
  box-shadow: 0px 0px 20px 5px gray;
  transition: margin 800ms;
  @media only screen and (max-width: 879px) {
    margin: 0;
  }
`;

export {Card, Badge, GridCols, GridColItem, GridRows, Wrapper, Border, Container};
