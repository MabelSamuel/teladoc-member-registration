<script setup>
import { reactive } from "vue";
import countries from "../data/countries.json";
import { ref } from "vue";
import { ChevronLeftIcon, ExclamationTriangleIcon } from '@heroicons/vue/24/outline';

const formValues = reactive({
    firstName: "",
    lastName: "",
    email: "",
    country: "US",
    zipCode: "",
    postalCode: "",
    gender: "",
    dateOfBirth: "",
    isInsured: false,
    healthCode: "",
});

const formErrors = reactive({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    zipCode: "",
    postalCode: "",
    gender: "",
    dateOfBirth: "",
    healthCode: "",
});

const countryList = ref(countries);

const validation = (inputField) => {
    if (inputField === "firstName") {
        formErrors.firstName =
            formValues.firstName.trim().length < 1 ? "First name is required" : "";
    } else if (inputField === "lastName") {
        formErrors.lastName =
            formValues.lastName.trim().length < 1 ? "Last name is required" : "";
    } else if (inputField === "email") {
        const emailPattern = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
        formErrors.email = !emailPattern.test(formValues.email)
            ? "Email is required"
            : "";
    } else if (inputField === "country") {
        formErrors.country = !formValues.country ? "Please select a country" : "";
    } else if (inputField === "zipCode") {
        const zipCodePattern = /^\d{5}(-\d{4})?$/;
        formErrors.zipCode = !zipCodePattern.test(formValues.zipCode)
            ? "Please enter a valid Zip code in one of the formats: ##### or #####-####"
            : "";
    } else if (inputField === "postalCode") {
        const postalCodePattern = /^\d{4}$/;
        formErrors.postalCode = !postalCodePattern.test(formValues.postalCode)
            ? "Please enter a valid Postal code in the format: 1111"
            : "";
    } else if (inputField === "gender") {
        formErrors.gender = formValues.gender === ""
            ? "Sex assigned at birth is required"
            : "";
    } else if (inputField === "dateOfBirth") {
        formErrors.dateOfBirth = !formValues.dateOfBirth
            ? "Date of birth is required"
            : "";
    } else if (inputField === "healthCode") {
        formErrors.healthCode =
            formValues.healthCode.trim().length < 1 ? "Teladoc code is required" : "";
    }
};

const handleSubmit = () => {
    validation("firstName");
    validation("lastName");
    validation("email");
    validation("country");
    validation("zipCode");
    validation("postalCode");
    validation("gender");
    validation("dateOfBirth");
    validation("healthCode");

    if (
        !formErrors.firstName &&
        !formErrors.lastName &&
        !formErrors.email &&
        !formErrors.country &&
        !formErrors.zipCode &&
        !formErrors.postalCode &&
        !formErrors.gender &&
        !formErrors.dateOfBirth &&
        !formErrors.healthCode
    ) {
    }
};
</script>

