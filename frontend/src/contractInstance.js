import { ethers } from 'ethers';
import { ABI } from './Abi';
async function contractInstance() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contractAddress = '0x3082f1cB4cC958A814222cFd690fFda6a9ed3dB9';
  await provider.send('eth_requestAccounts', []);
  const signer = provider.getSigner();
  const signerAddress = await signer.getAddress();
  const network = await provider.getNetwork();
  const networkId = network.chainId;
  const contract = new ethers.Contract(contractAddress, ABI, signer);
  localStorage.setItem('nid', networkId);
  console.log(contract);
  return { contract, networkId, signerAddress };
}

export default contractInstance;
