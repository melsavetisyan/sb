<template>
  <div class="text-sm flex flex-col">
    <label
      v-if="label"
      class="block mb-1.5 text-xs text-secondary-100 font-maisonBook uppercase pl-2.5"
      :for="idCreator"
    >
      {{ label }} <span class="text-red-500" v-if="required">*</span>
    </label>
    <div
      class="flex w-full h-9 items-center gap-2 bg-white rounded-lg relative align-middle"
    >
      <IconComponent
        v-if="leftIconName"
        :name="leftIconName"
        :iconColor="leftIconColor"
        class="absolute left-3.5"
      />
      <input
        class="h-full border-0 p-2.5 m-0 text-sm focus:outline-none rounded-lg w-full focus:border-2"
        :class="[{ 'pl-10': leftIconName }, styles[style], {'focus:border-primary-600': !hasError}]"
        :type="inputType"
        :id="idCreator"
        :name="idCreator"
        :placeholder="placeholder"
        :value="val"
        @input="inputEvent"
        @blur="blurEvent"
        @focus="focusEvent"
      />
      <InputEye
        v-if="type === 'password'"
        class="absolute right-2 text-gray-500 top-1/2 transform -translate-y-1/2"
        :isOpen="showPassword"
        @click="togglePasswordVisibility"
      />
      <IconComponent
        name="ClearIcon"
        v-if="leftIconName	=== 'SearchIcon'"
        class="absolute text-gray-500 right-2 top-1/2 transform -translate-y-1/2 m-0 p-0"
        @click="removeValue"
      />
      <IconComponent
        v-if="rightIconName"
        :name="rightIconName"
        :iconColor="rightIconColor"
        class="absolute right-3.5"
      />
    </div>
    <span v-if="errorMessage && hasError || !isEmailValid" class="text-red-600 pl-2.5 mt-1">{{ errorMessage }}</span>
    <span
      v-if="message"
      class="'block mt-1 text-xs text-secondary-100 pl-2.5 leading-5'"
    > <p>{{ message }}</p> </span>
  </div>
</template>

<script setup>
import IconComponent from "../icon/Icon.vue";
import InputEye from "./eye/InputEye.vue";
import { defineProps, defineEmits, ref, computed } from "vue";

const emit = defineEmits(["input", "blur", "focus"]);
const props = defineProps({
  label: {
    type: String,
    required: false,
  },
  required: {
    type: Boolean,
    required: false,
    default: false,
  },
  placeholder: {
    type: String,
    required: false,
    default: "Change input value use only 'v-model' property"
  },
  leftIconName: {
    type: String,
    required: false,
  },
  leftIconColor: {
    type: String,
    required: false,
  },
  rightIconName:{
    type: String,
    required: false,
  },
  rightIconColor:{ 
    type: String,
    required: false,
  },
  style:{
    type: String,
    required: false,
    default: "dark",
  },
  type: {
    type: String,
    required: true,
    default: "text",
  },
  errorMessage: {
    type: String,
    required: false,
    default: null,
  },
  hasError: {
    type: Boolean,
    required: false,
    default: false,
  },
  message: {
    type: String,
    required: false,
    default: null,
  },
  id: {
    type: String,
    required: false,
    default: null,
  },
  modelValue: {
    type: String,
    required: false,
  },
});

const showPassword = ref(false);
const val = ref(props.modelValue);
const isFocused = ref(false);
const isEmailValid = ref(true);

const inputType = computed(() => {
  if (props.type !== "password") return props.type;
  return props.type === "password" && !showPassword.value ? "password" : "text";
});

const idCreator = computed(() =>
  props.id ? props.id : "form-input-" + Math.random().toString(36).substring(7)
);

const styles = {
  dark:'bg-secondary-600 text-white-900 focus:bg-white focus:text-secondary-100',
  light:'bg-white text-secondary-100 focus:bg-secondary-600 focus:text-white-900'
}

function validateEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  isEmailValid.value = emailRegex.test(val.value);
}

function inputEvent(event) {
  emit("update:modelValue", event.target.value);
  val.value = event.target.value;
}

function removeValue(){
  emit("update:modelValue", '');
  val.value = '';
}

function blurEvent() {
  emit("blur");
  isFocused.value = false;
  if(props.type === 'email'){
    validateEmail()
  }
}

function focusEvent() {
  emit("focus");
  isFocused.value = true;
}

function togglePasswordVisibility() {
  showPassword.value = !showPassword.value;
}
</script>