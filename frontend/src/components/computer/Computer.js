export default function Computer() {
    const chat = document.getElementById("terminal")
    const info = document.getElementById("info")
    let messageQueue = []
    let isDisplayingMessage = false
    let isAddingToQueue = false

    function typeMessage(message, target, typingSpeed) {
        const typingInterval = typingSpeed / message.length
        let i = 0

        Array.from(message).forEach(char => {
            setTimeout(() => {
                target.textContent += char
            }, i * typingInterval)
            i++
            chat.scrollTop = chat.scrollHeight
        })
    }

    function displayNextMessage() {
        if (messageQueue.length === 0) {
            isDisplayingMessage = false
            return
        }

        const { channel, user, message, info } = messageQueue.shift()
        const item = document.createElement("span")

        if (info) {
            item.innerHTML = `<span class="info"></span>`
            typeMessage(message, item.querySelector(".info"), 1000)
            setTimeout(() => {
                displayNextMessage()
            }, 1000)
        } else {
            item.classList.add("message-item")
            item.innerHTML = `<span class="channel">${channel}:</span> <span class="user">${user}:</span> <span class="message-text"></span>`
            typeMessage(message, item.querySelector(".message-text"), 300)
            setTimeout(() => {
                displayNextMessage()
            }, 500)
        }
        chat.appendChild(item)

        setTimeout(() => {
            item.classList.add("hide")
            setTimeout(() => {
                item.remove()
            }, 61000)
        }, 60000)
    }

    function connectWebSocket() {
        const ws = new WebSocket("wss://ws.boletinho.com")
        // const ws = new WebSocket('ws://localhost:8080');

        ws.onmessage = event => {
            const data = JSON.parse(event.data)
            if (!isAddingToQueue) {
                isAddingToQueue = true
                messageQueue.push(data)
                if (messageQueue.length > 100) {
                    messageQueue.shift()
                }
                if (!isDisplayingMessage) {
                    isDisplayingMessage = true
                    displayNextMessage()
                }
                isAddingToQueue = false
            }
        }

        ws.addEventListener("open", event => {
            console.log("Conexão estabelecida")
        })

        ws.addEventListener("close", event => {
            console.log("Conexão encerrada")
            setTimeout(() => {
                connectWebSocket()
            }, 1000)
        })
    }

    const infoContent = {
        "THE TELEPING CORPORATION - bltOS 3.11 ttyS0 1200 1200\n\n": "30",
        "\n": "1000",
        "This computer system is for authorized use only. The use of this facility may be monitored for computer security purposes. Any unauthorized access to this system is prohibited and is subject to criminal and civil penalties under Federal Laws including but not limited to Public Laws 83-703 and 99-474.\n":
            "10",
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
        " Done.\n\n": "30"
    }

    async function showInfo() {
        for (const prop in infoContent) {
            const itemInfo = document.createElement("Span")
            itemInfo.classList.add("info")
            const message = infoContent[prop]
            const typingDelay = parseInt(message) || 1000
            const words = prop.split(/\s+/) // dividir a string em um array de palavras
            const messageLength = words.join(" ").length // juntar as palavras com espaço e contabilizar o comprimento da string
            typeMessage(prop, itemInfo, messageLength * typingDelay)
            info.appendChild(itemInfo)
            await new Promise(resolve =>
                setTimeout(resolve, messageLength * typingDelay)
            )
        }

        // chama a função connectWebSocket() após todas as linhas serem escritas
        connectWebSocket()
    }

    showInfo()

    // css
    const Span = styled.span`
        display: none !important;
        transition: all 1s;
        overflow: hidden;
        margin: 0 !important;
        opacity: 0;
        animation: hide 1s linear 0s forwards;
    `

    const screen = styled.div`
        height: 100%;
        width: 100%;
        padding-right: 1.25rem;
        overflow: hidden;
        box-sizing: border-box;

        &:before {
            content: " ";
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background: linear-gradient(
                    rgba(18, 16, 16, 0) 50%,
                    rgba(255, 255, 255, 0.05) 50%
                ),
                linear-gradient(
                    90deg,
                    rgba(255, 0, 0, 0.03),
                    rgba(0, 255, 0, 0.01),
                    rgba(0, 0, 255, 0.03)
                );
            z-index: 2;
            background-size: 100% 3pt, 3pt 100%;
            pointer-events: none;
        }

        &after {
            content: " ";
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background: rgba(18, 16, 16, 0.1);
            opacity: 0;
            z-index: 2;
            pointer-events: none;
            animation: flicker 0.2s infinite;
        }
    `
    const terminal = styled.div`
        filter: blur(0.6px) grayscale(20%) brightness(120%);
        color: white;
        font-family: "Console", "Noto Emoji", Console, monospace;
        text-shadow: 0 0 2rem rgba(255, 255, 255, 0.4),
            0 0 0.3rem rgba(255, 255, 255, 0.6);

        font-size: 1.2em;
        line-height: 1rem;
        padding-top: 1rem;
        padding-bottom: 3rem;
        padding-right: 0.5rem;
        padding-left: 1.25rem;
        border-radius: 0.2rem;
        height: 100%;
        box-sizing: border-box;
        overflow-y: scroll;
        overflow-x: hidden;
        scrollbar-width: thin;
        display: flex;
        flex-direction: column;

        @media only screen and (max-width: 500px) {
            font-size: 1rem;
            transition: font-size 0.25s;
        }
    `

    //css animations
    const hide = keyframes`
    to {
      
        /* background-color: white; */
      }
    `

    const blink = keyframes`
     50% {
        opacity: 0;
      }
}
    `

    const flicker = keyframes`
    0% {
        opacity: 0.27861;
        }
        5% {
        opacity: 0.34769;
        }
        10% {
        opacity: 0.23604;
        }
        15% {
        opacity: 0.90626;
        }
        20% {
        opacity: 0.18128;
        }
        25% {
        opacity: 0.83891;
        }
        30% {
        opacity: 0.65583;
        }
        35% {
        opacity: 0.67807;
        }
        40% {
        opacity: 0.26559;
        }
        45% {
        opacity: 0.84693;
        }
        50% {
        opacity: 0.96019;
        }
        55% {
        opacity: 0.08594;
        }
        60% {
        opacity: 0.20313;
        }
        65% {
        opacity: 0.71988;
        }
        70% {
        opacity: 0.53455;
        }
        75% {
        opacity: 0.37288;
        }
        80% {
        opacity: 0.71428;
        }
        85% {
        opacity: 0.70419;
        }
        90% {
        opacity: 0.7003;
        }
        95% {
        opacity: 0.36108;
        }
        100% {
        opacity: 0.24387;
        }`


        const scan-animations = keyframes`
        0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }`




    return (
        <div>
            <div class="crt-overlay"></div>
            <screen>
                <terminal>
                    <div id="info"></div>
                </screen>
            </terminal>
        </div>
    )
}
