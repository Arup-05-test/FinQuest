import { ethers } from "ethers"
import { MetaMaskInpageProvider } from "@metamask/providers";
import abi1 from "../constants/abiNft.json"
import abi2 from "../constants/abiTransact.json"

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}

export const getWeb3State = async() =>{

    try{    
        if(!window.ethereum){
            throw new Error("Metamask is not available")
        }

        const accounts = await window.ethereum.request<String[]>({
            method: 'eth_requestAccounts',
        }) as String[];

        if(!accounts || accounts.length===0 ){
            console.log(accounts)
            throw new Error("The thing is not doing good for account")
        }
        const selectedAccount = accounts[0]

        const chainIdHex = await window.ethereum.request<String>({
            'method':'eth_chainId'
        }) as string; 

        if(!chainIdHex){
            throw new Error("The thing is not doing good")
        }
        const chainId = parseInt(chainIdHex, 16)

        const provider = new ethers.BrowserProvider(window.ethereum)
        const signer = await provider.getSigner()

        const contractAddress1 = "0x1cE6EE5867Dba16E18fc3C4515965aa1DA1C2303";
        const contractAddress2 = "0x7b77145A737b18723dC57733711b31c50C57480A";

        const contractInstance1 = new ethers.Contract(contractAddress1, abi1, signer);
        const contractInstance2 = new ethers.Contract(contractAddress2, abi2, signer);

        console.log(selectedAccount, chainId, contractInstance1, contractInstance2);

        // Return both contract instances
        return { selectedAccount, chainId, contractInstance1, contractInstance2 };


    }catch(e){
        console.log(e)
        throw new Error()
    }
}

