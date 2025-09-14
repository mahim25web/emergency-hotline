 document.addEventListener('DOMContentLoaded', () => {
    const servicesGrid = document.querySelector('.services-grid');
    const callHistoryList = document.getElementById('callHistoryList');
    const clearHistoryBtn = document.getElementById('clearHistoryBtn');
    const coinCountDisplay = document.getElementById('coinCount');
    const heartCountDisplay = document.getElementById('heartCount');
    const copyCountDisplay = document.getElementById('copyCount');

    
    let coins = 100;
    let heartCount = 0;
    let callHistory = [];
    let copyCount = 0;

 
    coinCountDisplay.textContent = coins;
    heartCountDisplay.textContent = heartCount;
    copyCountDisplay.textContent = copyCount;

    const renderCallHistory = () => {
        callHistoryList.innerHTML = '';
        callHistory.forEach(item => {
            const li = document.createElement('li');
            li.classList.add('py-2', 'flex', 'justify-between', 'items-center');
            li.innerHTML = `
                <div>
                    <span class="text-gray-800 font-medium">${item.name}</span>
                    <br>
                    <span class="text-gray-500 text-sm">${item.number}</span>
                </div>
                <span class="text-gray-400 text-xs">${item.timestamp}</span>
            `;
            callHistoryList.appendChild(li);
        });
    };

    const addToCallHistory = (name, number) => {
        const now = new Date();
        const timestamp = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });

        const newHistoryItem = { name, number, timestamp };
        callHistory.unshift(newHistoryItem);
        
       
        if (callHistory.length > 10) {
            callHistory.pop();
        }

        renderCallHistory();
    };

    servicesGrid.addEventListener('click', (event) => {
        const card = event.target.closest('.service-card');
        if (!card) return;

        const serviceName = card.getAttribute('data-service-name');
        const serviceNumber = card.getAttribute('data-service-number');

        if (event.target.classList.contains('call-btn')) {
            const callCost = 20;

            if (coins < callCost) {
                alert("You don't have enough coins to make this call.");
                return;
            }

         
            coins -= callCost;
            coinCountDisplay.textContent = coins;

            
            alert(`Calling ${serviceName} at ${serviceNumber}`);

          
            addToCallHistory(serviceName, serviceNumber);

        } else if (event.target.classList.contains('copy-btn')) {
            navigator.clipboard.writeText(serviceNumber)
                .then(() => {
                   
                    copyCount++;
                    copyCountDisplay.textContent = copyCount;
                    alert(`Copied ${serviceNumber} to clipboard!`);
                })
                .catch(err => {
                    console.error('Failed to copy text: ', err);
                });
        } else if (event.target.classList.contains('heart-icon-btn')) {
         
            heartCount++;
            heartCountDisplay.textContent = heartCount;
        }
    });

    clearHistoryBtn.addEventListener('click', () => {
        callHistory = [];
        renderCallHistory();
    });

    
    renderCallHistory();
});
