import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import  Routes  from 'src/routes';
import theme from './src/theme';
import { SignIn } from 'src/screens/SignIn';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
        <StatusBar style='dark' />
        <Routes />
    </ThemeProvider>

  );
}
