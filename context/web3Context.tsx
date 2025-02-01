import { ethers  } from "ethers";
import {  createContext } from "react";


type web3Stateprops = {
    chainId:number,
    contractInstance1:ethers.Contract,
    contractInstance2:ethers.Contract,
    selectedAccount: String,    
}


const Web3Context = createContext<web3Stateprops>({
    chainId:0,
    contractInstance1:new ethers.Contract(
        "0x0000000000000000000000000000000000000000",
        [],
        new ethers.JsonRpcProvider()
      ),
    contractInstance2:new ethers.Contract(
        "0x0000000000000000000000000000000000000000",
        [],
        new ethers.JsonRpcProvider()
      ),
    selectedAccount: "",
})

export default Web3Context