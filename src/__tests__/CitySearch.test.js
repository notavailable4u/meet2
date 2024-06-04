import { render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CitySearch from '../components/CitySearch';
import App from '../App';
import { extractLocations, getEvents } from '../api';

describe('<CitySearch /> component', () => {
    let CitySearchComponent;
    beforeEach(() => {
      //const setInfoAlert = jest.fn();
        CitySearchComponent = render(<CitySearch 
          allLocations={[]}
          setCurrentCity={() => { }}
          //  setInfoAlert={setInfoAlert}
          setInfoAlert={() => { }}
        />);
    })

  test('renders text input', () => {
    const cityTextBox = CitySearchComponent.queryByRole('textbox');
    expect(cityTextBox).toBeInTheDocument();
    expect(cityTextBox).toHaveClass('city');
  });

    test('suggestion list is hidden default', () => {
    const suggestionList = CitySearchComponent.queryByRole('list');
    expect(suggestionList).toBeFalsy();
  });

  test('renders a suggestionList when city box is clicked', async() => {
    const user = userEvent.setup();
    const cityTextBox = CitySearchComponent.queryByRole('textbox');
    await user.click(cityTextBox);

    const suggestionList = CitySearchComponent.queryByRole('list');
    expect(suggestionList).toBeInTheDocument();
    expect(suggestionList).toHaveClass('suggestion');
  });


  test('updates suggestionList correctly when user types in textbox', async() => {
    const user = userEvent.setup();
    const allEvents = await getEvents();
    const allLocations = extractLocations(allEvents);
    CitySearchComponent.rerender(<CitySearch allLocations={allLocations} />);
    // CitySearchComponent.rerender(<CitySearch allLocations={allLocations} setCurrentCity={() => { }} 
    setInfoAlert={() => { }}/>);

    //User types 'Berlin' in textbox
    const cityTextBox = CitySearchComponent.queryByRole('textbox');
    await user.type(cityTextBox, 'Berlin');

    //filter allLocations to locations matching "Berlin"
    const suggestions = allLocations ? allLocations.filter((location) => {
        return location.toUpperCase().indexOf(cityTextBox.value.toUpperCase()) > -1;
    }) : [];

    // get all <li> elements inside the suggestion list
    const suggestionList = CitySearchComponent.queryAllByRole('listitem');
    expect(suggestionList).toHaveLength(suggestions.length + 1);
    for ( let i = 0; i < suggestions.length; i += 1 ){
        expect(suggestionList[i].textContent).toBe(suggestions[i]);
    }
  });

  test('renders suggestion text in the textbox after clicking suggestion', async() => {
    const user = userEvent.setup();
    const allEvents = await getEvents();
    const allLocations = extractLocations(allEvents);
    //const setInfoAlert = jest.fn();
    CitySearchComponent.rerender(<CitySearch  
      allLocations={allLocations}
      setCurrentCity={() => { }} 
      setInfoAlert={setInfoAlert}
       />);

    const cityTextBox = CitySearchComponent.queryByRole('textbox');
    await user.type(cityTextBox, 'Berlin');

    // suggestion content for location will be 'Berlin, Germany'
    const BerlinGermanySuggestion = CitySearchComponent.queryAllByRole('listitem')[0];
       // const Berlinsuggestion = CitySearchComponent.queryAllByRole('listitem')[0];

    //await user.click(Berlinsuggestion);
    await user.click(BerlinGermanySuggestion);

    expect(cityTextBox).toHaveValue(BerlinGermanySuggestion.textContent);
    //expect(cityTextBox).toHaveValue(Berlinsuggestion.textContent);

    //expect(setInfoAlert).toHaveBeenCalledWith('');
  });
});


describe('<CitySearch/>, integration', () => {

  test('renders suggestions list when the app is rendered.', async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    const CitySearchDOM = AppDOM.querySelector('#city-search');
    const cityTextBox = within(CitySearchDOM).queryByRole('textbox');
    await user.click(cityTextBox);

    const allEvents = await getEvents();
    const allLocations = extractLocations(allEvents);

    const suggestionListItems = within(CitySearchDOM).queryAllByRole('listitem');
    expect(suggestionListItems.length).toBe(allLocations.length + 1);
    
 });
})