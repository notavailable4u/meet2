import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';
//import { getEvents } from '../api';

// describe('<NumberOfEvents /> component', () => {
//     let NumberOfEventsComponent;
//     beforeEach(() => {
//       //const setErrorAlert = jest.fn();
//      // NumberOfEventsComponent = render(<NumberOfEvents setNumberOfEvents={() => {}} setErrorAlert={setErrorAlert} />);
//      NumberOfEventsComponent = render(<NumberOfEvents setNumberOfEvents={() => {}} />);
//   });

describe('<NumberOfEvents /> component', ()=>{
  let NumberOfEventsComponent;
  beforeEach(()=>{
      NumberOfEventsComponent= render(
      <NumberOfEvents setCurrentNOE={() => {}} setErrorAlert={() => {}} />
      )
  })

  test('renders number of events text input', () => {
    const numberTextBox = NumberOfEventsComponent.queryByRole('textbox');
    expect(numberTextBox).toBeInTheDocument();
    expect(numberTextBox).toHaveClass('number-of-events-input');
  });

  test('default number is 32', async () => {
    const numberTextBox = NumberOfEventsComponent.queryByRole('textbox');
    expect(numberTextBox).toHaveValue("32");
  });

  
  test('number of events text box value changes when the user types in it', async () => {
    const user = userEvent.setup();
    const numberTextBox = NumberOfEventsComponent.queryByRole('textbox');
    await user.type(numberTextBox, "123")

    // 32 (the default value already written) + 123
    expect(numberTextBox).toHaveValue("32123");
  });

/***modified code */
  test('has an element with "textbox" role', () => {
    expect(NumberOfEventsComponent.queryByRole("textbox")).toBeInTheDocument();
  });

  test('default value is 32', () => {
    expect(NumberOfEventsComponent.queryByRole('textbox')).toHaveValue('32');
  });
  /**** */

  test('updates number of events when user types', async()=>{
    const numberTextbox = NumberOfEventsComponent.queryByRole('textbox');
    await userEvent.type(numberTextbox, "{backspace}{backspace}10");
    expect(numberTextbox.value).toBe("10");
});

  // test('update numberOfEvents when user types', async() => {
  //   const user = userEvent.setup();
  //   const numberOfEvents = NumberOfEventsComponent.queryByRole('textbox');
  //   await user.type(numberOfEvents, '{backspace}{backspace}10');
  //   expect(numberOfEvents).toHaveValue('10');
  //   // expect(setErrorAlert).toHaveBeenCalledWith(''); 
  // })

  
});