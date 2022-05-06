import {render} from '../../../utils/test-utils';
import PunchListScreen from '../punch-list-screen';

const setup = () => render(<PunchListScreen />);

describe('Punch List Component', () => {
  it('Should render 4 punch cards', () => {
    const {getAllByText} = setup();
    const punchCardsCount = getAllByText('Projeto');
    
    expect(punchCardsCount.length).toBe(4);
  });
});
