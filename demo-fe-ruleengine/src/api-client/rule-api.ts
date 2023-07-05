import axiosClient from "./axios-client";

export interface Payload {
    quantity: number
}

export const ruleApi = {
    async checkRule(ruleName: string, payload: Payload) {  
        const url = `/rule/payment?ruleName=${ruleName}`
        
        const data = await axiosClient.post(url, payload)

        console.log('data: ', data)
        return data
    }
}