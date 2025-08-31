import type { LoginFormType } from "@/components/login-form";

export type Transaction = {
    id : number;
    name : string;
    type : string;
    status : string;
    price : number |"";
    createdAt: Date;
};

export async function listTransaction(params: LoginFormType) {
    return await fetch("/api/login", {
        method: 'POST', // Specify the HTTP method as POST
        headers: {
            'Content-Type': 'application/json' // Indicate that the body contains JSON data
        },
        body: JSON.stringify(params) // Convert the JavaScript object to a JSON string
        })
        .then(response => {
            if (!response.ok) {
                // Handle HTTP errors (e.g., 404, 500)
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // Parse the JSON response from the server
        })
        .then(data => {
            console.log('Success:', data);
            return data; // Handle the successful response data
        })
        .catch(error => {
            console.error('Error:', error); // Handle network errors or other issues
        });
}