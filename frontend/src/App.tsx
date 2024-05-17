import { LucideMenu } from "lucide-react";
import { useState } from "react";
import styled from "styled-components";
import "./App.css";

const PageContainer = styled.div`
    .default-button {
        --icon-size: 2rem;
        --icon-line-width: 0.15rem;
        /* border: var(--border-glass); */
        border: none;
        color: var(--text);
        background-color: transparent;
        backdrop-filter: blur(5px);

        display: flex;
        padding: 0.25rem;
        border: none;
        justify-content: center;
        align-items: center;
        border-radius: 0.5rem;

        transition: var(--easing) transform;
        &:hover {
            transform: scale(1.1);
            cursor: pointer;
        }
        &:active {
            transform: scale(0.98);
        }
        svg {
            height: var(--icon-size);
            width: var(--icon-size);
            stroke-width: var(--icon-line-width);
        }
    }

    .page-title {
        position: relative;
        color: var(--text);
        margin: 1rem 1.5rem;
        font-size: 2rem;
        z-index: 2;
    }
    .channel-picker {
        font-size: 0.8rem;
        padding: 0.1rem 0.5rem;
        height: 1.5rem;
        border-radius: 2rem;
        border: var(--border-glass);
        background-color: hsla(245deg, 50%, 91%, 0.1);
        font-weight: 400;
    }
    height: 100%;
    overflow-y: auto;
    
    .container-shadow {
        z-index: 1;
        position: absolute;
        top: 3rem;
        content:"";
        width: 100vw;
        /* left: -10vw; */
        height: 5rem;
        background-color: var(--base);
        /* inset: 0; */
        /* top: -.5rem; */
        filter: blur(10px);
        pointer-events: none;
    }
    
`;

const TopBar = styled.div`
    position: sticky;
    top: 0;
    margin-bottom: 0.1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: var(--border-glass);
    height: 4rem;
    padding: 0.75rem 1rem;
    background-color: #26233a;
    z-index: 4;
    .profile {
        height: 100%;
        width: auto;
        aspect-ratio: 1/1;
        overflow: hidden;

        max-width: fit-content;
        img {
            height: 100%;
            aspect-ratio: 1/1;
            border-radius: 50%;
        }
    }

    .logo {
        width: auto;
        height: 100%;
        object-fit: contain;
        object-position: center;
        filter: hue-rotate(180deg) invert(1) brightness(69);
    }
`;

const SubBar = styled.div`
    z-index: 2;
    position: sticky;
    top: 4.5rem;
    display: flex;
    height: fit-content;
    gap: 0.5rem;
    padding: 0.25rem 1rem;
    /* overflow: auto; */
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    overflow-x: auto;
    /* overflow-y: visible; */
    --box-shadow-size: 20px;
    /* box-shadow: inset 0 calc(var(--box-shadow-size) * 2) var(--box-shadow-size)
        calc(var(--box-shadow-size) * -1) var(--base); */
`;

const ChatPreview = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: auto;
    padding: 1rem;
    color: white;
    overflow: auto;
    /* padding-top: 6rem; */
    .mention-card {
        width: 100%;
        height: fit-content;
        border-radius: 0.75rem;
        padding: 0.75rem 0.5rem;
        background-color: hsla(245deg, 50%, 91%, 0.05);
        border: var(--border-glass);
    }

    .messages {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;

        .message {
            font-size: 0.7rem;
            display: inline-block;
            width: 100%;
            align-items: center;
            .timestamp {
                display: inline-flex;
                opacity: 0.5;
            }

            .badges {
                height: 1.2em;
                vertical-align: middle;
                display: inline-flex;
                flex-wrap: no-wrap;
                gap: 0.25em;
                img {
                    height: 100%;
                    transform: translateY(-0.1em);
                }
            }

            .username {
                display: inline-flex;
                align-items: center;
                color: #ffa3ee;
                font-weight: bold;
            }
        }
    }
