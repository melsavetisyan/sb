import Input from "./Input.vue";

export default {    
    component: Input,
    tags: ["autodocs"],
    argTypes: {
        type: {
        options: ['text', 'password'],
        control: { type: 'radio' },
      },
        styles:{
            options: [
              'search', 
            // 'none',
            // 'createContact', 
            // 'searchDark'
          ],
            control: { type: 'radio'}
        },
        iconLeftOrRight:{
          options: ['left', 'right'],
          control: { type: 'radio'}
        }
    }
};

const Template = (args) => ({
    components: { Input },
    setup() {
      return { args };
    },
    template: '<Input v-bind="args" />',
});

export const Default = Template.bind({})
Default.args = {
  styles: 'search'
}