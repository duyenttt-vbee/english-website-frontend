import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { getCards } from '../../apis/card';
import { removeToken } from '../../utils/localStorage';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CardItem from '../../components/CardItem';
import WelcomeCard from '../../components/WelcomeCard';
import CardButtons from '../../components/CardButtons';
import { StyledGrid } from './index.style';

const LessonDetailContainer = ({ lessonId }) => {
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();

  const handleReturn = () => {
    navigate('/lesson');
  };

  const fetchCards = async () => {
    const { result } = await getCards();
    if (result) {
      const filteredCards = result.cards.filter(
        (card) => card.lessonId === lessonId,
      );
      setCards(filteredCards);
    }
  };

  const handleLogout = () => {
    removeToken();
  };

  const handleNextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrevCard = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  useEffect(() => {
    fetchCards(lessonId);
  }, []);

  const currentCard = cards[currentIndex];

  return (
    <>
      <CssBaseline />
      <Header handleLogout={handleLogout} />
      <main>
        <WelcomeCard />
        <StyledGrid>
          {currentCard && <CardItem card={currentCard} key={currentCard.id} />}
        </StyledGrid>
        <CardButtons
          onPrevCard={handlePrevCard}
          onNextCard={handleNextCard}
          onReturn={handleReturn}
          currentIndex={currentIndex}
        />
      </main>
      <Footer />
    </>
  );
};

export default LessonDetailContainer;
