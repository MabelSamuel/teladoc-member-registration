<script>
import {  ChevronLeftIcon  } from "@vue-hero-icons/outline"
</script>


<template>
    <div class="w-[27.5rem] mt-10">
        <div class="mb-12">
            <ChevronLeftIcon/>
            <span class="text-bluee font-medium text-lg">Back</span>
        </div>
        <h1 class="text-4xl font-bold text-[#181919] mb-5">Let's get started</h1>
        <p class="text-[#181919] mb-8">Enter your information just as it appears on your health insurance card or pay stub.</p>

        <p class="text-sm">*Required</p>
        <form>
            <div class="flex flex-col my-8">
                <label for="firstName" class="font-medium text-lg">First Name*</label>
                <input type="text" id="firstName" class="border border-b border-black h-11 rounded-md p-4 focus:border-bluee focus:outline-bluee">
            </div>
            <div class="flex flex-col mb-8">
                <label for="lastName" class="font-medium text-lg">Last Name*</label>
                <input type="text" id="lastName" class="border border-b border-black h-11 rounded-md p-4 focus:border-bluee focus:outline-bluee">
            </div>
            <div class="flex flex-col mb-8">
                <label for="email" class="font-medium text-lg">Email*</label>
                <input type="email" id="email" class="border border-b border-black h-11 rounded-md p-4 focus:border-bluee focus:outline-bluee">
            </div>
            <div class="flex flex-col mb-8">
                <label for="country" class="font-medium text-lg">Country*</label>
                <select id="country" class="border border-b border-black h-11 rounded-md focus:border-bluee focus:outline-bluee">
                    <option value="" disabled>Select</option>
                    <option value="United States of America">United States of America</option>
                </select>
            </div>
            <div class="flex flex-col mb-8">
                <label for="zipCode" class="font-medium text-lg">Zip Code*</label>
                <input type="number" id="zipCode" class="border border-b border-black h-11 rounded-md p-4 focus:border-bluee focus:outline-bluee">
            </div>
            <div class="flex flex-col mb-8">
                <label for="gender" class="font-medium text-lg">Sex assigned at birth*</label>
                <select name="gender" id="gender" class="border border-b border-black h-11 rounded-md focus:border-bluee focus:outline-bluee">
                    <option value="">Please Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div class="flex flex-col mb-8">
                <label for="DOB" class="font-medium text-lg">Date of Birth*</label>
                <span>MM/DD/YYY</span>
                <input type="date" class="border border-b border-black h-11 rounded-md p-4 mt-8 focus:border-bluee focus:outline-bluee">
            </div>
            <div class="mb-16">
                <input type="checkbox" name="" id="isInsured" class="">
                <label for="isInsured" class="ml-3">I received a Teladoc Health code from my employer or insurance company.</label>
            </div>
            <button class="border-black h-11 rounded-md bg-lilac text-white w-full  hover:text-lilac hover:bg-[#ba9bd3] hover:white
            ">Next</button>
        </form>
    </div>
</template>