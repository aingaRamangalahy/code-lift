<script setup lang="ts">

</script>

<template>
    <Vueform size="md" :display-errors="false">
        <StaticElement name="register_title" content="Sign In" tag="h1" />
        <StaticElement name="divider" tag="hr" />
        <TextElement name="email" input-type="email" :rules="[
            'required',
            'max:255',
            'email',
        ]" placeholder="Email" field-name="Email" />
        <TextElement name="password" input-type="password" :rules="[
            'required',
            'min:8',
            'same:password_confirmation',
        ]" field-name="Password" placeholder="Password" />
        <StaticElement name="divider_1" tag="hr" />
        <ButtonElement name="signIn" :submits="true" button-label="Sign In" :full="true" size="lg" />
    </Vueform>
</template>

<style scoped></style>
