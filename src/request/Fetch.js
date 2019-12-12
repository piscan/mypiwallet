
async function Fetch(query) {
    
    const response = await fetch("https://api.mypiwallet.org/",
        {  
            method: 'POST', 
            body: JSON.stringify(query),
            headers: {
                "Content-Type": "application/json"
            }
        });

    const data = await response.json();
    return data;
}

export default Fetch; 