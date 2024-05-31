import { View, ImageBackground,  } from 'react-native'
import { styles } from './styles'

type Props = {
  posY: number,
}

const vermelhoOne = {uri:'https://www.angrybirds.com/wp-content/uploads/2022/05/optimized-ABCOM_202203_1000x1000_CharacterDimensio_Red_Classic.png'};
export function VermelhoOne({ posY }: Props) {
  return (
    <View style={[styles.container, {bottom: posY}]}>

       <ImageBackground source={vermelhoOne} style={styles.img}>
       </ImageBackground>
      
    </View>
  )
}