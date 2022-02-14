import React from "react";
import Clients from '../data/clients.json'

export default function useData(search) {

    const filteredData = React.useMemo(() => {
        if (!search || search === "")
            return [];
        return Clients.filter((c) => c.user_name.toLowerCase().includes(search.toLowerCase()) || (!isNaN(search) && (c.user_policy.includes(search) || c.user_policy_copy.includes(search))))
    }, [search, Clients]);
    return filteredData
}