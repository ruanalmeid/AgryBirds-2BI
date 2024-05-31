import { View, ImageBackground,  } from 'react-native'
import { styles } from './styles'

type Props = {
  posY: number,
}

const vermelhoTwo = {uri:'https://www.angrybirds.com/wp-content/uploads/2022/05/optimized-ABCOM_202203_1000x1000_CharacterDimensio_Red_SummerMadness.png'};
export function VermelhoTwo({ posY }: Props) {
  return (
    <View style={[styles.container, {bottom: posY}]}>

       <ImageBackground source={vermelhoTwo} style={styles.img}>
       </ImageBackground>
      
    </View>
  )
}