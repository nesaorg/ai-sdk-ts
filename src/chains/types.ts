import { ChainInfo as ChainInfoKeplr } from '@keplr-wallet/types';
import { ChainInfo as ChainInfoLeap } from '@leapwallet/cosmos-snap-provider';

export type ChainInfo = ChainInfoKeplr | ChainInfoLeap;
