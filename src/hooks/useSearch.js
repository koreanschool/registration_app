import { useState, useEffect } from "react";

function useSearch() {
    const [email, setEmail] = useState('');

    return {
        email, setEmail
    };
}

export default useSearch;