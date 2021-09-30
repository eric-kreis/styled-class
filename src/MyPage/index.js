import { HeaderS, ItemS, ListS, MainS, MyLinkS } from './styles';

export function MyPage({ toggleTheme }) {
  return (
    <div>
      <HeaderS>
        <h1>Boas vindas ao styled-components</h1>
      </HeaderS>
      <MainS>
        <ListS>
          <ItemS>boas vindas</ItemS>
          <li>boas vindas</li>
          <ItemS>boas vindas</ItemS>
          <li>boas vindas</li>
          <ItemS>boas vindas</ItemS>
        </ListS>
        <button onClick={toggleTheme}>Mudar cor</button>
        <MyLinkS to="/">Sou um link</MyLinkS>
      </MainS>
    </div>
  )
}
