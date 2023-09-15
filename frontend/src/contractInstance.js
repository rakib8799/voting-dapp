import { ethers } from 'ethers';
import { ABI } from './Abi';
async function contractInstance() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contractAddress = '0xB34B51B3A2b92d92917d841C3e957889c32D589B';
  await provider.send('eth_requestAccounts', []);
  const signer = provider.getSigner();
  const signerAddress = await signer.getAddress();
  const network = await provider.getNetwork();
  const networkId = network.chainId;
  const contract = new ethers.Contract(contractAddress, ABI, signer);
  localStorage.setItem('nid', networkId);
  console.log(`Contract: ${contract.address}`);
  console.log(`Signer: ${signerAddress}`);
  return { contract, networkId, signerAddress };
}

export default contractInstance;
