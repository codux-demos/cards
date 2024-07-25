import { createBoard } from '@wixc3/react-board';
import { ProductItem } from '../../../components/product-item/product-item';

export default createBoard({
    name: 'Peppermint Mocha',
    Board: () => <ProductItem />,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
    },
    isSnippet: true,
});
