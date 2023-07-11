import InputV2 from "./InputV2.vue";

const icons = [
  'ActionDotsIcon', 'ComposeIcon', 'EyeIcon', 
  'InfoIcon', 'LocationIcon', 'ProfileIcon', 
  'TwitterIcon', 'ArrowRightIcon', 'ContactsIcon', 
  'FacebookIcon', 'InstagramIcon', 'Logo', 'ReplyIcon', 
  'UserIcon', 'BellIcon', 'DashboardIcon', 'GoogleIcon', 
  'LinkedinIcon', 'LogoIcon', 'SearchIcon', 'YoutubeIcon', 
  'BlueIcon', 'DeleteIcon', 'LinkIcon', 'LogoutIcon', 
  'SpotifyIcon', 'ClearIcon', 'EnvelopeIcon', 'InboxIcon', 
  'ListsIcon', 'MediumIcon', 'TiktokIcon'
]
const colors = ['text-primary-500','text-danger-600','text-success-600','text-secondary-800']

export default {
    component: InputV2,
    tags: ["autodocs"],
    argTypes: {
      leftIconName: {
        control: { type: "select" },
        options: icons
      },
      leftIconColor: {
          control: { type: 'select'},
          options: colors
      },
      rightIconName: {
        control: { type: "select" },
        options: icons
      },
      rightIconColor: {
          control: { type: 'select'},
          options: colors
      },
      type: {
          control: { type: 'select'},
          options: ['text','password','email','number'],
      },
      style:{
        control: {type : 'select'},
        options: ['dark','light'],
      },
      'v-model':{
        description:'The value of the input',
        control:{type: 'text'}
      },
      modelValue: { 
        description:'This prop will be hidden',
        control: { type: 'none' } 
      },
    },
};

const Template = (args) => ({
    components: { InputV2 },
    setup() {
      return { args };
    },
    template: `
      <InputV2 v-bind="args" />
      `,
});
export const Default = Template.bind({})