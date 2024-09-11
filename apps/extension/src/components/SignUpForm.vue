<script setup lang="ts">

</script>

<template>
    <Vueform size="md" :display-errors="false">
        <StaticElement name="register_title" content="Create account" tag="h1" />
        <StaticElement name="divider" tag="hr" />
        <TextElement name="name" placeholder="Name" :columns="{
            container: 12,
            label: 12,
            wrapper: 12,
        }" field-name="Name" :rules="[
            'required',
            'max:255',
        ]" />
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
        <TextElement name="password_confirmation" input-type="password" :rules="[
            'required',
        ]" field-name="Password confirmation" placeholder="Password again" />
        <StaticElement name="divider_1" tag="hr" />
        <ButtonElement name="register" :submits="true" button-label="Create account" :full="true" size="lg" />
    </Vueform>
</template>

<style scoped></style>
