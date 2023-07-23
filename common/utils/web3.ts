export function shortenWalletAddress(address?: string | null): string {
  if (!address) {
    return "";
  }
  
  return address.substring(0, 6) + '...' + address.substring(address.length - 5, address.length - 1);
}
