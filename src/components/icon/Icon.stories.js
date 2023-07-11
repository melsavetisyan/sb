import Icon from "./Icon.vue";

export default {
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: { type: "select" },
      options: ['UserIcon','YoutubeIcon','DeleteIcon','EyeIcon','SpotifyIcon'],
    },
    iconColor: {
        control: { type: 'radio'},
        options: ['text-primary-500','text-danger-600','text-success-600','text-secondary-800'],
     }
  },
};

const Template = (args) => ({
  components: { Icon },
  setup() {
    return { args };
  },
  template: `
    <Icon v-bind="args" />
    `,
});

export const Default = Template.bind({})
Default.args = {
    name:'UserIcon',
    iconColor: 'text-danger-600'
}