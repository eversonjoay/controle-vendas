import { Constants } from "./constants";

export class Shared {
  constructor() {}

  public static initilizeWebStorage(): void {
    if (localStorage.getItem(Constants.PEDIDOS_KEY) != null) {
      return;
    }

    localStorage.setItem(Constants.PEDIDOS_KEY, JSON.stringify([]));
  }
}
