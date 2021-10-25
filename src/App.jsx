import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Styles/Global';
import { Wrapper } from './Components/Styled/Wrapper.styled';
import { Flex } from './Styles/Flex.styled';
import Parameters from './Components/Parameters';
import Screen from './Components/Screen';
const theme = {
  colors: {
    base: '#00474B',
    active: '#9FEBDF',
    error: '#E17457',
    white: '#fff',
    input: '#F3F9FA',
    grey: '#5E7A7D',
    lightGrey: '#7F9D9F',
    result: '#26C2AE',
    nonActive: '#0D686D'
  },
  mobile: '568px'
}


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper className="App">
        <Flex>
          <Parameters />
          <Screen />
        </Flex>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
