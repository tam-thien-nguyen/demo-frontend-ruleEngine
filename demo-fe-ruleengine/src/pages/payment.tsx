import { MainLayout } from '@/components/layout';
import { Box, Button, Container, Divider, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Payload, ruleApi } from '@/api-client/rule-api';



const convertRabatt = (rabatt: string) => {
    if( rabatt === "10%") return 0.9
    if(rabatt ==='5%') return 0.95
    return 1
}

export default function Payment (){

    const [ruleName, setRuleName]= useState('')
    const [quantity, setQuantity]= useState(1)
    const [rabatt, setRabatt] = useState('')

    async function handleCheckRabatt() {
        let rabatt = ''
        try {
            if(ruleName) {
                const payload: Payload = {
                    quantity: quantity
                }

                const {data} = await ruleApi.checkRule(ruleName, payload)
    
                data.docs.forEach((doc: any) => {
                    if(doc.status === 'success' )  {
                        rabatt = doc.params.message
                    } 
                    
                });
                setRabatt(rabatt)
            }
            
        } catch (error) {
            console.log('Failed to check RuleEngine')
        }
    }

    return (
        <Box>
            <Container>
                <Typography component='h2' variant='h2' color='primary.primary' >Payment Page</Typography> <br/>
                <Divider></Divider>

                <Box sx={{my: 8}}>
                <Typography component='h4' variant='h4' color='primary.secondary'>Rabatt check</Typography> <br/>
                    <Stack direction='row' justifyContent='space-between'>
                        <TextField id="standard-basic" label="Rule Name" variant="standard" onChange={(e) => setRuleName(e.target.value)}/>
                        <Button variant="outlined" onClick={handleCheckRabatt}>Check Rabatt</Button>
                    </Stack>
                </Box>

                <Box sx={{mb: 8}}>
                    <Typography component='h4' variant='h4' color='primary.secondary'>Checkout</Typography> <br/>
                    <TextField type='number' fullWidth id="standard-basic" label="Quantity" variant="standard" onChange={(e) => setQuantity(Number(e.target.value))}/> <br/>
                    <p>x100</p>
                </Box>

                <Box sx={{mb: 8}}>
                    <Typography component='h4' variant='h4' color='primary.secondary'>Total Price</Typography> <br/>
                    
                    <p>Price:{quantity * 100}</p>

                    <p>Rabatt: {rabatt}</p>
                    <p>Price after reducing: {quantity * 100 * convertRabatt(rabatt)}</p>
                </Box>   
            </Container>
        </Box>
    );
}

Payment.Layout = MainLayout
