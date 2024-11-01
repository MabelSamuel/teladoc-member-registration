<script>

</script>


<template>
    <div>
        <h1 class="text-4xl font-bold text-[#181919]">Let's get started</h1>
        <p>Enter your information just as it appears on your health insurance card or pay stub.</p>

        <p>*Required</p>
        <form>
            <div class="flex flex-col">
                <label for="firstName">First Name*</label>
                <input type="text" id="firstName" class="border border-b">
            </div>
            <div class="flex flex-col">
                <label for="lastName">Last Name*</label>
                <input type="text" id="lastName" class="border border-b">
            </div>
            <div class="flex flex-col">
                <label for="email">Email*</label>
                <input type="email" id="email" class="border border-b">
            </div>
            <div class="flex flex-col">
                <label for="country">Country*</label>
                <select id="country" class="border border-b">
                    <option value="" disabled>Select</option>
                    <option value="United States of America">United States of America</option>
                </select>
            </div>
            <div class="flex flex-col">
                <label for="zipCode">Zip Code*</label>
                <input type="number" id="zipCode" class="border border-b">
            </div>
            <div class="flex flex-col">
                <label for="gender">Sex assigned at birth*</label>
                <select name="gender" id="gender" class="border border-b">
                    <option value="">Please Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div class="flex flex-col">
                <label for="DOB">Date of Birth*</label>
                <span>MM/DD/YYY</span>
                <input type="date" class="border border-b">
            </div>
            <div>
                <input type="checkbox" name="" id="isInsured">
                <label for="isInsured">I received a Teladoc Health code from my employer or insurance company.</label>
            </div>
            <button class="rounded- bg-lilac text-white w-full hover:text-lilac hover:white
            ">Next</button>
        </form>
    </div>
</template>