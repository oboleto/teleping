import styled from 'styled-components'
import Terminal from './Terminal'

export default function Screen() {
    const Screen = styled.div`
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
    background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(255, 255, 255, 0.05) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.03), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.03));
    z-index: 2;
    background-size: 100% 3pt, 3pt 100%;
    pointer-events: none;
}

&:after {
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

@keyframes flicker {
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
    }
  }

`


    return (
        <Screen id='screen'>
            <Terminal />
        </Screen>
    )
}