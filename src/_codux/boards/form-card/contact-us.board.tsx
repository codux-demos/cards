import { createBoard } from '@wixc3/react-board';
import { FormCard } from '../../../components/form-card/form-card';

export default createBoard({
    name: 'Contact-Us Form',
    Board: () => <FormCard formType="contact" />,
    environmentProps: {
        windowHeight: 1080,
        windowWidth: 1920,
        canvasWidth: 438,
        canvasHeight: 40,
    },
    isSnippet: true,
});
