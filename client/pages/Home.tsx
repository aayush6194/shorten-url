import React, { useState } from 'react';
import { Button, Input, InputLabel } from '@material-ui/core';
import { Wrapper, Card } from '../src/style/styled';
import styled from 'styled-components';
import api from '../src/api'
import Link from 'next/link';
import { Select, MenuItem} from '@material-ui/core';
let MyCard = styled(Card)`
    max-width: 700px;
    width: 90%;
    align-self: center;
    justify-self: center;
`;

const Home = () => {
    let [url, setUrl] = useState("");
    let [html, setHtml] = useState("");
    const [open, setOpen] = React.useState(false);
    let shorten = (url: any) => {
        api.shorten(url)
            .then((res: any) => {
                if (res.success) alert(res.message)
            })
            .catch((err: any) => alert(err));
    }

    let proxy = (url: any) => {
        api.proxy({ url })
            .then((res: any) => {
                setHtml(res);
            })
            .catch((err: any) => alert(err));
    }

    return (<Wrapper style={{ display: "grid" }}>
        <MyCard>
            <Select
                input={<Input id="select-multiple" />}
                open={open}
                value={"https"}
                onOpen={()=>setOpen(true)}
                onClose={()=>setOpen(false)}
            >
               
                    <MenuItem   value={"request"} >
                       http
                    </MenuItem >
                    <MenuItem  key={2} value={"request2"} >
                       https
                    </MenuItem >
                ))}
            </Select>
           
            <Input id="my-input" onChange={(e: any) => setUrl(e.target.value)} placeholder={"Ex: www.facebook.com"}/>
            <Button variant="contained" color="primary" onClick={proxy}> Generate </Button>

        </MyCard>
        {html}
    </Wrapper>);
}

export default Home;