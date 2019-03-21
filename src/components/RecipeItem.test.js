import React from 'react';
import { shallow } from 'enzyme';
import RecipeItem from './RecipeItem';

describe('RecipeItem', () => {
    test('Should be RecipeItem', () => {
        const RecipeItemProps = {
            recipe: {
                title: 'teste title',
                ingredients: 'champagne, ginger, ice, vodka',
                thumbnail: 'http://img.recipepuppy.com/1.jpg',
            },
            higlight: () => {
                console.log('higlight')
            },
            searchString: 'searchString',
        }

        const wrapper = shallow(<RecipeItem {...RecipeItemProps} />);
        expect(wrapper.find('div').exists()).toBe(true);
        expect(wrapper.find('img').exists()).toBe(true);
        expect(wrapper.find('h5').exists()).toBe(true);
        expect(wrapper.find('p').exists()).toBe(true);
    })

    // Add more tests here
})
