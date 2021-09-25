import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';
import GeneralArea from '../../components/GeneralArea';
import InputSearch from '../../components/InputSearch';
import { Toggle, Wrapper } from './style';

function Home({ toggleTheme }) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Toggle>
        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          offColor={colors.offColor}
          onColor={colors.primary}
        />
      </Toggle>
      <InputSearch />
      <GeneralArea />
    </Wrapper>
  );
}

export default Home;