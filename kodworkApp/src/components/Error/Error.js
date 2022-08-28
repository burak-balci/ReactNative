import React from 'react';
import AnimatedLottieView from 'lottie-react-native';

const Loading = () => {
  return (
    <AnimatedLottieView
      source={require('../../assets/error.json')}
      autoPlay
      loop
    />
  );
};

export default Loading;
