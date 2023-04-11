import React, { useState, useEffect, useRef } from 'react'
import './computer.css'


export default function Computer() {
    const [messageQueue, setMessageQueue] = useState([]);
    const typing = useRef(false)
    let isDisplayingMessage = false;
    let isAddingToQueue = false;

    const infoContent = {
        "THE TELEPING CORPORATION - bltOS 3.11 ttyS0 1200 1200\n\n": "30",
        "\n": "1000",
        "This computer system is for authorized use only. The use of this facility may be monitored for computer security purposes. Any unauthorized access to this system is prohibited and is subject to criminal and civil penalties under Federal Laws including but not limited to Public Laws 83-703 and 99-474.\n": "10",
        "\n\n": "1000",
        "\nSYSTEM DUMP DATA BACK-PRESSURE HIGH: ": "50",
        "USE BACKUP ACCOUNT TO RELIEVE\n": "100",
        "\n\n": "1000",
        "\n\nbltOS login:": "50",
        " ": "500",
        "guest\n\n": "300",
        "[guest] password:": "50",
        " ": "500",
        " ************\n\n": "300",
        "\n": "2000",
        " _       _     _   _____ _____ \n": "10",
        "| |_ ___| |___| |_|     |   __|\n": "10",
        "| . | . | | -_|  _|  |  |__   |\n": "10",
        "|___|___|_|___|_| |_____|_____| v3.11.7": "10",
        "\n ": "2000",
        "\n\n\nguest@bltOS:$": "10",
        "\xA0": "2000",
        "./teleping.sh\n\n": "150",
        " \n": "1000",
        "Starting worker ": "30",
        "[██████████]": "500",
        " Done.\n\n": "30",
    };


    const chatRef = useRef(null);

    function typeMessage(message, target, typingSpeed) {
        const typingInterval = typingSpeed / message.length;
        let i = 0;

        Array.from(message).forEach((char) => {
            setTimeout(() => {
                target.textContent += char;
            }, i * typingInterval);
            i++;
            if (chatRef.current) {
                chatRef.current.scrollTop = chatRef.current.scrollHeight;
            }
        });
    }
    
    

    function displayNextMessage() {
        const chat = document.getElementById('terminal');
        if (messageQueue.length === 0) {
            isDisplayingMessage = false;
            return;
        }

        const { channel, user, message } = messageQueue.shift();

        const item = document.createElement('span');
        item.classList.add('message-item');
        item.innerHTML = `<span className="channel">${channel}:</span> <span className="user">${user}:</span> <span className="message-text"></span>`;
        typeMessage(message, item.querySelector('.message-text'), 300);
        setTimeout(() => {
            displayNextMessage();
        }, 500);
            chat.appendChild(item);
        setTimeout(() => {
            item.classList.add('hide');
            setTimeout(() => {
                item.remove();
            }, 61000);
        }, 60000);
    }

    function connectWebSocket() {
        const ws = new WebSocket('wss://ws.boletinho.com');
        // const ws = new WebSocket('ws://localhost:8080');

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            // console.log(data);
            if (!isAddingToQueue) {
                isAddingToQueue = true;
                setMessageQueue((prevQueue) => {
                    const newQueue = [...prevQueue, data];
                    if (newQueue.length > 100) {
                        newQueue.shift();
                    }
                    return newQueue;
                });
                if (!isDisplayingMessage) {
                    isDisplayingMessage = true;
                    displayNextMessage();
                }
                isAddingToQueue = false;
            }
        };

        ws.addEventListener('open', (event) => {
            console.log('Conexão estabelecida');
        });

        ws.addEventListener('close', (event) => {
            console.log('Conexão encerrada');
            setTimeout(() => {
                connectWebSocket();
            }, 1000);
        });
    }

    useEffect(() => {
        const info = document.getElementById('info');
        if (typing.current) return
        typing.current = true
        if (info) {
            async function showInfo() {
                for (const prop in infoContent) {
                    const itemInfo = document.createElement('span');
                    itemInfo.classList.add('info');
                    const message = infoContent[prop];
                    const typingDelay = parseInt(message) || 1000;
                    const words = prop.split(/\s+/); // dividir a string em um array de palavras
                    const messageLength = words.join(' ').length; // juntar as palavras com espaço e contabilizar o comprimento da string
                    typeMessage(prop, itemInfo, messageLength * typingDelay);
                    info.appendChild(itemInfo);
                    await new Promise((resolve) =>
                        setTimeout(resolve, messageLength * typingDelay)
                    );
                }
            }
            showInfo();
        }
    }, []);

    useEffect(() => {
        connectWebSocket();
    }, []);

    return (
        <div>
            <div className="crt-overlay"></div>
            <div id="screen">
                <div id="terminal">
                    <div id="info"></div>
                </div>
            </div>
        </div>
    )

}
