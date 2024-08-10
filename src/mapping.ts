//import event class from generated files
import { MarketCreated } from "../generated/RatioedFactory/RatioedFactory";
import { MarketInitialized } from "../generated/templates/BinaryMarket/BinaryMarket";
import { BinaryMarket } from "../generated/templates";
//import the functions defined in utils.ts
// import { fetchTokenDetails, fetchAccount, updateTokenBalance } from "./utils";
//import datatype
import { bigInt, BigInt } from "@graphprotocol/graph-ts";
import { Market } from "../generated/schema";

export function handleMarketCreated(event: MarketCreated): void {
  let marketAddress = event.params.market;
  let tweetStatus = event.params.tweetStatus;

  let marketData = new Market(marketAddress.toHexString());
  marketData.tweet = tweetStatus.toString();
  marketData.collateralToken = "";
  marketData.collateralAmount = BigInt.fromI32(0);
  marketData.yesShares = BigInt.fromI32(0);
  marketData.noShares = BigInt.fromI32(0);
  marketData.settlementDeadline = BigInt.fromI32(0);
  marketData.chance = BigInt.fromI32(0);

  marketData.save();

  BinaryMarket.create(marketAddress);
}

export function handleMarketInitialized(event: MarketInitialized): void {
  let marketData = Market.load(event.address.toHexString());

  if (marketData == null) {
    return;
  }

  marketData.collateralToken = event.params.collateralToken.toString();
  marketData.collateralAmount = event.params.collateralAmount;
  marketData.yesShares = event.params.yesShares;
  marketData.noShares = event.params.noShares;
  marketData.settlementDeadline = event.params.deadline;
  marketData.chance = BigInt.fromI32(0);

  marketData.save();
}
