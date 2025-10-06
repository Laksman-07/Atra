'use client';

import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const WidgetContainer = styled.div<{ $active: boolean }>`
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;

  .social-links {
    display: ${({ $active }) => ($active ? 'flex' : 'none')};
    flex-direction: column;
    margin-top: 10px;
    align-items: center;
    animation: ${fadeIn} 0.3s ease-in-out;
  }

  .social-links a {
    margin: 5px 0;
    text-decoration: none;
  }

  .social-links img {
    width: 36px;
    height: 36px;
    transition: transform 0.2s;
  }

  .social-links img:hover {
    transform: scale(1.1);
  }
`;

const MainButton = styled.button`
  background: #333;
  color: #fff;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 22px;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  transition: background 0.3s, transform 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #555;
    transform: scale(1.05);
  }
`;


const SocialWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <WidgetContainer $active={isOpen}>
      <MainButton onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Social Links">
        ☰
      </MainButton>
      <div className="social-links">
        <a href="https://www.instagram.com/atra.ssc/" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" className="w-10 h-10" />
        </a>
        <a href="https://wa.me/9600411808" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" className="w-10 h-10" />
        </a>
      </div>
    </WidgetContainer>
  );
};

export default SocialWidget;