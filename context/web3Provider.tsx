"use client"
import { ReactNode, useState } from "react"
import Web3Context from "./web3Context"
import { getWeb3State} from "../utils/Web3State"
import { ethers } from "ethers"

type web3ProviderProp = {
    children: ReactNode
}  

type web3Stateprops = {
    chainId:number,
    contractInstance1:ethers.Contract,
    contractInstance2:ethers.Contract,
    selectedAccount: String,
}

const Web3Provider =({children} : web3ProviderProp)=>{

    const [web3State, setWeb3State] = useState<web3Stateprops>({
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
    },   )


    const handleWallet = async () =>{

        try{
            const {contractInstance1 , contractInstance2 , selectedAccount, chainId} = await getWeb3State();
            setWeb3State({contractInstance1 , contractInstance2, selectedAccount, chainId })
            console.log(web3State)
            console.log("Printed values")

        }catch(e){
            console.log(e)
        }
    }


    return (
    <>  
        < Web3Context.Provider value={web3State }>
            <div>
                <div className="bg-gray-800 text-center">
                    {web3State.chainId===0 && web3State.selectedAccount=== "" ?
                    <button className="" onClick={handleWallet}>Connect Wallet</button> : "Wallet Connected"  }
                </div>
                {children}
            </div>
        </Web3Context.Provider>
        

    </>)
}

export default Web3Provider