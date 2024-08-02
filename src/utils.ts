// import { ethereum } from "@graphprotocol/graph-ts";
// import { Market } from "../generated/schema";

// // Fetch token details
// export function fetchTokenDetails(event: ethereum.Event): Market | null {
//   //check if token details are already saved
//   let market = Market.load(event.address.toHex());
//   if (!market) {
//     //if token details are not available
//     //create a new token
//     market = new Market(event.address.toHex());

//     //set some default values
//     market.
//     token.name = "N/A";
//     token.symbol = "N/A";
//     token.decimals = BigDecimal.fromString("0");

//     //bind the contract
//     let erc20 = Erc20.bind(event.address);

//     //fetch name
//     let tokenName = erc20.try_name();
//     if (!tokenName.reverted) {
//       token.name = tokenName.value;
//     }

//     //fetch symbol
//     let tokenSymbol = erc20.try_symbol();
//     if (!tokenSymbol.reverted) {
//       token.symbol = tokenSymbol.value;
//     }

//     //fetch decimals
//     let tokenDecimal = erc20.try_decimals();
//     if (!tokenDecimal.reverted) {
//       token.decimals = BigDecimal.fromString(tokenDecimal.value.toString());
//     }

//     //save the details
//     token.save();
//   }
//   return token;
// }