`;

function App() {
    const [count, setCount] = useState(0);

    return (
        <PageContainer>
            <TopBar>
                <div className="profile">
                    <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/f7f350d2-82c0-4db4-a81f-591b23771da0-profile_image-600x600.png" />
                </div>
                <img
                    className="logo"
                    src="https://f.feridinha.com/NO78H.png"
                    alt="logo"
                />

                <button className="default-button">
                    <LucideMenu />
                </button>
            </TopBar>
            <h2 className="page-title">Feed</h2>
            <div className="container-shadow"></div>
            <SubBar className="hidden-scrollbar">
                <button className="channel-picker default-button">
                    #ghiletofares
                </button>
                <button className="channel-picker default-button">
                    #robert
                </button>
                <button className="channel-picker default-button">
                    #forsen
                </button>
                <button className="channel-picker default-button">
                    #viscoitooito
                </button>
                <button className="channel-picker default-button">
                    #coito
                </button>
                <button className="channel-picker default-button">
                    #fedidinha
                </button>
                <button className="channel-picker default-button">
                    #gerson
                </button>
                <button className="channel-picker default-button">
                    #mendonça
                </button>
            </SubBar>

            <ChatPreview>
                <div className="mention-card">
                    <div className="messages">
                        <div className="message">
                            <span className="timestamp">22:20:30</span>
                            &nbsp;
                            <span className="badges">
                                <img src="https://f.feridinha.com/jYHyM.png" />
                                <img src="https://f.feridinha.com/k58RZ.png" />
                            </span>
                            &nbsp;
                            <span className="username">Feridinha:</span>
                            &nbsp;
                            <span className="content">
                                olha aqui cassio eu sei que voce ta no clube faz
                                12anos e etc mas chegou a hora de passar o
                                bastao tlg eu gostaria muito de ver voce
                                aposentar no clube mas é algo que voce nã o quer
                                e ninguem pode fazer nada mas enfim boa sorte no
                                novo clube e obrgado por tudo voce é um dos
                                maiores idolos do clube!!!! :7
                            </span>
                        </div>
                        <div className="message">
                            <span className="timestamp">22:20:30</span>
                            &nbsp;
                            <span className="badges">
                                <img src="https://f.feridinha.com/jYHyM.png" />
                                <img src="https://f.feridinha.com/k58RZ.png" />
                            </span>
                            &nbsp;
                            <span className="username">Feridinha:</span>
                            &nbsp;
                            <span className="content">
                                olha aqui cassio eu sei que voce ta no clube faz
                            </span>
                        </div>
                        <div className="message">
                            <span className="timestamp">22:20:30</span>
                            &nbsp;
                            <span className="badges">
                                <img src="https://f.feridinha.com/jYHyM.png" />
                                <img src="https://f.feridinha.com/k58RZ.png" />
                            </span>
                            &nbsp;
                            <span className="username">Feridinha:</span>
                            &nbsp;
                            <span className="content">
                                novo clube e obrgado por tudo voce é um dos
                                maiores idolos do clube!!!! :7
                            </span>
                        </div>
                    </div>
                </div>
                <div className="mention-card">
                    <div className="messages">
                        <div className="message">
                            <span className="timestamp">22:20:30</span>
                            &nbsp;
                            <span className="badges">
                                <img src="https://f.feridinha.com/jYHyM.png" />
                                <img src="https://f.feridinha.com/k58RZ.png" />
                            </span>
                            &nbsp;
                            <span className="username">Feridinha:</span>
                            &nbsp;
                            <span className="content">
                                olha aqui cassio eu sei que voce ta no clube faz
                                12anos e etc mas chegou a hora de passar o
                                bastao tlg eu gostaria muito de ver voce
                                aposentar no clube mas é algo que voce nã o quer
                                e ninguem pode fazer nada mas enfim boa sorte no
                                novo clube e obrgado por tudo voce é um dos
                                maiores idolos do clube!!!! :7
                            </span>
                        </div>
                        <div className="message">
                            <span className="timestamp">22:20:30</span>
                            &nbsp;
                            <span className="badges">
                                <img src="https://f.feridinha.com/jYHyM.png" />
                                <img src="https://f.feridinha.com/k58RZ.png" />
                            </span>
                            &nbsp;
                            <span className="username">Feridinha:</span>
                            &nbsp;
                            <span className="content">
                                olha aqui cassio eu sei que voce ta no clube faz
                            </span>
                        </div>
                        <div className="message">
                            <span className="timestamp">22:20:30</span>
                            &nbsp;
                            <span className="badges">
                                <img src="https://f.feridinha.com/jYHyM.png" />
                                <img src="https://f.feridinha.com/k58RZ.png" />
                            </span>
                            &nbsp;
                            <span className="username">Feridinha:</span>
                            &nbsp;
                            <span className="content">
                                novo clube e obrgado por tudo voce é um dos
                                maiores idolos do clube!!!! :7
                            </span>
                        </div>
                    </div>
                </div>
                <div className="mention-card">
                    <div className="messages">
                        <div className="message">
                            <span className="timestamp">22:20:30</span>
                            &nbsp;
                            <span className="badges">
                                <img src="https://f.feridinha.com/jYHyM.png" />
                                <img src="https://f.feridinha.com/k58RZ.png" />
                            </span>
                            &nbsp;
                            <span className="username">Feridinha:</span>
                            &nbsp;
                            <span className="content">
                                olha aqui cassio eu sei que voce ta no clube faz
                                12anos e etc mas chegou a hora de passar o
                                bastao tlg eu gostaria muito de ver voce
                                aposentar no clube mas é algo que voce nã o quer
                                e ninguem pode fazer nada mas enfim boa sorte no
                                novo clube e obrgado por tudo voce é um dos
                                maiores idolos do clube!!!! :7
                            </span>
                        </div>
                        <div className="message">
                            <span className="timestamp">22:20:30</span>
                            &nbsp;
                            <span className="badges">
                                <img src="https://f.feridinha.com/jYHyM.png" />
                                <img src="https://f.feridinha.com/k58RZ.png" />
                            </span>
                            &nbsp;
                            <span className="username">Feridinha:</span>
                            &nbsp;
                            <span className="content">
                                olha aqui cassio eu sei que voce ta no clube faz
                            </span>
                        </div>
                        <div className="message">
                            <span className="timestamp">22:20:30</span>
                            &nbsp;
                            <span className="badges">
                                <img src="https://f.feridinha.com/jYHyM.png" />
                                <img src="https://f.feridinha.com/k58RZ.png" />
                            </span>
                            &nbsp;
                            <span className="username">Feridinha:</span>
                            &nbsp;
                            <span className="content">
                                novo clube e obrgado por tudo voce é um dos
                                maiores idolos do clube!!!! :7
                            </span>
                        </div>
                    </div>
                </div>{" "}
                <div className="mention-card">
                    <div className="messages">
                        <div className="message">
                            <span className="timestamp">22:20:30</span>
                            &nbsp;
                            <span className="badges">
                                <img src="https://f.feridinha.com/jYHyM.png" />
                                <img src="https://f.feridinha.com/k58RZ.png" />
                            </span>
                            &nbsp;
                            <span className="username">Feridinha:</span>
                            &nbsp;
                            <span className="content">
                                olha aqui cassio eu sei que voce ta no clube faz
                                12anos e etc mas chegou a hora de passar o
                                bastao tlg eu gostaria muito de ver voce
                                aposentar no clube mas é algo que voce nã o quer
                                e ninguem pode fazer nada mas enfim boa sorte no
                                novo clube e obrgado por tudo voce é um dos
                                maiores idolos do clube!!!! :7
                            </span>
                        </div>
                        <div className="message">
                            <span className="timestamp">22:20:30</span>
                            &nbsp;
                            <span className="badges">
                                <img src="https://f.feridinha.com/jYHyM.png" />
                                <img src="https://f.feridinha.com/k58RZ.png" />
                            </span>
                            &nbsp;
                            <span className="username">Feridinha:</span>
                            &nbsp;
                            <span className="content">
                                olha aqui cassio eu sei que voce ta no clube faz
                            </span>
                        </div>
                        <div className="message">
                            <span className="timestamp">22:20:30</span>
                            &nbsp;
                            <span className="badges">
                                <img src="https://f.feridinha.com/jYHyM.png" />
                                <img src="https://f.feridinha.com/k58RZ.png" />
                            </span>
                            &nbsp;
                            <span className="username">Feridinha:</span>
                            &nbsp;
                            <span className="content">
                                novo clube e obrgado por tudo voce é um dos
                                maiores idolos do clube!!!! :7
                            </span>
                        </div>
                    </div>
                </div>{" "}
                <div className="mention-card">
                    <div className="messages">
                        <div className="message">
                            <span className="timestamp">22:20:30</span>
                            &nbsp;
                            <span className="badges">
                                <img src="https://f.feridinha.com/jYHyM.png" />
                                <img src="https://f.feridinha.com/k58RZ.png" />
                            </span>
                            &nbsp;
                            <span className="username">Feridinha:</span>
                            &nbsp;
                            <span className="content">
                                olha aqui cassio eu sei que voce ta no clube faz
                                12anos e etc mas chegou a hora de passar o
                                bastao tlg eu gostaria muito de ver voce
                                aposentar no clube mas é algo que voce nã o quer
                                e ninguem pode fazer nada mas enfim boa sorte no
                                novo clube e obrgado por tudo voce é um dos
                                maiores idolos do clube!!!! :7
                            </span>
                        </div>
                        <div className="message">
                            <span className="timestamp">22:20:30</span>
                            &nbsp;
                            <span className="badges">
                                <img src="https://f.feridinha.com/jYHyM.png" />
                                <img src="https://f.feridinha.com/k58RZ.png" />
                            </span>
                            &nbsp;
                            <span className="username">Feridinha:</span>
                            &nbsp;
                            <span className="content">
                                olha aqui cassio eu sei que voce ta no clube faz
                            </span>
                        </div>
                        <div className="message">
                            <span className="timestamp">22:20:30</span>
                            &nbsp;
                            <span className="badges">
                                <img src="https://f.feridinha.com/jYHyM.png" />
                                <img src="https://f.feridinha.com/k58RZ.png" />
                            </span>
                            &nbsp;
                            <span className="username">Feridinha:</span>
                            &nbsp;
                            <span className="content">
                                novo clube e obrgado por tudo voce é um dos
                                maiores idolos do clube!!!! :7
                            </span>
                        </div>
                    </div>
                </div>
            </ChatPreview>
        </PageContainer>
    );
}

export default App;
