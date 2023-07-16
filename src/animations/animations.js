import { keyframes } from "@emotion/react";

export const pulse = keyframes`
    0% {
        -moz-box-shadow: 0 0 0 0 rgba(0, 128, 128, 0.5);
        box-shadow: 0 0 0 0 rgba(0, 128, 128, 0.4);
    }

    70% {
        -moz-box-shadow: 0 0 0 20px rgba(204, 169, 44, 0);
        box-shadow: 0 0 0 20px rgba(204, 169, 44, 0);
    }

    100% {
        -moz-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
        box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
    }
 `;
