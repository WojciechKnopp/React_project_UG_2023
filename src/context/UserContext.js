import React, { createContext, useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_DELIVERY_DATA":
            return { ...state, deliveryData: action.payload };
        case "SET_PAYMENT_METHOD":
            return { ...state, paymentMethod: action.payload };
        case "SET_TABLE_NUMBER":
            return { ...state, tableNumber: action.payload };
        case "CLEAR":
            return {
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
                },
                paymentMethod: ""
            };
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
            email: "",
        },
        paymentMethod: "",
        tableNumber: {
            tableNumber: ""
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const setDeliveryDataAction = (data) => {
        dispatch({ type: "SET_DELIVERY_DATA", payload: data });
    };

    const setPaymentMethodAction = (data) => {
        dispatch({ type: "SET_PAYMENT_METHOD", payload: data });
    };

    const setTableNumberAction = (data) => {
        dispatch({ type: "SET_TABLE_NUMBER", payload: data });
    };

    const clearAction = () => {
        dispatch({ type: "CLEAR" });
    };

    return (
        <userContext.Provider value={{ state, setDeliveryDataAction, setPaymentMethodAction, setTableNumberAction, clearAction }}>
            {children}
        </userContext.Provider>
    );
};
