
import React from "react";

const ShopContext = React.createContext(
    {
    show_mode: "list",
    display: " light",
    basketList: [],
    setShowMode: ()=>{},
    setDisplay: ()=>{},
    setBasketList: ()=>{},
    setDefaultContext: ()=>{}
}
);

export default ShopContext
export const ShopProvider = ShopContext.Provider
export const ShopConsumer = ShopContext.Consumer