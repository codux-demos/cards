import { createBoard } from '@wixc3/react-board';
import { MiniCards } from '../../../components/mini-cards/mini-cards';

export default createBoard({
    name: 'Mini Cards - Alternative Text',
    Board: () => (
        <MiniCards calloutText="Vestibulum ante ipsum primis in faucibus orci luctus; Curabitur iaculis vitae tellus sed hendrerit. Vestbulum fringilla massa in quam." />
    ),
    environmentProps: {
        canvasWidth: 600,
        windowHeight: 800,
    },
    isSnippet: true,
});
