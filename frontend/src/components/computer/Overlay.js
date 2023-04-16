import styled from 'styled-components';

export default function Overlay() {
    const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2) 40%, rgba(0, 0, 0, 0.4));
    animation: scan-animation 10s linear infinite;
    
    @keyframes scan-animation {
        0% {
          transform: translateY(-100%);
        }
        100% {
          transform: translateY(100%);
        }
      }
    
    `

    return (
        <Overlay></Overlay>
    )
}