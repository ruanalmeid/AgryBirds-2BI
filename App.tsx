import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, ImageBackground,
} from 'react-native';
import { styles } from './styles';
import { VermelhoOne } from './components/vermelhoOne/index';
import { VermelhoTwo } from './components/vermelhoYwo/index';

let timer: number;

export default function App() {
  const [gravity, setGravity] = useState(0.98);
  const [upForce, setUpForce] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [posY, setPosY] = useState(0);
  const [posX, setPosX] = useState(0);

  useEffect(() => {
    const applyGravity = () => {
      let newUpForce = upForce - gravity;
      newUpForce = newUpForce < 0 ? 0 : newUpForce;
      setUpForce(newUpForce);

      let newSpeed = speed + (gravity - newUpForce / 2);
      setSpeed(newSpeed);

      let newPosY = posY - newSpeed;

      let newPosX = posX - newSpeed;

      if (newPosY < 0 && newPosX < 0) {
        newPosY = 0;
        newPosX = 0;
        setSpeed(0);
      }
      setPosY(newPosY);
      setPosX(newPosX)
    };

    clearTimeout(timer);
    timer = setTimeout(applyGravity, 50);
  }, [gravity, upForce, speed, posY, posX]);


  const handleForceButton = () => {
    setUpForce(5);
  };

  const handleForceButtonTwo = () => {
    setUpForce(10);
  };

  const background = { uri: 'https://www.papeldeparede.etc.br/fotos/wp-content/uploads/angry_birds_ao_ataque.jpg' };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.area}>
        <ImageBackground
          source={background}
          style={styles.backgroundImg}>
          <View>
            <VermelhoOne posY={posX} />
          </View>
          
          <View>
            <VermelhoTwo posY={posX} /> 
          </View>
        </ImageBackground>
      </View>

      <View style={styles.control}>
        <View>
          <Text style={styles.controlText}>UpForce: {upForce.toFixed(0)}</Text>
          <Text style={styles.controlText}>Speed: {speed.toFixed(0)}</Text>
          <Text style={styles.controlText}>PosY: {posY.toFixed(0)}</Text>
          <Text style={styles.controlText}>Posx: {posX.toFixed(0)}</Text>
        </View>

        <TouchableOpacity
          style={styles.controlButton}
          onPress={handleForceButton}>
          <Text style={styles.controlText}>CLICK</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.controlButton}
          onPress={handleForceButtonTwo}>
          <Text style={styles.controlText}>CLICK</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

