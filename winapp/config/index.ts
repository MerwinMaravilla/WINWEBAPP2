import { Contract, ContractRunner } from "ethers";
import abi from "./abi.json";

export function getContract(signer: ContractRunner) {
    return new Contract(
        "0xb3ecF9986C101eA83B2C7a27e0494A04d9B41F72 ", //contract add
        abi as any,
        signer
    );
}