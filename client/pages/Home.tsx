import React, { useState } from 'react';
import { Button, Input, InputLabel } from '@material-ui/core';
import { Wrapper, Card } from '../src/style/styled';
import styled from 'styled-components';
import api from '../src/api'
import Link from 'next/link';
import Hints from '../src/components/hints'
import { Select, MenuItem } from '@material-ui/core';

let Container = styled.div`
    background-image: url("/static/svg1.svg");
    background: size: auto;
    background-repeat: no-repeat;
    background-attachment: fixed;
`;

let MyCard = styled(Card)`
    display: grid;
    grid-template-columns: 1fr;
    max-width: 700px;
    width: 90%;
    align-self: center;
    justify-self: right;
    grid-gap: 1em;
    
    @media (max-width: 720px){
        justify-self: center;
    }
    `;

const Home = () => {
    const [url, setUrl] = useState("");
    const [shortUrl, setShortUrl] = useState(null);
    const [open, setOpen] = React.useState(false);
    const [http, setHttp] = useState("http");

    let shorten = () => {
        let tempUrl = url.toLowerCase().search('http://') === 0? url.substring(6) : url;
            tempUrl = url.toLowerCase().search('https://') === 0? url.substring(7) : url;
        api.shorten(`${http}://${tempUrl}`)
            .then((res: any) => {
                if (res.success) setShortUrl(res.shortUrl);
                else alert(res.message);
            })
            .catch((err: any) => alert(err));
    }

    return (
        <Wrapper >
        <Container style={{ display: "grid" , height: "100vh"}}>
            <MyCard>
                <h2 className="gradient-heading">Shorten Your URL!</h2>
                <Select style={{ minWidth: "10vh" }}
                    input={<Input id="select-multiple" />}
                    open={open}
                    onChange={(e: any)=>{setHttp(e.target.value)}}
                    value={http}
                    onOpen={() => setOpen(true)}
                    onClose={() => setOpen(false)}>
                    <MenuItem value={"http"} >http</MenuItem>
                    <MenuItem value={"https"} >https</MenuItem>
                </Select>
                <Input id="my-input" onChange={(e: any) => setUrl(e.target.value)} placeholder={"Ex: www.facebook.com"} />
                <Button variant="contained" color="primary" onClick={shorten}> Generate </Button>
                {shortUrl && <MyCard><a target="_blank" rel="noopener noreferrer" href={shortUrl}>{shortUrl}</a></MyCard>}
            </MyCard>
            <Hints msg={['Hello', 'Welcome to Short-Url!', 'Try Shortening your link', 'Thank for using the App']} />
          </Container>
        </Wrapper>);
}

export default Home;