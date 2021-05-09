import React, { useState } from "react";

export default function useStatus(value) {
    const [status, setStatus] = useState("hide");

    function handleStatus(e) {
        status === "hide" ? setStatus("show") : setStatus("hide");
    }

    return {
        handleStatus,
        status,
    };
}
