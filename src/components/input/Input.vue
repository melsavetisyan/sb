<script setup>
import { defineProps, defineEmits, computed, ref } from "vue";
import InputEye from "./eye/InputEye.vue";

const emit = defineEmits(["input", "blur", "focus"]);

const props = defineProps({
  modelValue:{
    type:String,
    required:true
  },
  label: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    default: () => "form-input-" + Math.random().toString(36).substring(7),
  },
  type: {
    type: String,
    default: "text",
  },
  name: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: false,
  },
  error: {
    type: String,
    default: "",
  },
  styles:{
    type: String,
    default: 'none'
  },
  dark:{
    type: Boolean,
    default: false
  },
  message:{
    type: String,
    default: ""
  },
  icon:{
    type: Object,
    required: false,
    default: null
  },
  labelImportant:{
    type: Boolean,
    required: false,
    default: false
  }
});

const showPassword = ref(false);
const val = ref(props.modelValue);
const blured = ref(false)
const styles = {
    search: 'py-4 pl-9 pr-8 text-xl text-secondary-100 w-full border border-secondary-300 rounded-xl outline-0 sticky top-0',
    // none: ' ',
    // createContact: 'rounded-lg bg-secondary-600 border-0 text-white-900 p-3.5 py-2.5 pl-3.5',
    // searchDark: 'bg-secondary-600 border border-secondary-300 text-black text-sm rounded-lg placeholder-secondary-100 focus:bg-white focus:ring-0 focus:border-white block text-white-900 w-full pl-10 p-2.5'
}

const inputType = computed(() => {
  if (props.type !== "password") return props.type;
  return props.type === "password" && !showPassword.value ? "password" : "text";
});

const isValid = computed(() =>
  props.error && props.required
    ? " border-red-600 "
    : val.value && props.required
    ? " border-green-600 "
    : blured.value && !val.value && props.required
    ? " border-red-600 "
    : " border-secondary-300 "
);
function inputEvent(event) {
  emit("update:modelValue", event.target.value);
  val.value = event.target.value;
}
function blurEvent(){
  emit('blur')
  blured.value = true;
}
function togglePasswordVisibility() {
  showPassword.value = !showPassword.value;
}
const hasIcon = computed(()=> props.icon ? " pl-9 ":' ')

</script>

<template>
  <div class="flex flex-col items-start w-full h-fit ">
    <label
        v-if="label"
        :class="{ 'block mb-1.5 text-xs text-secondary-100 font-maisonBook uppercase pl-3.5': dark}"
        :for="id"
    >
        {{label }} <span class="text-red-500" v-if="labelImportant">*</span>
    </label>
    <div class="flex relative w-full h-fit " >
        <component v-if="icon" :is="icon" class="absolute left-3 top-1/2 transform -translate-y-1/2 "/>
        <img
          v-if="iconLeftOrRight==='left'" 
          class="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 w-7"
          src="./images/search.svg" alt=""
        >
      <input
        :id="id"
        :type="inputType"
        :name="name"
        :placeholder="placeholder"
        :value="modelValue"
        :disabled="disabled"
        :required="required"
        :class="isValid + styles[props.styles] + hasIcon"
        class="w-full h-full "
        @input="inputEvent"
        @blur="blurEvent"
        @focus="$emit('focus')"
      />
        <!-- <component v-if="icon && iconLeftOrRight==='right'" :is="icon" class="absolute left-3 top-1/2 transform -translate-y-1/2 "/> -->
      <InputEye
        v-if="type === 'password'"
        class="absolute right-2 top-1/2 transform -translate-y-1/2"
        :isOpen="showPassword"
        @click="togglePasswordVisibility"
      />
    </div>
    <div v-if="error" class="text-red-600">{{ error }}</div>
    <span v-if="message" :class="{ 'block mt-2 text-xs text-secondary-100 px-3.5 leading-5' :dark}"><p>{{ message }}</p></span>
  </div>
</template>
