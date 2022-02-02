import { useEffect, useState } from "react";

const storage = {
    getItem<T>(key: string, initialValue: T): T {
        if (typeof window === "undefined") {
            return initialValue;
        }
        try {
            const unparsedValue = window.localStorage[key];
            if (typeof unparsedValue === "undefined") {
                return initialValue;
            }
            return JSON.parse(unparsedValue);
        } catch (error) {
            return initialValue;
        }
    },

    setItem<T>(key: string, value: T) {
        window.localStorage[key] = JSON.stringify(value);
    },
};

function useLocalStorage(key: string, initialValue: any) {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        setValue(storage.getItem(key, initialValue));
    }, [key, initialValue]);

    const setItem = (newValue: any) => {
        setValue(newValue);
        storage.setItem(key, newValue);
    };

    return [value, setItem];
}

export default useLocalStorage