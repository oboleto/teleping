import styled from 'styled-components';
import Info from './Info';

export default function Terminal() {
    const Terminal = styled.div`
    filter: blur(.6px) grayscale(20%) brightness(120%);
    color: white;
    font-family: 'Console', 'Noto Emoji', Console, monospace;
    text-shadow: 
    0 0 2rem rgba(255, 255, 255, 0.4),
    0 0 .3rem rgba(255, 255, 255, 0.6);
    /* 0 0 100px rgba(255, 255, 255, 0.2); */
    font-size: 1.2em;
    line-height: 1rem;
    padding-top: 1rem;
    padding-bottom: 3rem;
    padding-right: .5rem;
    padding-left: 1.25rem;
    border-radius: .2rem;
    height: 100%;
    box-sizing: border-box;
    /* overflow-y: auto; */
    overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-width: thin;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 500px) {
            font-size: 1rem;
            transition: font-size .25s;
      }

      .message-item {
        margin: unset;
        margin-top: .5rem;
        display: inline;
        width: 50ch;
    }


    .message-item:last-child:after {
        content: '█';
        /* content: '_'; */
        display: inline-block;
        left: 0;
        height: .2rem;
        z-index: 10;
        color: white;
        margin-left: 0.5ch;
        transition: none;
        animation: blink .5s step-start infinite;
    }
    @keyframes blink {
        50% {
            opacity: 0;
          }
    }
    `

    return (
        <Terminal id='terminal'><Info /></Terminal>
    )
}