<template>
    <div class="w-[27.5rem] mt-10">
        <div class="mb-12 flex items-center">
            <ChevronLeftIcon class="size-5 text-bluee font-medium"/>
            <span class="text-bluee font-medium text-lg">Back</span>
        </div>
        <h1 class="text-4xl font-bold text-[#181919] mb-5">Let's get started</h1>
        <p class="text-[#181919] mb-8">
            Enter your information just as it appears on your health insurance card or
            pay stub.
        </p>

        <p class="text-sm">*Required</p>
        <form @submit.prevent="handleSubmit">
            <div class="flex flex-col my-8">
                <label for="firstName" class="font-medium text-lg"
                    :class="{ 'text-red-500': formErrors.firstName }">First Name*</label>
                <input type="text" id="firstName" v-model="formValues.firstName"
                    class="border border-b border-black h-11 rounded-md p-4 shadow-inner shadow-[rgba(10, 10, 10, .1)] focus:shadow-[0_0_0_2px_#fff,_0_0_2px_4px_rgba(0,96,252,.6)]
                    focus:border-bluee focus:outline focus:outline-offset-2 focus:outline-2 focus:outline-bluee"
                    :class="{ 'border-red-500': formErrors.firstName }" @input="validation('firstName')"
                    @blur="validation('firstName')" />
                <span v-if="formErrors.firstName" class="text-lg mt-3 flex items-center"><ExclamationTriangleIcon class="size-5 fill-red-500 stroke-white"/> <span class="ml-1"> {{
                      formErrors.firstName
                    }}</span></span>
            </div>
            <div class="flex flex-col mb-8">
                <label for="lastName" class="font-medium text-lg" :class="{ 'text-red-500': formErrors.lastName }">Last
                    Name*</label>
                <input type="text" id="lastName" v-model="formValues.lastName"
                    class="border border-b border-black h-11 rounded-md p-4 shadow-inner shadow-[rgba(10, 10, 10, .1)] focus:shadow-[0_0_0_2px_#fff,_0_0_2px_4px_rgba(0,96,252,.6)]
                    focus:border-bluee focus:outline focus:outline-offset-2 focus:outline-2 focus:outline-bluee"
                    :class="{ 'border-red-500': formErrors.lastName }" @input="validation('lastName')"
                    @blur="validation('lastName')" />
                    <span v-if="formErrors.lastName" class="text-lg mt-3 flex items-center"><ExclamationTriangleIcon class="size-5 fill-red-500 stroke-white"/> <span class="ml-1"> {{
                      formErrors.lastName
                    }}</span></span>
            </div>
            <div class="flex flex-col mb-8">
                <label for="email" class="font-medium text-lg"
                    :class="{ 'text-red-500': formErrors.email }">Email*</label>
                <input type="email" id="email" v-model="formValues.email"
                    class="border border-b border-black h-11 rounded-md p-4 shadow-inner shadow-[rgba(10, 10, 10, .1)] focus:shadow-[0_0_0_2px_#fff,_0_0_2px_4px_rgba(0,96,252,.6)]
                    focus:border-bluee focus:outline focus:outline-offset-2 focus:outline-2 focus:outline-bluee"
                    :class="{ 'border-red-500': formErrors.email }" @input="validation('email')"
                    @blur="validation('email')" />
                    <span v-if="formErrors.email" class="text-lg mt-3 flex items-center"><ExclamationTriangleIcon class="size-5 fill-red-500 stroke-white"/> <span class="ml-1"> {{
                      formErrors.email
                    }}</span></span>
            </div>
            <div class="flex flex-col mb-8">
                <label for="country" class="font-medium text-lg"
                    :class="{ 'text-red-500': formErrors.country }">Country*</label>
                <select id="country" v-model="formValues.country"
                    class="border border-b border-black h-11 rounded-md px-4 shadow-inner shadow-[rgba(10, 10, 10, .1)] focus:shadow-[0_0_0_2px_#fff,_0_0_2px_4px_rgba(0,96,252,.6)]
                    focus:border-bluee focus:outline focus:outline-offset-2 focus:outline-2 focus:outline-bluee"
                    :class="{ 'border-red-500': formErrors.country }" @blur="validation('country')">
                    <option value="" disabled>Select</option>
                    <option v-for="country in countryList" :key="country.code" :value="country.code">
                        {{ country.name }}
                    </option>
                </select>
                <span v-if="formErrors.country" class="text-lg mt-3 flex items-center"><ExclamationTriangleIcon class="size-5 fill-red-500 stroke-white"/> <span class="ml-1"> {{
                      formErrors.country
                    }}</span></span>
            </div>
            <div v-if="formValues.country === 'US'" class="flex flex-col mb-8">
                <label for="zipCode" class="font-medium text-lg" :class="{ 'text-red-500': formErrors.zipCode }">Zip
                    Code*</label>
                <input type="number" id="zipCode" placeholder="##### or #####-####" v-model="formValues.zipCode"
                    class="border border-b border-black h-11 rounded-md p-4 shadow-inner shadow-[rgba(10, 10, 10, .1)] focus:shadow-[0_0_0_2px_#fff,_0_0_2px_4px_rgba(0,96,252,.6)]
                    focus:border-bluee focus:outline focus:outline-offset-2 focus:outline-2 focus:outline-bluee"
                    :class="{ 'border-red-500': formErrors.zipCode }" @input="validation('zipCode')"
                    @blur="validation('zipCode')" />
                    <span v-if="formErrors.zipCode" class=" mt-3 flex justify-center"><ExclamationTriangleIcon class="size-8 fill-red-500 stroke-white"/> <span class="ml-1 text-lg"> {{
                      formErrors.zipCode
                    }}</span></span>
            </div>
            <div v-else class="flex flex-col mb-8">
                <label for="postalCode" class="font-medium text-lg"
                    :class="{ 'text-red-500': formErrors.postalCode }">Postal Code*</label>
                <input type="number" id="postalCode" v-model="formValues.postalCode"
                    class="border border-b border-black h-11 rounded-md p-4 shadow-inner shadow-[rgba(10, 10, 10, .1)] focus:shadow-[0_0_0_2px_#fff,_0_0_2px_4px_rgba(0,96,252,.6)]
                    focus:border-bluee focus:outline focus:outline-offset-2 focus:outline-2 focus:outline-bluee"
                    :class="{ 'border-red-500': formErrors.postalCode }" @input="validation('postalCode')"
                    @blur="validation('postalCode')" />
                    <span v-if="formErrors.postalCode" class="text-lg mt-3 flex items-center"><ExclamationTriangleIcon class="size-5 fill-red-500 stroke-white"/> <span class="ml-1"> {{
                      formErrors.postalCode
                    }}</span></span>
            </div>
            <div class="flex flex-col mb-8">
                <label for="gender" class="font-medium text-lg" :class="{ 'text-red-500': formErrors.gender }">Sex
                    assigned at birth*</label>
                <select name="gender" id="gender" v-model="formValues.gender"
                    class="border border-b border-black h-11 rounded-md px-4 shadow-inner shadow-[rgba(10, 10, 10, .1)] focus:shadow-[0_0_0_2px_#fff,_0_0_2px_4px_rgba(0,96,252,.6)]
                    focus:border-bluee focus:outline focus:outline-offset-2 focus:outline-2 focus:outline-bluee"
                    :class="{ 'border-red-500': formErrors.gender }" @blur="validation('gender')">
                    <option value="">Please Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <span v-if="formErrors.gender" class="text-lg mt-3 flex items-center"><ExclamationTriangleIcon class="size-5 fill-red-500 stroke-white"/> <span class="ml-1"> {{
                      formErrors.gender
                    }}</span></span>
            </div>
            <div class="flex flex-col mb-8">
                <label for="DOB" class="font-medium text-lg" :class="{ 'border-red-500': formErrors.dateOfBirth }">Date
                    of Birth*</label>
                <span>MM/DD/YYY</span>
                <input type="date" v-model="formValues.dateOfBirth"
                    class="border border-b border-black h-11 rounded-md p-4 shadow-inner shadow-[rgba(10, 10, 10, .1)] focus:shadow-[0_0_0_2px_#fff,_0_0_2px_4px_rgba(0,96,252,.6)]
                    focus:border-bluee focus:outline focus:outline-offset-2 focus:outline-2 focus:outline-bluee"
                    :class="{ 'border-red-500': formErrors.dateOfBirth }" @input="validation('dateOfBirth')"
                    @blur="validation('dateOfBirth')" />
                    <span v-if="formErrors.dateOfBirth" class="text-lg mt-3 flex items-center"><ExclamationTriangleIcon class="size-5 fill-red-500 stroke-white"/> <span class="ml-1"> {{
                      formErrors.dateOfBirth
                    }}</span></span>
            </div>
            <div class="">
                <input type="checkbox" id="isInsured" v-model="formValues.isInsured" />
                <label for="isInsured" class="ml-3">I received a Teladoc Health code from my employer or insurance
                    company.</label>
            </div>
            <div v-if="formValues.isInsured" class="flex flex-col my-8">
                <label for="healthCode" class="font-medium text-lg"
                    :class="{ 'border-red-500': formErrors.healthCode }">Teladoc Health Code*</label>
                <input type="text" id="healthCode" v-model="formValues.healthCode"
                    class="border border-b border-black h-11 rounded-md p-4 shadow-inner shadow-[rgba(10, 10, 10, .1)] focus:shadow-[0_0_0_2px_#fff,_0_0_2px_4px_rgba(0,96,252,.6)]
                    focus:border-bluee focus:outline focus:outline-offset-2 focus:outline-2 focus:outline-bluee"
                    :class="{ 'border-red-500': formErrors.healthCode }" @input="validation('healthCode')"
                    @blur="validation('healthCode')" />
                    <span v-if="formErrors.healthCode" class="text-lg mt-3 flex items-center"><ExclamationTriangleIcon class="size-5 fill-red-500 stroke-white"/> <span class="ml-1"> {{
                      formErrors.healthCode
                    }}</span></span>
            </div>
            <button
                class="border-black mt-16 h-11 rounded-md bg-lilac text-white w-full hover:text-lilac hover:bg-[#caabe3] hover:white">
                Next
            </button>
        </form>
    </div>
</template>
