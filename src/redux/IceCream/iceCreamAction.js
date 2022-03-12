import { BUY_ICE } from "./iceCreamType"

export const buyIce = (number = 1) => {
    return {
        type: BUY_ICE,
        payload: number
    }
}