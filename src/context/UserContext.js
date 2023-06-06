import React, { createContext, useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_DELIVERY_DATA":
        return { ...state, deliveryData: action.payload }; // Update the deliveryData property
        default:
        return state;
    }
};

export const userContext = createContext();

export const UserProvider = ({ children }) => {
    const initialState = {
        deliveryData: {
        city: "",
        postalCode: "",
        street: "",
        buildingNumber: "",
        apartmentNumber: "",
        phoneNumber: "",
        firstName: "",
        lastName: "",
        email: ""
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const setDeliveryDataAction = (data) => {
        dispatch({ type: "SET_DELIVERY_DATA", payload: data });
    };

    return (
        <userContext.Provider value={{ state, setDeliveryDataAction }}>
        {children}
        </userContext.Provider>
    );
};
