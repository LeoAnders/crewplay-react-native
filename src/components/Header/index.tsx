import { useNavigation } from '@react-navigation/native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Container, Logo, BackIcon, BackButton } from "./styles";
import logoImg from '@assets/logo.png';

type Props = {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate('groups');
  }

  return (
    <SafeAreaView>
      <Container>
        {showBackButton &&
          <BackButton onPress={handleGoBack}>
            <BackIcon />
          </BackButton>
        }
        <Logo source={logoImg} />
      </Container>
    </SafeAreaView>
  );
}