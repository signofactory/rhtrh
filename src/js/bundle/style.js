// Create the styles we need
const s = document.createElement('style');

export const injectStyle = () => {
  s.innerText = `
  ._rhtrh__optionsButton{
    display: flex;
  }

  ._rhtrh__modal{
    width: 300px;
    display: flex;
    visibility: hidden;
    flex-direction: row;
    align-items: center;
    background: white;
    position: absolute;
    top: 50px;
    border-radius: 8px;
    background: #fff;
    padding: 10px;
  }

  ._rhtrh__modal.show {
    visibility: visible;
  }

  ._rhtrh__modal>p{
    color: #202124;
    font-size: 13px;
    margin: 0;
    margin-right: 10px;
    font-weight: bold;
  }

  ._rhtrh__modal>select{
    height: 24px;
    flex: 1;
  }
`;

  document.body.append(s);
};
