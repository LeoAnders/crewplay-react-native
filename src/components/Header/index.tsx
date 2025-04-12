import { SafeAreaView } from 'react-native-safe-area-context';
import { Container, Logo, BackIcon, BackButton } from "./styles";
import logoImg from '@assets/logo.png';

type Props = {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {
  return (
    <SafeAreaView>
      <Container>
        {showBackButton &&
          <BackButton>
            <BackIcon />
          </BackButton>
        }
        <Logo source={logoImg} />
      </Container>
    </SafeAreaView>
  );
}